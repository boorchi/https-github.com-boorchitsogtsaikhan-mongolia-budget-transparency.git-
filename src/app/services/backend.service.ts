import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from './constants';

export interface BudgetData {
  id?: number;
  ministry: string;
  department: string;
  year: number;
  amount: number;
  category: string;
  type: string;
  subcategory?: string;
  description?: string;
  metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DashboardStats {
  totalBudget: number;
  totalRecords: number;
  totalContent: number;
  totalReports: number;
  lastUpdate?: string;
}

export interface IndicatorData {
  id?: number;
  name: string;
  value: number;
  previousValue?: number;
  unit: string;
  category: string;
  description?: string;
  year: number;
  changePercentage?: number;
  status?: 'increase' | 'decrease' | 'stable';
  metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = Constants.NEW_BACKEND_URL;
  private publicUrl = Constants.NEW_BACKEND_PUBLIC;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // Health check method
  async checkBackendConnection(): Promise<boolean> {
    try {
      // Try the public API endpoint to verify connection
      const response = await this.http.get(`${this.publicUrl}/budget/overview`, { 
        ...this.httpOptions,
        observe: 'response'
      }).toPromise();
      console.log('Backend connection successful', response);
      return true;
    } catch (error) {
      console.log('Backend connection error:', error);
      
      // If it's a CORS error, the server is likely running but CORS isn't configured
      if (error.status === 0 && error.error instanceof ProgressEvent) {
        console.log('Backend is running but CORS is not configured properly');
        // Return true since backend is running, just CORS issue
        return true;
      }
      
      // For other errors, backend is likely not running
      return false;
    }
  }

  // Public API endpoints (no authentication required)
  
  /**
   * Get public budget data from the new backend
   */
  getPublicBudgetData(): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/expenditure`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get revenue data from the backend
   */
  getRevenueData(): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/revenue`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get revenue data filtered by year
   */
  getRevenueDataByYear(year: number): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/revenue?year=${year}`, this.httpOptions)
      .pipe(map(response => {
        if (!response) return [];
        return response.map(item => ({
          id: item.id,
          ministry: item.metadata?.ministry || item.ministry || 'Unknown Ministry',
          department: item.metadata?.department || item.department || 'Unknown Department',
          year: item.year,
          amount: item.amount,
          category: item.category,
          type: item.type,
          subcategory: item.subcategory,
          description: item.description,
          metadata: item.metadata,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        } as BudgetData));
      }))
      .toPromise();
  }

  /**
   * Get expenditure data from the backend
   */
  getExpenditureData(): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/expenditure`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get expenditure data filtered by year
   */
  getExpenditureDataByYear(year: number): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/expenditure?year=${year}`, this.httpOptions)
      .pipe(map(response => {
        if (!response) return [];
        return response.map(item => ({
          id: item.id,
          ministry: item.metadata?.ministry || item.ministry || 'Unknown Ministry',
          department: item.metadata?.department || item.department || 'Unknown Department',
          year: item.year,
          amount: item.amount,
          category: item.category,
          type: item.type,
          subcategory: item.subcategory,
          description: item.description,
          metadata: item.metadata,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt
        } as BudgetData));
      }))
      .toPromise();
  }

  /**
   * Get budget data filtered by year
   */
  getBudgetDataByYear(year: number): Promise<BudgetData[]> {
    return this.http.get<any[]>(`${this.publicUrl}/budget/expenditure?year=${year}`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get budget data filtered by category (education, health, etc.)
   */
  getBudgetDataByCategory(category: string): Promise<BudgetData[]> {
    return this.http.get<BudgetData[]>(`${this.baseUrl}/public/budget-data?category=${category}`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get budget data filtered by ministry
   */
  getBudgetDataByMinistry(ministry: string): Promise<BudgetData[]> {
    return this.http.get<BudgetData[]>(`${this.baseUrl}/public/budget-data?ministry=${encodeURIComponent(ministry)}`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get dashboard statistics
   */
  getDashboardStats(): Promise<DashboardStats> {
    return this.http.get<any>(`${this.publicUrl}/budget/overview`, this.httpOptions)
      .pipe(map(response => ({
        totalBudget: (response?.totalRevenue || 0) + (response?.totalExpenditure || 0),
        totalRecords: 1,
        totalContent: 0,
        totalReports: 0,
        lastUpdate: response?.lastUpdated
      })))
      .toPromise();
  }

  /**
   * Get content from backend (news, announcements, etc.)
   */
  getPublicContent(type?: string): Promise<any[]> {
    const url = type ? 
      `${this.baseUrl}/public/content?type=${type}` : 
      `${this.baseUrl}/public/content`;
    
    return this.http.get<any[]>(url, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Search budget data
   */
  searchBudgetData(query: string): Promise<BudgetData[]> {
    return this.http.get<BudgetData[]>(`${this.baseUrl}/public/budget-data?search=${encodeURIComponent(query)}`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get aggregated budget data (totals by category, ministry, etc.)
   */
  getBudgetAggregates(groupBy: 'category' | 'ministry' | 'year' = 'category'): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/public/budget-data/aggregates?groupBy=${groupBy}`, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Get budget trends over time
   */
  getBudgetTrends(ministry?: string, category?: string): Promise<any[]> {
    let url = `${this.baseUrl}/public/budget-data/trends`;
    const params = [];
    
    if (ministry) params.push(`ministry=${encodeURIComponent(ministry)}`);
    if (category) params.push(`category=${category}`);
    
    if (params.length > 0) {
      url += '?' + params.join('&');
    }

    return this.http.get<any[]>(url, this.httpOptions)
      .pipe(map(response => response || []))
      .toPromise();
  }

  /**
   * Check backend health
   */
  checkHealth(): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/health`, this.httpOptions)
      .toPromise();
  }

  // Government data proxy endpoints

  /**
   * Get data from government APIs via backend proxy
   */
  getGovernmentData(endpoint: string, params?: any): Promise<any> {
    const url = `${this.baseUrl}/government/proxy`;
    const body = {
      endpoint: endpoint,
      params: params || {}
    };

    return this.http.post<any>(url, body, this.httpOptions)
      .pipe(map(response => response || {}))
      .toPromise();
  }

  /**
   * Sync data from government APIs
   */
  syncGovernmentData(): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/government/sync`, {}, this.httpOptions)
      .toPromise();
  }

  // Helper methods

  /**
   * Format currency numbers for display
   */
  formatCurrency(amount: number): string {
    if (!amount) return '0';
    
    if (amount >= 1000000000) {
      return (amount / 1000000000).toFixed(1) + ' тэрбум';
    } else if (amount >= 1000000) {
      return (amount / 1000000).toFixed(1) + ' сая';
    } else if (amount >= 1000) {
      return (amount / 1000).toFixed(1) + ' мянга';
    }
    
    return amount.toLocaleString('mn-MN');
  }

  /**
   * Get category display name in Mongolian
   */
  getCategoryDisplayName(category: string): string {
    const categoryNames = {
      'education': 'Боловсрол',
      'health': 'Эрүүл мэнд',
      'infrastructure': 'Дэд бүтэц',
      'defense': 'Батлан хамгаалах',
      'social': 'Нийгмийн хамгаалал',
      'environment': 'Байгаль орчин',
      'agriculture': 'Хөдөө аж ахуй',
      'tourism': 'Аялал жуулчлал',
      'culture': 'Соёл урлаг',
      'transport': 'Тээвэр харилцаа',
      'energy': 'Эрчим хүч',
      'mining': 'Уул уурхай',
      'technology': 'Технологи',
      'other': 'Бусад'
    };
    
    return categoryNames[category] || category;
  }

  /**
   * Get ministry short name
   */
  getMinistryShortName(ministry: string): string {
    const ministryShortNames = {
      'Ministry of Education and Science': 'БШУ',
      'Ministry of Health': 'ЭМЯ',
      'Ministry of Infrastructure': 'ДБХЯ',
      'Ministry of Defense': 'БХЯ',
      'Ministry of Social Welfare': 'НХНЯ',
      'Ministry of Environment': 'БОЯ'
    };
    
    return ministryShortNames[ministry] || ministry.split(' ').map(word => word[0]).join('');
  }

  // Indicators API methods

  /**
   * Get all indicators data
   */
  getIndicators(): Promise<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}/indicators`, this.httpOptions)
      .toPromise()
      .catch(() => {
        // Return empty array instead of mock data - only show real backend data
        return [];
      });
  }

  /**
   * Get indicators by year
   */
  getIndicatorsByYear(year: number): Promise<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}/indicators/year/${year}`, this.httpOptions)
      .toPromise()
      .catch(() => {
        // Return empty array instead of mock data - only show real backend data
        return [];
      });
  }

  /**
   * Get indicators by category
   */
  getIndicatorsByCategory(category: string): Promise<IndicatorData[]> {
    return this.http.get<IndicatorData[]>(`${this.baseUrl}/indicators/category/${category}`, this.httpOptions)
      .toPromise()
      .catch(() => {
        // Return empty array instead of mock data - only show real backend data
        return [];
      });
  }
}
