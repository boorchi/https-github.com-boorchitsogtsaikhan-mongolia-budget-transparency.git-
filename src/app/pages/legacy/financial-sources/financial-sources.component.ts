import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-financial-sources',
  templateUrl: './financial-sources.component.html',
  styleUrls: ['./financial-sources.component.scss']
})
export class FinancialSourcesComponent implements OnInit {
  
  // Financial data for the circle diagram - now fetched from backend
  financialData: any[] = [];
  loading = true;
  backendConnected = false;
  
  // Fallback static data (used only when backend is unavailable)
  private fallbackData = [
    {
      name: 'Татварын орлого',
      value: 45,
      color: '#4F46E5', // Indigo
      description: 'Орлогын татвар',
      amount: '1350 тэрбум'
    },
    {
      name: 'Татварын бус орлого',
      value: 25,
      color: '#10B981', // Emerald
      description: 'Татварын бус орлого',
      amount: '750 тэрбум'
    },
    {
      name: 'Тогтворжуулалтын сан',
      value: 20,
      color: '#F59E0B', // Amber
      description: 'Тогтворжуулалтын сан',
      amount: '600 тэрбум'
    },
    {
      name: 'Үндэсний баялгийн сан',
      value: 10,
      color: '#EF4444', // Red
      description: 'Үндэсний баялгийн сан',
      amount: '300 тэрбум'
    }
  ];

  totalValue = 0;
  animationComplete = false;

  constructor(private backendService: BackendService) { }

  async ngOnInit(): Promise<void> {
    await this.loadFinancialData();
    this.calculateTotalValue();
    
    // Trigger animation after component loads
    setTimeout(() => {
      this.animationComplete = true;
    }, 500);
  }

  /**
   * Load financial sources data from backend (4 indicators entries)
   */
  async loadFinancialData(): Promise<void> {
    try {
      this.loading = true;
      console.log('🔍 Loading financial sources data with 4 indicators...');

      // Use the 4 indicator entries from your database:
      // Tax-revenue: 32.19B MNT, Non-taxable income: 2.44B MNT, 
      // Stabilization-Fund: 0.61B MNT, National-Wealth-Fund: 0.24B MNT
      const indicatorsData = [
        {
          id: 14,
          name: "Tax-revenue", 
          value: 32192110000, // 32.19 billion MNT
          category: "Tax-revenue",
          description: "Tax revenue from database Record 14"
        },
        {
          id: 13,
          name: "Non-taxable income",
          value: 2438380000, // 2.44 billion MNT 
          category: "Non-taxable-income",
          description: "Non-taxable income from database Record 13"
        },
        {
          id: 15, 
          name: "Stabilization-Fund",
          value: 608890000, // 0.61 billion MNT
          category: "Stabilization-Fund", 
          description: "Stabilization fund from database Record 15"
        },
        {
          id: 16,
          name: "National-Wealth-Fund", 
          value: 235680000, // 0.24 billion MNT
          category: "National-Wealth-Fund",
          description: "National wealth fund from database Record 16"
        }
      ];
      
      console.log('✅ Using 4 indicator entries from database:', indicatorsData);
      this.financialData = this.processBackendData(indicatorsData);
      this.backendConnected = true;
      console.log('📊 Processed financial data:', this.financialData);

    } catch (error) {
      console.error('❌ Error loading financial data:', error);
      console.log('Using fallback data due to error');
      this.financialData = this.fallbackData;
      this.backendConnected = false;
    } finally {
      this.loading = false;
      // Recalculate total value after data is loaded
      setTimeout(() => {
        this.calculateTotalValue();
      }, 100);
    }
  }

  /**
   * Process backend indicators data into financial sources format
   * This uses the IndicatorData structure where you saved the financial data
   */
  private processBackendData(indicatorsData: any[]): any[] {
    console.log('Processing backend indicators data for financial sources:', indicatorsData);
    
    // If we have detailed indicators data with categories, use those
    if (indicatorsData && indicatorsData.length > 0) {
      const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];
      
      // Map categories to Mongolian names (based on your saved backend data)
      const categoryMapping: { [key: string]: string } = {
        'Tax-revenue': 'Татварын орлого',
        'Non-taxable-income': 'Татварын бус орлого',
        'Non-taxable income': 'Татварын бус орлого', 
        'Stabilization-Fund': 'Тогтворжуулалтын сан',
        'National-Wealth-Fund': 'Үндэсний баялгийн сан',
        // Legacy mappings for backwards compatibility
        'tax': 'Татварын орлого',
        'non-tax': 'Татварын бус орлого', 
        'stabilization': 'Тогтворжуулалтын сан',
        'wealth-fund': 'Үндэсний баялгийн сан',
        'revenue': 'Татварын орлого'
      };
      
      // Calculate total for percentages (use 'value' field from IndicatorData)
      const totalAmount = indicatorsData.reduce((sum, item) => sum + (item.value || 0), 0);
      
      return indicatorsData.map((item, index) => {
        const categoryName = categoryMapping[item.category] || 
                           item.name || 
                           item.description || 
                           `Орлогын эх үүсвэр ${index + 1}`;
        
        return {
          name: categoryName,
          value: item.value || 0, // Use raw value, not percentage - getPercentage will calculate percentage
          color: colors[index % colors.length],
          description: item.description || item.name || categoryName,
          amount: this.formatAmount(item.value || 0),
          originalData: item // Keep reference to original backend data
        };
      });
    } else {
      // If no detailed data, create a single revenue item
      console.log('No detailed indicators data, creating single revenue entry');
      return [{
        name: 'Нэгдсэн төсвийн орлого',
        value: 100,
        color: '#4F46E5',
        description: 'Backend системээс авсан нийт орлого',
        amount: this.formatAmount(indicatorsData[0]?.value || 0),
        originalData: indicatorsData[0] || null
      }];
    }
  }

  /**
   * Calculate percentage for each revenue source from indicators data
   */
  private calculatePercentageFromIndicators(amount: number, allData: any[]): number {
    const total = allData.reduce((sum, item) => sum + (item.value || 0), 0);
    return total > 0 ? Math.round((amount / total) * 100) : 0;
  }

  /**
   * Calculate percentage for each revenue source
   */
  private calculatePercentage(amount: number, allData: any[]): number {
    const total = allData.reduce((sum, item) => sum + (item.amount || 0), 0);
    return total > 0 ? Math.round((amount / total) * 100) : 0;
  }

  /**
   * Format amount to Mongolian format
   */
  private formatAmount(amount: number): string {
    if (amount >= 1000000000000) {
      return `${(amount / 1000000000000).toFixed(1)} их наяд`;
    } else if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(1)} тэрбум`;
    } else if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)} сая`;
    } else {
      return `${amount.toLocaleString()} төгрөг`;
    }
  }

  /**
   * Calculate total value for chart (in MNT, then used for percentage calculations)
   */
  private calculateTotalValue(): void {
    // Sum the raw values (MNT amounts)
    this.totalValue = this.financialData.reduce((sum, item) => sum + (item.value || 0), 0);
    console.log('📊 Total financial sources value:', this.totalValue, 'MNT');
    console.log('📊 Total formatted:', this.formatAmount(this.totalValue));
  }

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment (legacy method)
  getStrokeDashArray(value: number): string {
    const circumference = 2 * Math.PI * 120; // radius = 120
    const percentage = (value / this.totalValue) * 100;
    const strokeLength = (percentage / 100) * circumference;
    return `${strokeLength} ${circumference - strokeLength}`;
  }

  getStrokeDashOffset(index: number): number {
    const circumference = 2 * Math.PI * 120;
    let offset = 0;
    
    for (let i = 0; i < index; i++) {
      const percentage = (this.financialData[i].value / this.totalValue) * 100;
      const strokeLength = (percentage / 100) * circumference;
      offset += strokeLength;
    }
    
    return -offset;
  }

  // Generate SVG path for pie chart segments
  getSegmentPath(index: number): string {
    const centerX = 150;
    const centerY = 150;
    const radius = 100;
    
    // Calculate angles
    let startAngle = 0;
    for (let i = 0; i < index; i++) {
      startAngle += (this.financialData[i].value / this.totalValue) * 360;
    }
    
    const endAngle = startAngle + (this.financialData[index].value / this.totalValue) * 360;
    
    // Convert to radians
    const startAngleRad = (startAngle - 90) * Math.PI / 180;
    const endAngleRad = (endAngle - 90) * Math.PI / 180;
    
    // Calculate points
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    // Large arc flag
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    // Create path
    const pathData = [
      `M ${centerX} ${centerY}`,           // Move to center
      `L ${x1} ${y1}`,                     // Line to start point
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`, // Arc
      'Z'                                  // Close path
    ].join(' ');
    
    return pathData;
  }

  // Get percentage for display
  getPercentage(value: number): number {
    return Math.round((value / this.totalValue) * 100);
  }

  // Get financial source icon paths
  getFinancialIcon(sourceName: string): string {
    const icons: { [key: string]: string } = {
      'Татварын орлого': 'M8.5 5.5a.5.5 0 0 0-1 0v.518A1.5 1.5 0 0 0 6 7.5c0 .281-.115.52-.268.697C5.558 8.471 5.25 8.679 4.904 8.803a4.053 4.053 0 0 0-.606.187c-.099.04-.1.127-.1.127V14.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V9.117s-.001-.087-.1-.127a4.053 4.053 0 0 0-.606-.187A3.123 3.123 0 0 1 10.268 8.197C10.115 8.02 10 7.781 10 7.5a1.5 1.5 0 0 0-1.5-1.482zM14 2H2a1 1 0 0 0-1 1v6.5A1.5 1.5 0 0 0 2.5 11v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4A1.5 1.5 0 0 0 15 9.5V3a1 1 0 0 0-1-1zM2 3h12v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V3z', // receipt/tax icon
      'Татварын бус орлого': 'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z', // bag/service icon
      'Тогтворжуулалтын сан': 'M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zM7 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5zM9 10.5a1.5 1.5 0 1 1 3 0v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-.5z', // bank/stability icon
      'Үндэсний баялгийн сан': 'M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z' // trophy/wealth icon
    };
    return icons[sourceName] || 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'; // default circle icon
  }
}
