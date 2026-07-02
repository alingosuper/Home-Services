import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { renderHome } from './components/home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ہیڈر کو کمپوننٹ کے طور پر رینڈر کریں */}
      <div id="header-container" dangerouslySetInnerHTML={{ __html: Header() }} />
      
      <main className="flex-grow pt-16 pb-20 bg-gray-50 max-w-md mx-auto w-full">
        <div id="app-root" dangerouslySetInnerHTML={{ __html: renderHome() }} />
      </main>

      <div id="footer-container" dangerouslySetInnerHTML={{ __html: Footer('home') }} />
      <div id="sidebar-container" dangerouslySetInnerHTML={{ __html: Sidebar() }} />
    </div>
  );
};

export default App;
