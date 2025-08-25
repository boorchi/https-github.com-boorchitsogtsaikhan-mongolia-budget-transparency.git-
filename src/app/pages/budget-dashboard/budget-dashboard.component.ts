import { Component, OnInit } from '@angular/core';
import { BackendService, BudgetData, DashboardStats, IndicatorData } from '../../services/backend.service';

@Component({
  selector: 'app-budget-dashboard',
  templateUrl: './budget-dashboard.component.html',
  styleUrls: ['./budget-dashboard.component.scss']
})
export class BudgetDashboardComponent implements OnInit {
  loading = false;
  backendConnected = false;
  budgetData: BudgetData[] = [];
  revenueData: BudgetData[] = [];
  indicatorsData: IndicatorData[] = [];
  dashboardStats: DashboardStats | null = null;
  aggregatedData: any[] = [];
  selectedYear = new Date().getFullYear();
  selectedCategory = '';
  selectedMinistry = '';
  selectedIndicatorCategory = '';

  // Available filter options
  availableYears = [2025, 2024, 2023, 2022, 2021];
  availableCategories = [
    { key: 'education', name: 'Боловсрол' },
    { key: 'health', name: 'Эрүүл мэнд' },
    { key: 'infrastructure', name: 'Дэд бүтэц' },
    { key: 'defense', name: 'Батлан хамгаалах' },
    { key: 'social', name: 'Нийгмийн хамгаалал' },
    { key: 'environment', name: 'Байгаль орчин' },
    { key: 'agriculture', name: 'Хөдөө аж ахуй' },
    { key: 'tourism', name: 'Аялал жуулчлал' },
    { key: 'culture', name: 'Соёл урлаг' },
    { key: 'transport', name: 'Тээвэр харилцаа' }
  ];

  availableIndicatorCategories = [
    { key: 'economic', name: 'Эдийн засаг' },
    { key: 'social', name: 'Нийгэм' },
    { key: 'fiscal', name: 'Төсөв санхүү' },
    { key: 'environmental', name: 'Байгаль орчин' },
    { key: 'governance', name: 'Засаглал' }
  ];

  constructor(
    public backendService: BackendService
  ) {}

  async ngOnInit() {
    await this.checkBackendConnection();
    if (this.backendConnected) {
      await this.loadDashboardData();
    }
  }

  /**
   * Check if backend is available
   */
  async checkBackendConnection() {
    try {
      this.backendConnected = await this.backendService.checkBackendConnection();
      console.log('Backend connection status:', this.backendConnected);
    } catch (error) {
      console.error('Backend connection check failed:', error);
      this.backendConnected = false;
    }
  }

  /**
   * Load all dashboard data
   */
  async loadDashboardData() {
    this.loading = true;
    
    try {
      // Load dashboard statistics
      this.dashboardStats = await this.backendService.getDashboardStats();
      
      // Load budget data (expenditure)
      await this.loadBudgetData();
      
      // Load revenue data
      await this.loadRevenueData();
      
      // Only load indicators if backend is connected
      if (this.backendConnected) {
        await this.loadIndicatorsData();
      }
      
      // Load aggregated data
      this.aggregatedData = await this.backendService.getBudgetAggregates('category');
      
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      this.loading = false;
    }
  }

  /**
   * Load budget data based on current filters
   */
  async loadBudgetData() {
    try {
      if (this.selectedCategory) {
        this.budgetData = await this.backendService.getBudgetDataByCategory(this.selectedCategory);
      } else if (this.selectedMinistry) {
        this.budgetData = await this.backendService.getBudgetDataByMinistry(this.selectedMinistry);
      } else {
        this.budgetData = await this.backendService.getBudgetDataByYear(this.selectedYear);
      }
    } catch (error) {
      console.error('Error loading budget data:', error);
      this.budgetData = [];
    }
  }

  /**
   * Load revenue data based on current filters
   */
  async loadRevenueData() {
    try {
      this.revenueData = await this.backendService.getRevenueDataByYear(this.selectedYear);
    } catch (error) {
      console.error('Error loading revenue data:', error);
      this.revenueData = [];
    }
  }

  /**
   * Load indicators data based on current filters
   */
  async loadIndicatorsData() {
    try {
      if (this.selectedIndicatorCategory) {
        this.indicatorsData = await this.backendService.getIndicatorsByCategory(this.selectedIndicatorCategory);
      } else {
        this.indicatorsData = await this.backendService.getIndicatorsByYear(this.selectedYear);
      }
    } catch (error) {
      console.error('Error loading indicators data:', error);
      this.indicatorsData = [];
    }
  }

  /**
   * Handle year filter change
   */
  async onYearChange(year: number) {
    this.selectedYear = year;
    this.selectedCategory = '';
    this.selectedMinistry = '';
    this.selectedIndicatorCategory = '';
    this.loading = true;
    await this.loadBudgetData();
    
    // Only reload indicators if backend is connected
    if (this.backendConnected) {
      await this.loadIndicatorsData();
    }
    
    this.loading = false;
  }

  /**
   * Handle category filter change
   */
  async onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.selectedMinistry = '';
    this.loading = true;
    await this.loadBudgetData();
    this.loading = false;
  }

  /**
   * Handle ministry filter change
   */
  async onMinistryChange(ministry: string) {
    this.selectedMinistry = ministry;
    this.selectedCategory = '';
    this.loading = true;
    await this.loadBudgetData();
    this.loading = false;
  }

  /**
   * Handle indicator category filter change
   */
  async onIndicatorCategoryChange(category: string) {
    this.selectedIndicatorCategory = category;
    this.loading = true;
    await this.loadIndicatorsData();
    this.loading = false;
  }

  /**
   * Clear all filters
   */
  async clearFilters() {
    this.selectedCategory = '';
    this.selectedMinistry = '';
    this.selectedIndicatorCategory = '';
    this.selectedYear = new Date().getFullYear();
    this.loading = true;
    await this.loadBudgetData();
    
    // Only reload indicators if backend is connected
    if (this.backendConnected) {
      await this.loadIndicatorsData();
    }
    
    this.loading = false;
  }

  /**
   * Get unique ministries from budget data
   */
  getUniqueMinistries(): string[] {
    const ministries = [...new Set(this.budgetData.map(item => item.ministry))];
    return ministries.filter(ministry => ministry && ministry.length > 0);
  }

  /**
   * Calculate total budget amount
   */
  getTotalBudget(): number {
    return this.budgetData.reduce((total, item) => total + (item.amount || 0), 0);
  }

  /**
   * Get budget data grouped by category
   */
  getBudgetByCategory(): any[] {
    const categoryGroups: { [key: string]: { name: string, total: number, count: number } } = {};
    
    this.budgetData.forEach(item => {
      const categoryKey = item.category || 'other';
      const categoryName = this.backendService.getCategoryDisplayName(categoryKey);
      
      if (!categoryGroups[categoryKey]) {
        categoryGroups[categoryKey] = { name: categoryName, total: 0, count: 0 };
      }
      
      categoryGroups[categoryKey].total += item.amount || 0;
      categoryGroups[categoryKey].count += 1;
    });
    
    return Object.keys(categoryGroups).map(key => ({
      category: key,
      ...categoryGroups[key]
    })).sort((a, b) => b.total - a.total);
  }

  /**
   * Get budget data grouped by ministry
   */
  getBudgetByMinistry(): any[] {
    const ministryGroups: { [key: string]: { name: string, total: number, count: number } } = {};
    
    this.budgetData.forEach(item => {
      const ministryKey = item.ministry || 'Unknown';
      
      if (!ministryGroups[ministryKey]) {
        ministryGroups[ministryKey] = { name: ministryKey, total: 0, count: 0 };
      }
      
      ministryGroups[ministryKey].total += item.amount || 0;
      ministryGroups[ministryKey].count += 1;
    });
    
    return Object.keys(ministryGroups).map(key => ({
      ministry: key,
      ...ministryGroups[key]
    })).sort((a, b) => b.total - a.total);
  }

  /**
   * Get total revenue amount
   */
  getTotalRevenue(): number {
    return this.revenueData.reduce((sum, item) => sum + (item.amount || 0), 0);
  }

  /**
   * Get total expenditure amount
   */
  getTotalExpenditure(): number {
    return this.budgetData.reduce((sum, item) => sum + (item.amount || 0), 0);
  }

  /**
   * Format currency for display
   */
  formatCurrency(amount: number): string {
    return this.backendService.formatCurrency(amount);
  }

  /**
   * Get percentage of total budget
   */
  getPercentageOfTotal(amount: number): string {
    const total = this.getTotalBudget();
    if (total === 0) return '0';
    return ((amount / total) * 100).toFixed(1);
  }

  /**
   * Get indicators grouped by category
   */
  getIndicatorsByCategory(): any[] {
    const categoryGroups: { [key: string]: { name: string, indicators: IndicatorData[] } } = {};
    
    this.indicatorsData.forEach(indicator => {
      const categoryKey = indicator.category || 'other';
      const categoryName = this.getIndicatorCategoryDisplayName(categoryKey);
      
      if (!categoryGroups[categoryKey]) {
        categoryGroups[categoryKey] = { name: categoryName, indicators: [] };
      }
      
      categoryGroups[categoryKey].indicators.push(indicator);
    });
    
    return Object.keys(categoryGroups).map(key => ({
      category: key,
      ...categoryGroups[key]
    }));
  }

  /**
   * Get indicator category display name in Mongolian
   */
  getIndicatorCategoryDisplayName(category: string): string {
    const categoryNames = {
      'economic': 'Эдийн засаг',
      'social': 'Нийгэм',
      'fiscal': 'Төсөв санхүү',
      'environmental': 'Байгаль орчин',
      'governance': 'Засаглал',
      'other': 'Бусад'
    };
    
    return categoryNames[category] || category;
  }

  /**
   * Get indicator status icon
   */
  getIndicatorStatusIcon(status: string): string {
    switch (status) {
      case 'increase':
        return '📈';
      case 'decrease':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '📊';
    }
  }

  /**
   * Get indicator status color class
   */
  getIndicatorStatusClass(status: string): string {
    switch (status) {
      case 'increase':
        return 'text-success';
      case 'decrease':
        return 'text-danger';
      case 'stable':
        return 'text-warning';
      default:
        return 'text-info';
    }
  }

  /**
   * Track function for ngFor performance optimization
   */
  trackByFn(index: number, item: BudgetData): any {
    return item.id || index;
  }

  /**
   * Track function for indicators ngFor performance optimization
   */
  trackIndicatorByFn(index: number, item: IndicatorData): any {
    return item.id || index;
  }

  /**
   * Math helper for templates
   */
  get Math() {
    return Math;
  }

  /**
   * Check if indicators section should be displayed
   */
  shouldShowIndicators(): boolean {
    return this.backendConnected && this.indicatorsData.length > 0;
  }
}
