import { renderHome } from './components/home.js';
import { renderSharedLayout } from './components/sharedLayout.js';

const initApp = () => {
    const appContainer = document.getElementById('app');
    if (appContainer) {
        // پہلے ہوم پیج کا مواد لیں، پھر اسے Shared Layout میں ڈالیں
        const homeContent = renderHome();
        appContainer.innerHTML = renderSharedLayout(homeContent);
    }
};

document.addEventListener('DOMContentLoaded', initApp);
import { startVoiceSearch } from './search-control-core/js/voice-auth.js';
window.initVoiceSearch = startVoiceSearch;
