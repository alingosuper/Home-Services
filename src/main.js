import './style.css';
import { renderHeader } from './components/header.js';
import { renderHome } from './components/home.js';
import { renderFooter } from './components/footer.js';
import { renderSidebar } from './components/sidebar.js';
import { renderBookings } from './components/bookings.js';
import { renderCategories } from './components/categories.js';
import { renderWallet } from './components/wallet.js';
import { renderOffers } from './components/offers.js';
import { renderProfile } from './components/profile.js';
import { renderScan } from './components/scan.js';
import { renderNotifications } from './components/notifications.js'; // 🔔 نئی فائل لنکڈ

let currentActiveTab = 'home';

const loadApp = (tab = 'home') => {
    const root = document.getElementById('app-root');
    currentActiveTab = tab;
    
    let contentDOM = renderHome();
    if (tab === 'bookings') contentDOM = renderBookings();
    else if (tab === 'categories') contentDOM = renderCategories();
    else if (tab === 'wallet') contentDOM = renderWallet();
    else if (tab === 'offers') contentDOM = renderOffers();
    else if (tab === 'profile') contentDOM = renderProfile();
    else if (tab === 'scan') contentDOM = renderScan();
    else if (tab === 'notifications') contentDOM = renderNotifications(); // 🔔 روٹ فکسڈ

    root.innerHTML = `
        ${renderHeader()}
        <main class="bg-gray-50 max-w-md mx-auto">${contentDOM}</main>
        ${renderFooter(tab)}
        ${renderSidebar()}
    `;
};

window.switchMainTab = (tabName) => { loadApp(tabName); window.scrollTo(0, 0); };
window.toggleTezroSidebar = (open) => {
    const sidebar = document.getElementById('tezro-sidebar');
    const content = document.getElementById('sidebar-content');
    if (open) { sidebar.classList.remove('invisible'); setTimeout(() => content.classList.remove('translate-x-full'), 10); }
    else { content.classList.add('translate-x-full'); setTimeout(() => sidebar.classList.add('invisible'), 300); }
};

document.addEventListener('DOMContentLoaded', () => loadApp('home'));
