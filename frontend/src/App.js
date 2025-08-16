import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Support Pages (testing with minimal imports first)
import KeyboardShortcuts from "./pages/support/KeyboardShortcuts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Test route for KeyboardShortcuts */}
          <Route path="/support/keyboard-shortcuts" element={
            <MainLayout showSidebar={false}>
              <KeyboardShortcuts />
            </MainLayout>
          } />
          
          {/* Default route redirects to keyboard shortcuts for testing */}
          <Route path="/" element={
            <MainLayout showSidebar={false}>
              <KeyboardShortcuts />
            </MainLayout>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;