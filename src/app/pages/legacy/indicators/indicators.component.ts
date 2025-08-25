import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { BackendService, BudgetData, DashboardStats } from '../../../services/backend.service';
import { Constants } from '../../../services/constants';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  // Make Number available in template
  Number = Number;

  // Real-time budget data from API
  budgetData = {
    revenue: {
      amount: 0,
      approvedValue: 0,
      perfoValue: 0,
      percent: '0',
      description: 'Нэгдсэн төсвийн орлого загвар',
      billionAmount: '0'
    },
    expenditure: {
      amount: 0,
      approvedValue: 0,
      perfoValue: 0,
      percent: '0',
      description: 'Нэгдсэн төсвийн зарлага загвар',
      billionAmount: '0',
      percentage: 0
    },
    balance: {
      amount: 0,
      approvedValue: 0,
      perfoValue: 0,
      percent: '0',
      description: 'Тэнцвэржүүлсэн тэнцэл',
      billionAmount: '0'
    }
  };

  // Additional budget statistics
  budgetStats = {
    totalBudget: 0,
    executionRate: '0',
    currentQuarter: 0,
    currentYear: new Date().getFullYear(),
    lastUpdated: '',
    revenuePercentage: '50.0',
    expenditurePercentage: '50.0'
  };

  // API parameters
  params = { 
    year: Constants.year || new Date().getFullYear().toString(), 
    category: Constants.category || 'APPROVED' 
  };

  // Animation states
  titleVisible = true;
  indicatorsVisible: boolean[] = [true, true, true];
  dataLoading = false;
  isAdmin = false;
  editMode = false;

  address = [
    { address: 'Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Government street 12' }
  ];

  contacts = [
    { name: '7011-1234', description: 'info@yourdomain.mn' }
  ];

  links = [
    { name: 'Төсвийн портал', url: 'https://budget.gov.mn' }
  ];

  constructor(private mainService: MainService, private backendService: BackendService) { }

  ngOnInit(): void {
    console.log('🚀 Indicators component initialized');
    
    // Test backend connection first
    this.testBackendConnection();
    
    this.loadRealBudgetData();
    this.loadBackendBudgetData(); // Load data from new backend
    this.loadReleaseDate();
    
    // Show everything immediately
    this.titleVisible = true;
    this.indicatorsVisible = [true, true, true];

    // Check if user is admin (implement your auth logic here)
    this.checkAdminStatus();
  }

  /**
   * Test backend connection and fetch live data
   */
  async testBackendConnection() {
    try {
      console.log('� Connecting to restored backend at http://localhost:3001...');
      
      // Test health endpoint first
      const healthResponse = await fetch('http://localhost:3001/api/health');
      const healthData = await healthResponse.json();
      console.log('✅ Backend health check:', healthData);
      
      // Fetch revenue data
      console.log('📈 Fetching revenue data...');
      const revenueResponse = await fetch('http://localhost:3001/api/public/budget/revenue?year=2025');
      const revenueData = await revenueResponse.json();
      
      if (revenueData && revenueData.length > 0) {
        const revenueAmount = revenueData[0].amount;
        console.log('💰 Live revenue data:', revenueAmount, 'MNT');
        
        this.budgetData.revenue.amount = revenueAmount;
        this.budgetData.revenue.approvedValue = revenueAmount;
        this.budgetData.revenue.billionAmount = (revenueAmount / 1000000000).toFixed(1);
        this.budgetData.revenue.percent = '100.00';
        this.budgetData.revenue.description = `Live backend: 2025 оны нийт орлого ${this.budgetData.revenue.billionAmount} тэрбум төгрөг`;
      }
      
      // Fetch expenditure data
      console.log('📉 Fetching expenditure data...');
      const expenditureResponse = await fetch('http://localhost:3001/api/public/budget/expenditure?year=2025');
      const expenditureData = await expenditureResponse.json();
      
      if (expenditureData && expenditureData.length > 0) {
        const expenditureAmount = expenditureData[0].amount;
        console.log('💸 Live expenditure data:', expenditureAmount, 'MNT');
        
        this.budgetData.expenditure.amount = expenditureAmount;
        this.budgetData.expenditure.approvedValue = expenditureAmount;
        this.budgetData.expenditure.billionAmount = (expenditureAmount / 1000000000).toFixed(1);
        this.budgetData.expenditure.percent = '100.00';
        this.budgetData.expenditure.description = `Live backend: 2025 оны нийт зарлага ${this.budgetData.expenditure.billionAmount} тэрбум төгрөг`;
      }
      
      // Update balance and stats
      this.updateBalance();
      this.calculateBudgetStats();
      
      console.log('✅ Successfully connected to restored backend!');
      console.log('📊 Final data - Revenue:', this.budgetData.revenue.billionAmount + 'B MNT');
      console.log('📊 Final data - Expenditure:', this.budgetData.expenditure.billionAmount + 'B MNT');
      
    } catch (error) {
      console.error('❌ Backend connection failed, using fallback data:', error);
      
      // Fallback to known database values if backend is not available
      this.budgetData.revenue.amount = 6149704663;
      this.budgetData.revenue.billionAmount = '6.1';
      this.budgetData.revenue.percent = '100.00';
      
      this.budgetData.expenditure.amount = 6502667867;
      this.budgetData.expenditure.billionAmount = '6.5';
      this.budgetData.expenditure.percent = '100.00';
      
      this.updateBalance();
      this.calculateBudgetStats();
    }
  }

  /**
   * Load real budget data from Mongolian Ministry of Finance API
   */
  loadRealBudgetData() {
    this.dataLoading = true;
    
    // Use the same API endpoint as the main budget component
    this.mainService.baseGet(
      Constants.HOST + Constants.BUDGET_MAIN + "?year=" + this.params.year, 
      null, 
      true
    ).then((result: any) => {
      console.log('Budget API Response:', result);
      
      if (result && result.length > 0) {
        result.forEach(item => {
          // Process revenue data (IN)
          if (item.code === 'IN') {
            this.budgetData.revenue.approvedValue = item.approvedValue || 0;
            this.budgetData.revenue.perfoValue = item.perfoValue || 0;
            this.budgetData.revenue.percent = Number(item.percent || 0).toFixed(2);
            this.budgetData.revenue.billionAmount = (item.approvedValue / 1000000000).toFixed(1);
            this.budgetData.revenue.amount = item.approvedValue;
            this.budgetData.revenue.description = `Нэгдсэн төсвийн нийт орлого ${this.params.year} оны байдлаар ${this.budgetData.revenue.billionAmount} тэрбум төгрөгт хүрсэн байна. Гүйцэтгэл ${this.budgetData.revenue.percent}% байна.`;
          }
          
          // Process expenditure data (OUT)
          if (item.code === 'OUT') {
            this.budgetData.expenditure.approvedValue = item.approvedValue || 0;
            this.budgetData.expenditure.perfoValue = item.perfoValue || 0;
            this.budgetData.expenditure.percent = Number(item.percent || 0).toFixed(2);
            this.budgetData.expenditure.billionAmount = (item.approvedValue / 1000000000).toFixed(1);
            this.budgetData.expenditure.amount = item.approvedValue;
            this.budgetData.expenditure.percentage = Number(item.percent || 0);
            this.budgetData.expenditure.description = `Нэгдсэн төсвийн нийт зарлага ${this.params.year} оны байдлаар ${this.budgetData.expenditure.billionAmount} тэрбум төгрөг болж ${this.budgetData.expenditure.percent}% гүйцэтгэлтэй гарчээ.`;
          }
          
          // Process balance data (EQUAL)
          if (item.code === 'EQUAL') {
            this.budgetData.balance.approvedValue = item.approvedValue || 0;
            this.budgetData.balance.perfoValue = item.perfoValue || 0;
            this.budgetData.balance.percent = Number(item.percent || 0).toFixed(2);
            this.budgetData.balance.billionAmount = Math.abs(item.approvedValue / 1000000000).toFixed(1);
            this.budgetData.balance.amount = item.approvedValue;
            
            const balanceType = item.approvedValue >= 0 ? 'илүүдэлтэй' : 'алдагдалтай';
            this.budgetData.balance.description = `Тэнцвэржүүлсэн тэнцэл ${this.params.year} оны байдлаар ${this.budgetData.balance.billionAmount} тэрбум төгрөгийн ${balanceType} гарсан байна.`;
          }
        });
        
        // Calculate overall statistics
        this.calculateBudgetStats();
      }
      
      this.dataLoading = false;
    }).catch((error) => {
      console.error('Error loading budget data:', error);
      this.dataLoading = false;
      // Keep default values on error
    });
  }

  /**
   * Load release date information
   */
  loadReleaseDate() {
    this.mainService.baseGet(
      Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=Sheet1&year=" + this.params.year, 
      null, 
      true
    ).then((result: any) => {
      if (result && result.length > 0) {
        this.budgetStats.lastUpdated = result[0].updateDate || '';
      }
    }).catch((error) => {
      console.error('Error loading release date:', error);
    });
  }

  /**
   * Calculate additional budget statistics
   */
  calculateBudgetStats() {
    this.budgetStats.totalBudget = this.budgetData.revenue.approvedValue + this.budgetData.expenditure.approvedValue;
    
    // Calculate average execution rate
    const revenueExecution = Number(this.budgetData.revenue.percent) || 0;
    const expenditureExecution = Number(this.budgetData.expenditure.percent) || 0;
    this.budgetStats.executionRate = ((revenueExecution + expenditureExecution) / 2).toFixed(1);
    
    // Calculate percentage distribution for progress bar
    const totalAmount = Math.abs(this.budgetData.revenue.amount) + Math.abs(this.budgetData.expenditure.amount);
    if (totalAmount > 0) {
      this.budgetStats.revenuePercentage = (Math.abs(this.budgetData.revenue.amount) / totalAmount * 100).toFixed(1);
      this.budgetStats.expenditurePercentage = (Math.abs(this.budgetData.expenditure.amount) / totalAmount * 100).toFixed(1);
    } else {
      this.budgetStats.revenuePercentage = '50.0';
      this.budgetStats.expenditurePercentage = '50.0';
    }
    
    // Determine current quarter
    const month = new Date().getMonth() + 1;
    this.budgetStats.currentQuarter = Math.ceil(month / 3);
    this.budgetStats.currentYear = Number(this.params.year);
  }

  /**
   * Load budget data from new NestJS backend
   */
  async loadBackendBudgetData() {
    try {
      console.log('🚀 Loading data from new backend...');
      
      // Check if backend is available
      await this.backendService.checkHealth();
      console.log('✅ Backend is available');
      
      // Load specific revenue data from backend
      console.log('📈 Loading revenue data for year', this.params.year);
      const revenueData: BudgetData[] = await this.backendService.getRevenueDataByYear(Number(this.params.year));
      
      if (revenueData && revenueData.length > 0) {
        console.log('✅ Backend revenue data loaded:', revenueData);
        this.processBackendRevenueData(revenueData);
      } else {
        console.log('❌ No revenue data found in backend for year', this.params.year);
      }
      
      // Load expenditure data from backend
      console.log('📉 Loading expenditure data for year', this.params.year);
      const expenditureData: BudgetData[] = await this.backendService.getExpenditureDataByYear(Number(this.params.year));
      
      if (expenditureData && expenditureData.length > 0) {
        console.log('✅ Backend expenditure data loaded:', expenditureData);
        this.processBackendExpenditureData(expenditureData);
      } else {
        console.log('❌ No expenditure data found in backend for year', this.params.year);
      }
      
      // Load dashboard stats from new backend
      console.log('📊 Loading dashboard stats...');
      const dashboardStats: DashboardStats = await this.backendService.getDashboardStats();
      
      if (dashboardStats) {
        // Update budget stats with backend data
        this.budgetStats.totalBudget = dashboardStats.totalBudget || this.budgetStats.totalBudget;
        this.budgetStats.lastUpdated = dashboardStats.lastUpdate || this.budgetStats.lastUpdated;
        
        console.log('✅ Dashboard stats loaded:', dashboardStats);
      }
      
    } catch (error) {
      console.log('❌ Backend not available, using government API only:', error);
      console.error('Backend error details:', error);
      // Continue with government API data only - this is expected when backend is not running
    }
  }

  /**
   * Process budget data from backend and integrate with existing structure
   */
  processBackendBudgetData(budgetData: BudgetData[]) {
    // Calculate totals by category
    let totalRevenue = 0;
    let totalExpenditure = 0;
    
    budgetData.forEach(item => {
      if (item.type === 'revenue' || item.category === 'revenue') {
        totalRevenue += item.amount;
      } else if (item.type === 'expenditure' || item.category === 'expenditure') {
        totalExpenditure += item.amount;
      }
    });
    
    // Update existing budget data structure with backend data
    if (totalRevenue > 0) {
      this.budgetData.revenue.amount = Math.max(this.budgetData.revenue.amount, totalRevenue);
      this.budgetData.revenue.billionAmount = (totalRevenue / 1000000000).toFixed(1);
      this.budgetData.revenue.description = `Backend системээс: ${this.backendService.formatCurrency(totalRevenue)} орлого`;
    }
    
    if (totalExpenditure > 0) {
      this.budgetData.expenditure.amount = Math.max(this.budgetData.expenditure.amount, totalExpenditure);
      this.budgetData.expenditure.billionAmount = (totalExpenditure / 1000000000).toFixed(1);
      this.budgetData.expenditure.description = `Backend системээс: ${this.backendService.formatCurrency(totalExpenditure)} зарлага`;
    }
    
    // Update balance
    this.budgetData.balance.amount = this.budgetData.revenue.amount - this.budgetData.expenditure.amount;
    this.budgetData.balance.billionAmount = (this.budgetData.balance.amount / 1000000000).toFixed(1);
    
    // Recalculate stats
    this.calculateBudgetStats();
  }

  /**
   * Process revenue data from backend
   */
  processBackendRevenueData(revenueData: BudgetData[]) {
    console.log('🔍 Processing revenue data from backend:', revenueData);
    let totalRevenue = 0;
    
    revenueData.forEach(item => {
      console.log('Revenue item:', item.amount, item.category, item.ministry);
      totalRevenue += item.amount;
    });
    
    if (totalRevenue > 0) {
      console.log('✅ Processing revenue data from backend:', totalRevenue, 'MNT');
      this.budgetData.revenue.amount = totalRevenue; // Use the actual value, don't use Math.max
      this.budgetData.revenue.approvedValue = totalRevenue;
      this.budgetData.revenue.billionAmount = (totalRevenue / 1000000000).toFixed(1);
      this.budgetData.revenue.description = `Backend системээс: ${this.params.year} оны нийт орлого ${this.budgetData.revenue.billionAmount} тэрбум төгрөг`;
      this.budgetData.revenue.percent = '100.00'; // Set to 100% execution for now
      
      console.log('Revenue data updated:', this.budgetData.revenue);
    } else {
      console.log('❌ No valid revenue data found');
    }
    
    // Update balance calculation
    this.updateBalance();
    
    // Recalculate stats
    this.calculateBudgetStats();
  }

  /**
   * Process expenditure data from backend
   */
  processBackendExpenditureData(expenditureData: BudgetData[]) {
    console.log('🔍 Processing expenditure data from backend:', expenditureData);
    let totalExpenditure = 0;
    
    expenditureData.forEach(item => {
      console.log('Expenditure item:', item.amount, item.category, item.ministry);
      totalExpenditure += item.amount;
    });
    
    if (totalExpenditure > 0) {
      console.log('✅ Processing expenditure data from backend:', totalExpenditure, 'MNT');
      this.budgetData.expenditure.amount = totalExpenditure; // Use the actual value, don't use Math.max
      this.budgetData.expenditure.approvedValue = totalExpenditure;
      this.budgetData.expenditure.billionAmount = (totalExpenditure / 1000000000).toFixed(1);
      this.budgetData.expenditure.description = `Backend системээс: ${this.params.year} оны нийт зарлага ${this.budgetData.expenditure.billionAmount} тэрбум төгрөг`;
      this.budgetData.expenditure.percent = '100.00'; // Set to 100% execution for now
      
      console.log('Expenditure data updated:', this.budgetData.expenditure);
    } else {
      console.log('❌ No valid expenditure data found');
    }
    
    // Update balance calculation
    this.updateBalance();
    
    // Recalculate stats
    this.calculateBudgetStats();
  }

  /**
   * Update balance calculation
   */
  updateBalance() {
    this.budgetData.balance.amount = this.budgetData.revenue.amount - this.budgetData.expenditure.amount;
    this.budgetData.balance.approvedValue = this.budgetData.balance.amount;
    this.budgetData.balance.billionAmount = Math.abs(this.budgetData.balance.amount / 1000000000).toFixed(1);
    
    const balanceType = this.budgetData.balance.amount >= 0 ? 'илүүдэлтэй' : 'алдагдалтай';
    this.budgetData.balance.description = `Тэнцвэржүүлсэн тэнцэл ${this.params.year} оны байдлаар ${this.budgetData.balance.billionAmount} тэрбум төгрөгийн ${balanceType} гарсан байна.`;
    
    console.log('Balance updated:', this.budgetData.balance);
  }

  /**
   * Process aggregated data for enhanced statistics
   */
  processAggregatedData(aggregates: any[]) {
    // You can use this data to create charts or additional statistics
    // For now, we'll just log it
    console.log('Aggregated budget data by category:', aggregates);
    
    // Update additional stats
    const totalFromAggregates = aggregates.reduce((sum, item) => sum + (item.total || 0), 0);
    if (totalFromAggregates > 0) {
      this.budgetStats.totalBudget = Math.max(this.budgetStats.totalBudget, totalFromAggregates);
    }
  }

  loadBudgetData() {
    // Deprecated: Use loadRealBudgetData() instead
    this.loadRealBudgetData();
  }

  checkAdminStatus() {
    // Implement your admin check logic here
    // this.isAdmin = this.authService.isAdmin();
    this.isAdmin = true; // Set to true for demo purposes
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveBudgetData() {
    // Save data to API
    /*
    this.mainService.basePost(Constants.HOST + '/api/budget-indicators', this.budgetData, true)
      .then((result: any) => {
        console.log('Budget data saved successfully');
        this.editMode = false;
      })
      .catch(error => {
        console.log('Error saving budget data:', error);
      });
    */
    this.editMode = false;
    console.log('Budget data would be saved:', this.budgetData);
  }

  cancelEdit() {
    this.editMode = false;
    this.loadBudgetData(); // Reload original data
  }

  formatNumber(num: number): string {
    return new Intl.NumberFormat('mn-MN').format(num);
  }

  formatBillionNumber(num: number): string {
    return num.toLocaleString('mn-MN', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }

}
