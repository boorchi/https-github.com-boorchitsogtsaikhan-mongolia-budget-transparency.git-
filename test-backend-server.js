const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

console.log('Starting Mongolia Budget Backend Server...');

// Enable CORS with proper configuration for admin and regular access
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:4201', 'http://127.0.0.1:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true
}));

app.use(express.json());

// REAL DATABASE VALUES - INDICATORS DATA (from your admin database)
const sampleIndicatorsData = [
  {
    id: 14,
    name: 'Tax-revenue',
    value: 32192110000, // Record 14 from database
    unit: 'MNT',
    category: 'Tax-revenue',
    description: 'Tax revenue from database Record 14',
    year: 2025,
    status: 'stable'
  },
  {
    id: 13,
    name: 'Non-taxable income',
    value: 2438380000, // Record 13 from database
    unit: 'MNT', 
    category: 'Non-taxable-income',
    description: 'Non-taxable income from database Record 13',
    year: 2025,
    status: 'stable'
  },
  {
    id: 15,
    name: 'Stabilization-Fund',
    value: 608890000, // Record 15 from database
    unit: 'MNT',
    category: 'Stabilization-Fund',
    description: 'Stabilization fund from database Record 15',
    year: 2025,
    status: 'stable'
  },
  {
    id: 16,
    name: 'National-Wealth-Fund',
    value: 235680000, // Record 16 from database
    unit: 'MNT',
    category: 'National-Wealth-Fund',
    description: 'National wealth fund from database Record 16',
    year: 2025,
    status: 'stable'
  }
];

// REAL DATABASE VALUES - BUDGET DATA (from your admin database Records 10 & 11)
const consolidatedRevenue = {
  id: 10,
  amount: 6149704663, // Record 10 from database - REVENUE
  category: 'Total Revenue',
  description: 'Revenue data from database Record 10',
  type: 'revenue',
  year: 2025
};

// Single consolidated expenditure value for indicators component (from database Record 11)
const consolidatedExpenditure = {
  id: 11,
  amount: 6502667867, // Record 11 from database - EXPENDITURE  
  category: 'Total Expenditure', 
  description: 'Expenditure data from database Record 11',
  type: 'expenditure',
  year: 2025
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('GET /api/health - Health check request');
  res.json({
    status: 'ok',
    message: 'Backend server is running',
    timestamp: new Date().toISOString(),
    service: 'Mongolia Budget Transparency API',
    version: '1.0.0'
  });
});

// Indicators endpoints for financial-sources component
app.get('/api/indicators', (req, res) => {
  console.log('GET /api/indicators - Fetching all indicators data');
  res.json(sampleIndicatorsData);
});

app.get('/api/indicators/year/:year', (req, res) => {
  const year = parseInt(req.params.year);
  console.log(`GET /api/indicators/year/${year} - Fetching indicators data for year ${year}`);
  const filteredData = sampleIndicatorsData.filter(item => item.year === year);
  res.json(filteredData);
});

// Revenue endpoints for indicators component - returns single consolidated value
app.get('/api/public/budget/revenue', (req, res) => {
  const year = req.query.year;
  console.log(`GET /api/public/budget/revenue?year=${year} - Single revenue value for indicators`);
  
  // Return single consolidated revenue value
  if (!year || year == new Date().getFullYear()) {
    res.json([consolidatedRevenue]); // Return as array with one item for compatibility
  } else {
    res.json([]); // No data for other years
  }
});

// Expenditure endpoints for indicators component - returns single consolidated value
app.get('/api/public/budget/expenditure', (req, res) => {
  const year = req.query.year;
  console.log(`GET /api/public/budget/expenditure?year=${year} - Single expenditure value for indicators`);
  
  // Return single consolidated expenditure value
  if (!year || year == new Date().getFullYear()) {
    res.json([consolidatedExpenditure]); // Return as array with one item for compatibility
  } else {
    res.json([]); // No data for other years
  }
});

// Public budget overview endpoint for backend connection checking
app.get('/api/public/budget/overview', (req, res) => {
  console.log('GET /api/public/budget/overview - Backend connection check');
  res.json({ 
    status: 'ok',
    message: 'Backend server is accessible',
    timestamp: new Date().toISOString(),
    totalIndicators: sampleIndicatorsData.length,
    totalExpenditure: 1, // Single consolidated expenditure value
    availableYears: [2025]
  });
});

// Authentication endpoints for admin
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`POST /api/auth/login - Login attempt for user: ${username}`);
  
  // Mock authentication - in real app, validate against database
  if (username === 'admin' && password === 'test123') {
    const token = 'mock-jwt-token-' + Date.now();
    console.log('✅ Login successful for admin user');
    res.json({
      success: true,
      token: token,
      user: {
        id: 1,
        username: 'admin',
        role: 'administrator'
      },
      message: 'Authentication successful'
    });
  } else {
    console.log('❌ Login failed - invalid credentials');
    res.status(401).json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});

app.get('/api/auth/verify', (req, res) => {
  const token = req.headers.authorization;
  console.log('GET /api/auth/verify - Token verification request');
  
  // Mock token validation
  if (token && token.startsWith('Bearer mock-jwt-token-')) {
    console.log('✅ Token verification successful');
    res.json({
      valid: true,
      user: {
        id: 1,
        username: 'admin',
        role: 'administrator'
      }
    });
  } else {
    console.log('❌ Token verification failed');
    res.status(401).json({
      valid: false,
      message: 'Invalid or expired token'
    });
  }
});

app.post('/api/auth/logout', (req, res) => {
  console.log('POST /api/auth/logout - Logout request');
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
});

// Government endpoints
app.get('/api/government/health', (req, res) => {
  console.log('GET /api/government/health - Government API health check');
  res.json({
    status: 'ok',
    message: 'Government API endpoints are available',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  console.log('GET / - Root endpoint accessed');
  res.json({
    service: 'Mongolia Budget Transparency API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      '/api/health': 'Server health check',
      '/api/indicators': 'Get indicators (for financial-sources)',
      '/api/indicators/year/:year': 'Get indicators by year',
      '/api/public/budget/revenue': 'Get revenue data (for indicators page)',
      '/api/public/budget/expenditure': 'Get expenditure data (for indicators page)',
      '/api/public/budget/overview': 'Backend connection check',
      '/api/auth/login': 'Admin authentication',
      '/api/auth/verify': 'Token verification',
      '/api/auth/logout': 'Admin logout'
    }
  });
});

// Catch-all for API routes - return proper JSON error
app.use('/api/*', (req, res) => {
  console.log(`⚠️  API 404: ${req.method} ${req.path} not found`);
  res.status(404).json({
    statusCode: 404,
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    message: `Cannot ${req.method} ${req.path}`
  });
});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error('❌ Server failed to start:', err);
    process.exit(1);
  }
  console.log(`🚀 Mongolia Budget Backend Server is running on http://localhost:${PORT}`);
  console.log(`📊 Indicators for financial-sources: http://localhost:${PORT}/api/indicators/year/2025`);
  console.log(`💰 Revenue for indicators page: http://localhost:${PORT}/api/public/budget/revenue`);
  console.log(`📈 Expenditure for indicators page: http://localhost:${PORT}/api/public/budget/expenditure`);
  console.log(`🔐 Admin login: POST http://localhost:${PORT}/api/auth/login`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
  
  console.log('\n📋 Financial sources data (for circle diagram):');
  sampleIndicatorsData.forEach(item => {
    console.log(`   - ${item.name}: ${(item.value / 1000000000).toFixed(2)} billion MNT`);
  });
  
  console.log('\n📊 Budget indicators data (for indicators page):');
  console.log(`   📈 Revenue: ${(consolidatedRevenue.amount / 1000000000).toFixed(2)} billion MNT (consolidated)`);
  console.log(`   📉 Expenditure: ${(consolidatedExpenditure.amount / 1000000000).toFixed(2)} billion MNT (consolidated)`);
});
