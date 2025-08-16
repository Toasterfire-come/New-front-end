// API utility functions for WordPress/Django backend integration
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

// WordPress admin-ajax helper
export const adminAjaxRequest = async (action, data = {}, nonce = '') => {
  const formData = new FormData();
  formData.append('action', action);
  
  // Add nonce for security (if available)
  if (nonce) {
    formData.append('nonce', nonce);
  }
  
  // Add data fields
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  try {
    const response = await fetch(`${BACKEND_URL}/wp-admin/admin-ajax.php`, {
      method: 'POST',
      body: formData,
      credentials: 'include' // Include cookies for WordPress sessions
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Admin-ajax request failed for action: ${action}`, error);
    throw error;
  }
};

// WordPress REST API helper
export const wpRestRequest = async (endpoint, options = {}) => {
  const url = `${BACKEND_URL}/wp-json/stock-scanner/v1/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`WP REST request failed for endpoint: ${endpoint}`, error);
    throw error;
  }
};

// Direct Django API helper
export const djangoApiRequest = async (endpoint, options = {}) => {
  const url = `${BACKEND_URL}/api/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Django API request failed for endpoint: ${endpoint}`, error);
    throw error;
  }
};

// Stock-related API functions (using your existing endpoints)
export const stockApi = {
  // Get stock quote (admin-ajax method)
  getQuote: async (symbol) => {
    return adminAjaxRequest('stock_scanner_get_quote', { symbol });
  },
  
  // Get stock data (WordPress REST)
  getStockData: async (symbol) => {
    return wpRestRequest(`stock-data/${symbol}`);
  },
  
  // Get historical data (WordPress REST)  
  getHistoricalData: async (symbol) => {
    return wpRestRequest(`historical-data/${symbol}`);
  },
  
  // Get realtime data (WordPress REST)
  getRealtimeData: async (symbol) => {
    return wpRestRequest(`realtime-data/${symbol}`);
  },
  
  // Direct Django API for stocks
  getStocks: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const endpoint = `stocks/${queryString ? `?${queryString}` : ''}`;
    return djangoApiRequest(endpoint);
  }
};

// Market data API functions
export const marketApi = {
  // Get major indices (admin-ajax)
  getMajorIndices: async () => {
    return adminAjaxRequest('get_major_indices');
  },
  
  // Get market movers (admin-ajax)
  getMarketMovers: async () => {
    return adminAjaxRequest('get_market_movers');
  },
  
  // Get market data (WordPress REST)
  getMarketData: async () => {
    return wpRestRequest('market-data');
  },
  
  // Django market stats
  getMarketStats: async () => {
    return djangoApiRequest('market-stats/');
  }
};

// Watchlist API functions
export const watchlistApi = {
  // Add to watchlist (admin-ajax)
  addToWatchlist: async (symbol) => {
    return adminAjaxRequest('add_to_watchlist', { symbol });
  },
  
  // Remove from watchlist (admin-ajax)
  removeFromWatchlist: async (symbol) => {
    return adminAjaxRequest('remove_from_watchlist', { symbol });
  },
  
  // Get watchlist (WordPress REST)
  getWatchlist: async () => {
    return wpRestRequest('watchlist');
  },
  
  // Get formatted watchlist data (admin-ajax)
  getFormattedWatchlistData: async () => {
    return adminAjaxRequest('get_formatted_watchlist_data');
  },
  
  // Django watchlist API
  getWatchlistList: async () => {
    return djangoApiRequest('watchlist/list/');
  }
};

// Portfolio API functions
export const portfolioApi = {
  // Get portfolio (WordPress REST)
  getPortfolio: async () => {
    return wpRestRequest('portfolio');
  },
  
  // Get formatted portfolio data (admin-ajax)
  getFormattedPortfolioData: async () => {
    return adminAjaxRequest('get_formatted_portfolio_data');
  },
  
  // Django portfolio API
  getPortfolioList: async () => {
    return djangoApiRequest('portfolio/list/');
  }
};

// News API functions
export const newsApi = {
  // Get news (WordPress REST)
  getNews: async (limit = 5) => {
    return wpRestRequest(`news?limit=${limit}`);
  },
  
  // Get stock news (admin-ajax)
  getStockNews: async (symbol = '') => {
    return adminAjaxRequest('get_stock_news', { symbol });
  },
  
  // Django news API
  getNewsFeed: async () => {
    return djangoApiRequest('news/feed/');
  }
};

// PayPal integration functions
export const paypalApi = {
  // Create PayPal order (admin-ajax)
  createOrder: async (planData) => {
    return adminAjaxRequest('create_paypal_order', planData);
  },
  
  // Capture PayPal order (admin-ajax)
  captureOrder: async (orderData) => {
    return adminAjaxRequest('capture_paypal_order', orderData);
  },
  
  // Create PayPal subscription (admin-ajax)
  createSubscription: async (subscriptionData) => {
    return adminAjaxRequest('create_paypal_subscription', subscriptionData);
  }
};

// Contact and support functions
export const supportApi = {
  // Submit contact form (admin-ajax)
  submitContactForm: async (formData) => {
    return adminAjaxRequest('submit_contact_form', formData);
  },
  
  // Subscribe to newsletter (admin-ajax)
  subscribeNewsletter: async (email) => {
    return adminAjaxRequest('subscribe_newsletter', { email });
  },
  
  // Submit cancellation feedback (admin-ajax)
  submitCancellationFeedback: async (feedbackData) => {
    return adminAjaxRequest('submit_cancellation_feedback', feedbackData);
  }
};

// Usage stats and analytics
export const analyticsApi = {
  // Get usage stats (admin-ajax)
  getUsageStats: async () => {
    return adminAjaxRequest('get_usage_stats');
  }
};

// Health and status checks
export const healthApi = {
  // Django health check
  getHealth: async () => {
    return djangoApiRequest('health/');
  },
  
  // Endpoint status
  getEndpointStatus: async () => {
    return fetch(`${BACKEND_URL}/endpoint-status/?format=json`)
      .then(response => response.json());
  }
};