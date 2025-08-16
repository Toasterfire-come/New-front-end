import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Marketing & Public Pages
import Home from "./pages/marketing/Home";
import About from "./pages/marketing/About";
import HowItWorks from "./pages/marketing/HowItWorks";
import GettingStarted from "./pages/marketing/GettingStarted";
import Roadmap from "./pages/marketing/Roadmap";
import ReleaseNotes from "./pages/marketing/ReleaseNotes";

// Core App Pages
import Dashboard from "./pages/app/Dashboard";
import MarketOverview from "./pages/app/MarketOverview";
import StockScanner from "./pages/app/StockScanner";
import Watchlist from "./pages/app/Watchlist";
import EnhancedWatchlist from "./pages/app/EnhancedWatchlist";
import Portfolio from "./pages/app/Portfolio";
import StockLookup from "./pages/app/StockLookup";
import News from "./pages/app/News";
import PersonalizedNews from "./pages/app/PersonalizedNews";

// Account Pages
import Account from "./pages/account/Account";
import UserSettings from "./pages/account/UserSettings";
import BillingHistory from "./pages/account/BillingHistory";
import PremiumPlans from "./pages/account/PremiumPlans";
import ComparePlans from "./pages/account/ComparePlans";

// Payment Pages
import PayPalCheckout from "./pages/payment/PayPalCheckout";
import PaymentSuccess from "./pages/payment/PaymentSuccess";
import PaymentCancelled from "./pages/payment/PaymentCancelled";

// Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Support Pages
import HelpCenter from "./pages/support/HelpCenter";
import FAQ from "./pages/support/FAQ";
import Glossary from "./pages/support/Glossary";
import KeyboardShortcuts from "./pages/support/KeyboardShortcuts";

// Legal Pages
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Security from "./pages/legal/Security";
import Accessibility from "./pages/legal/Accessibility";
import CookiePolicy from "./pages/legal/CookiePolicy";

// System Pages
import Status from "./pages/system/Status";
import MarketHours from "./pages/system/MarketHours";
import Sitemap from "./pages/system/Sitemap";

// Contact
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
            <MainLayout>
              <PremiumPlans />
            </MainLayout>
          } />
          <Route path="/compare-plans" element={
            <MainLayout>
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

          {/* Support Pages (no sidebar for public access) */}
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
          <Route path="/keyboard-shortcuts" element={
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
          <Route path="/accessibility" element={
            <MainLayout showSidebar={false}>
              <Accessibility />
            </MainLayout>
          } />
          <Route path="/cookie-policy" element={
            <MainLayout showSidebar={false}>
              <CookiePolicy />
            </MainLayout>
          } />

          {/* System Pages (no sidebar) */}
          <Route path="/status" element={
            <MainLayout showSidebar={false}>
              <Status />
            </MainLayout>
          } />
          <Route path="/market-hours" element={
            <MainLayout showSidebar={false}>
              <MarketHours />
            </MainLayout>
          } />
          <Route path="/sitemap" element={
            <MainLayout showSidebar={false}>
              <Sitemap />
            </MainLayout>
          } />

          {/* Contact (no sidebar) */}
          <Route path="/contact" element={
            <MainLayout showSidebar={false}>
              <Contact />
            </MainLayout>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;