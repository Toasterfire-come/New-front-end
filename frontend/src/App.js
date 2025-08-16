import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";

// Marketing & Public Pages  
import Home from "./pages/marketing/Home.jsx";
import About from "./pages/marketing/About.jsx";
import HowItWorks from "./pages/marketing/HowItWorks.jsx";
import GettingStarted from "./pages/marketing/GettingStarted.jsx";
import Roadmap from "./pages/marketing/Roadmap.jsx";
import ReleaseNotes from "./pages/marketing/ReleaseNotes.jsx";

// Core App Pages
import Dashboard from "./pages/app/Dashboard.jsx";
import MarketOverview from "./pages/app/MarketOverview.jsx";
import StockScanner from "./pages/app/StockScanner.jsx";
import Watchlist from "./pages/app/Watchlist.jsx";
import EnhancedWatchlist from "./pages/app/EnhancedWatchlist.jsx";
import Portfolio from "./pages/app/Portfolio.jsx";
import StockLookup from "./pages/app/StockLookup.jsx";
import News from "./pages/app/News.jsx";
import PersonalizedNews from "./pages/app/PersonalizedNews.jsx";

// Account Pages
import Account from "./pages/account/Account.jsx";
import UserSettings from "./pages/account/UserSettings.jsx";
import BillingHistory from "./pages/account/BillingHistory.jsx";
import PremiumPlans from "./pages/account/PremiumPlans.jsx";
import ComparePlans from "./pages/account/ComparePlans.jsx";

// Payment Pages
import PayPalCheckout from "./pages/payment/PayPalCheckout.jsx";
import PaymentSuccess from "./pages/payment/PaymentSuccess.jsx";
import PaymentCancelled from "./pages/payment/PaymentCancelled.jsx";

// Auth Pages
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";

// Support Pages
import HelpCenter from "./pages/support/HelpCenter.jsx";
import FAQ from "./pages/support/FAQ.jsx";
import Glossary from "./pages/support/Glossary.jsx";
import KeyboardShortcuts from "./pages/support/KeyboardShortcuts.jsx";

// Legal Pages
import Privacy from "./pages/legal/Privacy.jsx";
import Terms from "./pages/legal/Terms.jsx";
import Security from "./pages/legal/Security.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Marketing & Public Pages (no sidebar) */}
          <Route path="/" element={
            <MainLayout showSidebar={false}>
              <Home />
            </MainLayout>
          } />
          <Route path="/about" element={
            <MainLayout showSidebar={false}>
              <About />
            </MainLayout>
          } />
          <Route path="/how-it-works" element={
            <MainLayout showSidebar={false}>
              <HowItWorks />
            </MainLayout>
          } />
          <Route path="/getting-started" element={
            <MainLayout showSidebar={false}>
              <GettingStarted />
            </MainLayout>
          } />
          <Route path="/roadmap" element={
            <MainLayout showSidebar={false}>
              <Roadmap />
            </MainLayout>
          } />
          <Route path="/release-notes" element={
            <MainLayout showSidebar={false}>
              <ReleaseNotes />
            </MainLayout>
          } />

          {/* Auth Pages (no sidebar) */}
          <Route path="/login" element={
            <MainLayout showSidebar={false}>
              <Login />
            </MainLayout>
          } />
          <Route path="/signup" element={
            <MainLayout showSidebar={false}>
              <Signup />
            </MainLayout>
          } />

          {/* Core App Pages (with sidebar) */}
          <Route path="/dashboard" element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          <Route path="/market-overview" element={
            <MainLayout>
              <MarketOverview />
            </MainLayout>
          } />
          <Route path="/scanner" element={
            <MainLayout>
              <StockScanner />
            </MainLayout>
          } />
          <Route path="/watchlist" element={
            <MainLayout>
              <Watchlist />
            </MainLayout>
          } />
          <Route path="/enhanced-watchlist" element={
            <MainLayout>
              <EnhancedWatchlist />
            </MainLayout>
          } />
          <Route path="/portfolio" element={
            <MainLayout>
              <Portfolio />
            </MainLayout>
          } />
          <Route path="/stock-lookup" element={
            <MainLayout>
              <StockLookup />
            </MainLayout>
          } />
          <Route path="/news" element={
            <MainLayout>
              <News />
            </MainLayout>
          } />
          <Route path="/personalized-news" element={
            <MainLayout>
              <PersonalizedNews />
            </MainLayout>
          } />

          {/* Account Pages (with sidebar) */}
          <Route path="/account" element={
            <MainLayout>
              <Account />
            </MainLayout>
          } />
          <Route path="/user-settings" element={
            <MainLayout>
              <UserSettings />
            </MainLayout>
          } />
          <Route path="/billing-history" element={
            <MainLayout>
              <BillingHistory />
            </MainLayout>
          } />
          <Route path="/premium-plans" element={
            <MainLayout showSidebar={false}>
              <PremiumPlans />
            </MainLayout>
          } />
          <Route path="/compare-plans" element={
            <MainLayout showSidebar={false}>
              <ComparePlans />
            </MainLayout>
          } />

          {/* Payment Pages (no sidebar) */}
          <Route path="/paypal-checkout" element={
            <MainLayout showSidebar={false}>
              <PayPalCheckout />
            </MainLayout>
          } />
          <Route path="/payment-success" element={
            <MainLayout showSidebar={false}>
              <PaymentSuccess />
            </MainLayout>
          } />
          <Route path="/payment-cancelled" element={
            <MainLayout showSidebar={false}>
              <PaymentCancelled />
            </MainLayout>
          } />

          {/* Support Pages (no sidebar) */}
          <Route path="/help-center" element={
            <MainLayout showSidebar={false}>
              <HelpCenter />
            </MainLayout>
          } />
          <Route path="/faq" element={
            <MainLayout showSidebar={false}>
              <FAQ />
            </MainLayout>
          } />
          <Route path="/glossary" element={
            <MainLayout showSidebar={false}>
              <Glossary />
            </MainLayout>
          } />
          <Route path="/support/keyboard-shortcuts" element={
            <MainLayout showSidebar={false}>
              <KeyboardShortcuts />
            </MainLayout>
          } />

          {/* Legal Pages (no sidebar) */}
          <Route path="/privacy" element={
            <MainLayout showSidebar={false}>
              <Privacy />
            </MainLayout>
          } />
          <Route path="/terms" element={
            <MainLayout showSidebar={false}>
              <Terms />
            </MainLayout>
          } />
          <Route path="/security" element={
            <MainLayout showSidebar={false}>
              <Security />
            </MainLayout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;