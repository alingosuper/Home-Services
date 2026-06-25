import React from 'react';
import { renderHeader } from '../../Alingo-Core-Lib/src/components/header.js';
import { renderFooter } from '../../Alingo-Core-Lib/src/components/footer.js';
import { renderHome } from './components/home.jsx';
const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header dangerouslySetInnerHTML={{ __html: renderHeader() }} />
      <main className="flex-grow pt-16 pb-20">
        <div dangerouslySetInnerHTML={{ __html: renderHome() }} />
      </main>
      <footer dangerouslySetInnerHTML={{ __html: renderFooter() }} />
    </div>
  );
};

export default App;
