const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS with proper configuration
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:4201', 'http://127.0.0.1:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true
}));
app.use(express.json());

// Public expenditure endpoints that indicators component expects
app.get('/api/public/budget/expenditure', (req, res) => {
  const year = req.query.year;
  console.log(`GET /api/public/budget/expenditure?year=${year} - Fetching expenditure data for year ${year}`);
  
  let filteredData = sampleExpenditureData;
  if (year) {
    filteredData = sampleExpenditureData.filter(item => item.year == year);
  }
  
  // Convert to budget format expected by indicators component
  const expenditureFormat = filteredData.map(item => ({
    id: item.id,
    amount: item.value,
    category: item.category,
    description: item.description,
    type: 'expenditure'
  }));
  res.json(expenditureFormat);
});
host:4200', 'http://localhost:4201', 'http://127.0.0.1:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true
}));
app.use(express.json());

// Sample indicators data that matches your saved backend data
const sampleIndicatorsData = [
  {
    id: 1,
    name: 'Tax-revenue',
    value: 32192110000, // 32,192,110,000 MNT
    unit: 'MNT',
    category: 'Tax-revenue',
    description: 'Tax revenue including income tax and social insurance',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 2,
    name: 'Non-taxable income',
    value: 2438380000, // 2,438,380,000 MNT
    unit: 'MNT', 
    category: 'Non-taxable-income',
    description: 'Non-taxable income from various sources',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 3,
    name: 'Stabilization-Fund',
    value: 608890000, // 608,890,000 MNT
    unit: 'MNT',
    category: 'Stabilization-Fund',
    description: 'Economic stabilization fund revenue',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 4,
    name: 'National-Wealth-Fund',
    value: 235680000, // 235,680,000 MNT
    unit: 'MNT',
    category: 'National-Wealth-Fund',
    description: 'National wealth fund revenue',
    year: new Date().getFullYear(),
    status: 'stable'
  }
];

// Sample expenditure data for indicators component
const sampleExpenditureData = [
  {
    id: 1,
    name: 'Education-Expenditure',
    value: 12500000000, // 12.5 billion MNT
    unit: 'MNT',
    category: 'Education',
    description: 'Education sector expenditure',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 2,
    name: 'Healthcare-Expenditure',
    value: 8900000000, // 8.9 billion MNT
    unit: 'MNT',
    category: 'Healthcare',
    description: 'Healthcare sector expenditure',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 3,
    name: 'Infrastructure-Expenditure',
    value: 6750000000, // 6.75 billion MNT
    unit: 'MNT',
    category: 'Infrastructure',
    description: 'Infrastructure development expenditure',
    year: new Date().getFullYear(),
    status: 'stable'
  },
  {
    id: 4,
    name: 'Defense-Expenditure',
    value: 4200000000, // 4.2 billion MNT
    unit: 'MNT',
    category: 'Defense',
    description: 'Defense and security expenditure',
    year: new Date().getFullYear(),
    status: 'stable'
  }
];

// Revenue endpoint that your frontend expects
app.get('/api/budget/revenue', (req, res) => {
  console.log('GET /api/budget/revenue - Fetching all revenue data');
  // For backwards compatibility, convert indicators to revenue format
  const revenueFormat = sampleIndicatorsData.map(item => ({
    ...item,
    amount: item.value,
    ministry: item.name,
    type: 'revenue'
  }));
  res.json(revenueFormat);
});

// Indicators endpoints (your saved data)
app.get('/api/indicators', (req, res) => {
  console.log('GET /api/indicators - Fetching all indicators data');
  res.json(sampleIndicatorsData);
});

// Indicators by year endpoint
app.get('/api/indicators/year/:year', (req, res) => {
  const year = parseInt(req.params.year) || new Date().getFullYear();
  console.log(`GET /api/indicators/year/${year} - Fetching indicators data for year ${year}`);
  
  const filteredData = sampleIndicatorsData.filter(item => item.year === year);
  res.json(filteredData);
});

// Indicators endpoints (for your saved financial data)
app.get('/api/indicators', (req, res) => {
  console.log(`GET /api/indicators - Fetching all indicators data`);
  res.json(sampleIndicatorsData);
});

// Indicators by year endpoint (this is what the frontend calls)
app.get('/api/indicators/year/:year', (req, res) => {
  const year = parseInt(req.params.year) || new Date().getFullYear();
  console.log(`GET /api/indicators/year/${year} - Fetching indicators data for year ${year}`);
  
  const filteredData = sampleIndicatorsData.filter(item => item.year === year);
  res.json(filteredData);
});

// Revenue by year endpoint
app.get('/api/budget/revenue', (req, res) => {
  const year = parseInt(req.query.year) || new Date().getFullYear();
  console.log(`GET /api/budget/revenue?year=${year} - Fetching revenue data for year ${year}`);
  
  const filteredData = sampleIndicatorsData.filter(item => item.year === year);
  // Convert to revenue format for backwards compatibility
  const revenueFormat = filteredData.map(item => ({
    ...item,
    amount: item.value,
    ministry: item.name,
    type: 'revenue'
  }));
  res.json(revenueFormat);
});

// Public revenue endpoint (if needed)
app.get('/api/public/budget/revenue', (req, res) => {
  const year = parseInt(req.query.year) || new Date().getFullYear();
  console.log(`GET /api/public/budget/revenue?year=${year} - Fetching public revenue data for year ${year}`);
  
  const filteredData = sampleIndicatorsData.filter(item => item.year === year);
  // Convert to revenue format
  const revenueFormat = filteredData.map(item => ({
    ...item,
    amount: item.value,
    ministry: item.name,
    type: 'revenue'
  }));
  res.json(revenueFormat);
});

// Public budget overview endpoint (for connection checking)
app.get('/api/public/budget/overview', (req, res) => {
  console.log(`GET /api/public/budget/overview - Backend connection check`);
  res.json({ 
    status: 'ok',
    message: 'Backend server is accessible',
    timestamp: new Date().toISOString(),
    totalIndicators: sampleIndicatorsData.length,
    availableYears: [2025]
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString(),
    service: 'Mongolia Budget Transparency API',
    version: '1.0.0'
  });
});

// Government/Admin endpoints (for admin panel connectivity)
app.get('/api/government/health', (req, res) => {
  console.log(`GET /api/government/health - Admin health check`);
  res.json({ 
    status: 'ok',
    message: 'Government API is accessible',
    timestamp: new Date().toISOString(),
    adminAccess: true,
    availableEndpoints: [
      '/api/government/budget',
      '/api/government/indicators', 
      '/api/government/sync',
      '/api/government/proxy'
    ]
  });
});

// Government budget endpoint (for admin)
app.get('/api/government/budget', (req, res) => {
  console.log(`GET /api/government/budget - Admin budget data access`);
  res.json({
    status: 'success',
    data: sampleIndicatorsData,
    totalRecords: sampleIndicatorsData.length,
    lastUpdate: new Date().toISOString()
  });
});

// Government indicators endpoint (for admin)
app.get('/api/government/indicators', (req, res) => {
  console.log(`GET /api/government/indicators - Admin indicators access`);
  res.json({
    status: 'success',
    data: sampleIndicatorsData,
    totalRecords: sampleIndicatorsData.length,
    categories: ['Tax-revenue', 'Non-taxable-income', 'Stabilization-Fund', 'National-Wealth-Fund']
  });
});

// Government data sync endpoint (for admin)
app.post('/api/government/sync', (req, res) => {
  console.log(`POST /api/government/sync - Admin data sync request`);
  res.json({
    status: 'success',
    message: 'Data sync completed',
    syncedRecords: sampleIndicatorsData.length,
    timestamp: new Date().toISOString()
  });
});

// Government proxy endpoint (for admin)
app.post('/api/government/proxy', (req, res) => {
  console.log(`POST /api/government/proxy - Admin proxy request`);
  res.json({
    status: 'success',
    message: 'Proxy request processed',
    data: sampleIndicatorsData,
    timestamp: new Date().toISOString()
  });
});

// Authentication endpoints (for admin login)
app.post('/api/auth/login', (req, res) => {
  console.log(`POST /api/auth/login - Admin login attempt`);
  const { username, password } = req.body;
  
  // Simple auth check (for development)
  if (username && password) {
    res.json({
      status: 'success',
      message: 'Login successful',
      token: 'mock-jwt-token-12345',
      user: {
        id: 1,
        username: username,
        role: 'admin',
        permissions: ['read', 'write', 'admin']
      },
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Invalid credentials',
      timestamp: new Date().toISOString()
    });
  }
});

// Auth verification endpoint
app.get('/api/auth/verify', (req, res) => {
  console.log(`GET /api/auth/verify - Token verification`);
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    res.json({
      status: 'success',
      message: 'Token is valid',
      user: {
        id: 1,
        username: 'admin',
        role: 'admin',
        permissions: ['read', 'write', 'admin']
      },
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(401).json({
      status: 'error',
      message: 'No token provided',
      timestamp: new Date().toISOString()
    });
  }
});

// Auth logout endpoint
app.post('/api/auth/logout', (req, res) => {
  console.log(`POST /api/auth/logout - Admin logout`);
  res.json({
    status: 'success',
    message: 'Logout successful',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Mongolia Budget Backend API',
    endpoints: {
      // Public endpoints
      '/api/indicators': 'Get all indicators data (your saved financial sources data)',
      '/api/indicators/year/YYYY': 'Get indicators data by year',
      '/api/budget/revenue': 'Get all revenue data',
      '/api/budget/revenue?year=YYYY': 'Get revenue data by year',
      '/api/public/budget/revenue': 'Get public revenue data',
      '/api/public/budget/overview': 'Backend connection check',
      '/api/health': 'Health check',
      // Admin/Government endpoints  
      '/api/government/health': 'Admin health check',
      '/api/government/budget': 'Admin budget data access',
      '/api/government/indicators': 'Admin indicators access',
      '/api/government/sync': 'Admin data sync (POST)',
      '/api/government/proxy': 'Admin proxy requests (POST)',
      // Authentication endpoints
      '/api/auth/login': 'Admin login (POST)',
      '/api/auth/verify': 'Token verification (GET)',
      '/api/auth/logout': 'Admin logout (POST)'
    },
    status: 'All endpoints available for admin and public access',
    adminLoginInfo: 'Use any username/password for development login'
  });
});

// Catch-all for API routes - prevent HTML 404 responses
app.use('/api/*', (req, res) => {
  console.log(`API route not found: ${req.method} ${req.path}`);
  res.status(404).json({
    status: 'error',
    message: `API endpoint not found: ${req.method} ${req.path}`,
    availableEndpoints: [
      'GET /api/health',
      'GET /api/indicators',
      'GET /api/indicators/year/:year',
      'GET /api/budget/revenue',
      'GET /api/public/budget/overview',
      'GET /api/public/budget/revenue',
      'GET /api/government/health',
      'GET /api/government/budget',
      'GET /api/government/indicators',
      'POST /api/government/sync',
      'POST /api/government/proxy',
      'POST /api/auth/login',
      'GET /api/auth/verify',
      'POST /api/auth/logout'
    ],
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mongolia Budget Backend Server is running on http://localhost:${PORT}`);
  console.log(`📊 Indicators endpoint: http://localhost:${PORT}/api/indicators`);
  console.log(`📈 Indicators by year: http://localhost:${PORT}/api/indicators/year/2025`);
  console.log(`💵 Revenue data endpoint: http://localhost:${PORT}/api/budget/revenue`);
  console.log(`📈 Public revenue endpoint: http://localhost:${PORT}/api/public/budget/revenue`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
  console.log(`\n📋 Sample indicators data (your saved data):`);
  sampleIndicatorsData.forEach(item => {
    console.log(`   - ${item.name}: ${(item.value / 1000000).toFixed(1)} million MNT (${item.category})`);
  });
});

module.exports = app;
