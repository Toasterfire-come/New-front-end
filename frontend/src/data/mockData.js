// Mock stock data for the stock scanning website - Extended dataset for pagination demo
export const stockData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 182.52, change: 2.45, changePercent: 1.36, volume: 45632100, marketCap: '2.85T', sector: 'Technology' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.85, change: -1.23, changePercent: -0.32, volume: 23456700, marketCap: '2.81T', sector: 'Technology' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.69, change: 3.67, changePercent: 2.64, volume: 28934500, marketCap: '1.79T', sector: 'Technology' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 151.94, change: -0.85, changePercent: -0.56, volume: 34567800, marketCap: '1.57T', sector: 'Consumer Discretionary' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: 12.45, changePercent: 5.28, volume: 89234100, marketCap: '789.2B', sector: 'Consumer Discretionary' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 875.28, change: -15.67, changePercent: -1.76, volume: 45123600, marketCap: '2.16T', sector: 'Technology' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 484.20, change: 8.90, changePercent: 1.87, volume: 18765400, marketCap: '1.23T', sector: 'Communication Services' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 174.83, change: 1.56, changePercent: 0.90, volume: 12456700, marketCap: '507.8B', sector: 'Financial Services' },
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: 160.24, change: -0.78, changePercent: -0.48, volume: 8934500, marketCap: '421.6B', sector: 'Healthcare' },
  { symbol: 'V', name: 'Visa Inc.', price: 267.45, change: 3.21, changePercent: 1.22, volume: 6782300, marketCap: '567.9B', sector: 'Financial Services' },
  { symbol: 'UNH', name: 'UnitedHealth Group Inc.', price: 525.67, change: -2.34, changePercent: -0.44, volume: 3245600, marketCap: '487.2B', sector: 'Healthcare' },
  { symbol: 'HD', name: 'The Home Depot Inc.', price: 327.18, change: 4.56, changePercent: 1.41, volume: 4321800, marketCap: '334.1B', sector: 'Consumer Discretionary' },
  { symbol: 'PG', name: 'Procter & Gamble Co.', price: 155.89, change: 0.67, changePercent: 0.43, volume: 7654200, marketCap: '372.4B', sector: 'Consumer Staples' },
  { symbol: 'MA', name: 'Mastercard Inc.', price: 398.76, change: -3.21, changePercent: -0.80, volume: 3567900, marketCap: '383.2B', sector: 'Financial Services' },
  { symbol: 'BAC', name: 'Bank of America Corp.', price: 32.45, change: 0.89, changePercent: 2.82, volume: 45678200, marketCap: '262.1B', sector: 'Financial Services' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', price: 165.43, change: -1.67, changePercent: -1.00, volume: 6543700, marketCap: '293.8B', sector: 'Healthcare' },
  { symbol: 'AVGO', name: 'Broadcom Inc.', price: 892.34, change: 15.67, changePercent: 1.79, volume: 2345600, marketCap: '411.2B', sector: 'Technology' },
  { symbol: 'WMT', name: 'Walmart Inc.', price: 159.78, change: 2.34, changePercent: 1.49, volume: 8765400, marketCap: '435.6B', sector: 'Consumer Staples' },
  { symbol: 'LLY', name: 'Eli Lilly and Co.', price: 598.45, change: -8.90, changePercent: -1.47, volume: 3456700, marketCap: '569.3B', sector: 'Healthcare' },
  { symbol: 'XOM', name: 'Exxon Mobil Corporation', price: 108.76, change: 3.45, changePercent: 3.28, volume: 19876500, marketCap: '448.9B', sector: 'Energy' },
  { symbol: 'CVX', name: 'Chevron Corporation', price: 147.89, change: 2.67, changePercent: 1.84, volume: 12345600, marketCap: '274.5B', sector: 'Energy' },
  { symbol: 'ADBE', name: 'Adobe Inc.', price: 567.23, change: -4.56, changePercent: -0.80, volume: 2987600, marketCap: '259.8B', sector: 'Technology' },
  { symbol: 'CRM', name: 'Salesforce Inc.', price: 234.67, change: 6.78, changePercent: 2.98, volume: 5432100, marketCap: '231.4B', sector: 'Technology' },
  { symbol: 'COST', name: 'Costco Wholesale Corp.', price: 789.12, change: -3.45, changePercent: -0.44, volume: 1876500, marketCap: '349.7B', sector: 'Consumer Staples' },
  { symbol: 'PEP', name: 'PepsiCo Inc.', price: 167.89, change: 1.23, changePercent: 0.74, volume: 5678900, marketCap: '231.8B', sector: 'Consumer Staples' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific Inc.', price: 534.76, change: -7.89, changePercent: -1.45, volume: 1234500, marketCap: '209.3B', sector: 'Healthcare' },
  { symbol: 'ACN', name: 'Accenture plc', price: 367.45, change: 4.32, changePercent: 1.19, volume: 2345600, marketCap: '232.1B', sector: 'Technology' },
  { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', price: 145.67, change: 8.90, changePercent: 6.51, volume: 67890100, marketCap: '235.4B', sector: 'Technology' },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: 498.23, change: -12.45, changePercent: -2.44, volume: 4321700, marketCap: '221.6B', sector: 'Communication Services' },
  { symbol: 'COP', name: 'ConocoPhillips', price: 108.34, change: 2.78, changePercent: 2.63, volume: 8765400, marketCap: '138.2B', sector: 'Energy' }
];

export const marketIndices = [
  { name: 'S&P 500', symbol: 'SPX', value: 4567.12, change: 23.45, changePercent: 0.52 },
  { name: 'Dow Jones', symbol: 'DJI', value: 34821.93, change: -156.78, changePercent: -0.45 },
  { name: 'NASDAQ', symbol: 'IXIC', value: 14234.56, change: 67.89, changePercent: 0.48 },
  { name: 'Russell 2000', symbol: 'RUT', value: 1987.45, change: 12.34, changePercent: 0.63 }
];

export const topGainers = stockData.filter(stock => stock.changePercent > 0).sort((a, b) => b.changePercent - a.changePercent).slice(0, 5);

export const topLosers = stockData.filter(stock => stock.changePercent < 0).sort((a, b) => a.changePercent - b.changePercent).slice(0, 5);

export const sectorPerformance = [
  { sector: 'Technology', change: 1.45, stocks: 156 },
  { sector: 'Healthcare', change: -0.23, stocks: 89 },
  { sector: 'Financial Services', change: 0.67, stocks: 134 },
  { sector: 'Consumer Discretionary', change: 2.12, stocks: 78 },
  { sector: 'Communication Services', change: 0.89, stocks: 45 },
  { sector: 'Energy', change: -1.56, stocks: 67 },
  { sector: 'Consumer Staples', change: 0.34, stocks: 54 }
];

export const watchlistData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 182.52, change: 2.45, changePercent: 1.36, alerts: 2 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: 12.45, changePercent: 5.28, alerts: 1 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.69, change: 3.67, changePercent: 2.64, alerts: 0 },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 484.20, change: 8.90, changePercent: 1.87, alerts: 3 }
];

export const newsData = [
  {
    id: 1,
    title: 'Apple Reports Strong Q4 Earnings, Beats Expectations',
    summary: 'Apple Inc. reported better-than-expected quarterly results driven by strong iPhone sales.',
    time: '2 hours ago',
    source: 'MarketWatch'
  },
  {
    id: 2,
    title: 'Tesla Stock Surges on New Model Announcement',
    summary: 'Tesla shares jumped after the company unveiled its latest electric vehicle model.',
    time: '4 hours ago',
    source: 'Bloomberg'
  },
  {
    id: 3,
    title: 'Fed Signals Potential Rate Cut in Next Meeting',
    summary: 'Federal Reserve hints at possible interest rate reduction to support economic growth.',
    time: '6 hours ago',
    source: 'Reuters'
  },
  {
    id: 4,
    title: 'Tech Sector Rallies on Strong AI Investment Numbers',
    summary: 'Major technology companies see significant gains following robust AI infrastructure spending reports.',
    time: '8 hours ago',
    source: 'CNBC'
  },
  {
    id: 5,
    title: 'Oil Prices Rise Amid Geopolitical Tensions',
    summary: 'Crude oil futures climb higher as international tensions affect supply concerns.',
    time: '10 hours ago',
    source: 'Reuters'
  }
];

// Function to simulate data refresh
export const refreshStockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate small price changes
      const refreshedData = stockData.map(stock => ({
        ...stock,
        price: stock.price + (Math.random() - 0.5) * 2, // Small random change
        change: (Math.random() - 0.5) * 5, // Random change
        changePercent: (Math.random() - 0.5) * 3, // Random percentage change
        volume: stock.volume + Math.floor((Math.random() - 0.5) * 1000000) // Small volume change
      }));
      resolve(refreshedData);
    }, 1000); // 1 second delay to simulate API call
  });
};