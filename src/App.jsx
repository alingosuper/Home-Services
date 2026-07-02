import React from 'react';
import { renderHeader } from './components/header';
import { renderFooter } from './components/footer';
import { rendersidebar } from './components/sidebar';
import { renderHome } from './components/home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ہیڈر */}
      <div id="header-container" dangerouslySetInnerHTML={{ __html: renderHeader() }} />

      {/* مین کنٹینٹ */}
      <main className="flex-grow pt-16 pb-20 bg-gray-50 max-w-md mx-auto w-full">
        <div id="app-root" dangerouslySetInnerHTML={{ __html: renderHome() }} />
      </main>

      {/* فوٹر اور سائیڈبار */}
      <div id="footer-container" dangerouslySetInnerHTML={{ __html: renderFooter('home') }} />
      <div id="sidebar-container" dangerouslySetInnerHTML={{ __html: rendersidebar() }} />
    </div>
  );
};

export default App;
