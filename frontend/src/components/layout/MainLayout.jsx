import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import BackToTop from '../common/BackToTop';

const MainLayout = ({ children, showSidebar = true }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {showSidebar && (
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          setIsCollapsed={setIsSidebarCollapsed} 
        />
      )}
      
      <div className="flex-1 flex flex-col">
        <Header showFullNav={!showSidebar} />
        
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default MainLayout;