import React from 'react';
// ڈیفالٹ کے بجائے بریکٹ کا استعمال کریں:
import { renderHeader as Header } from './components/header';
import { renderFooter as Footer } from './components/footer';
import { rendersidebar as Sidebar } from './components/sidebar';
import { renderHome } from './components/home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
