import { renderHeader } from './header.js';
import { renderFooter } from './footer.js';

/**
 * Shared Layout: آپ کے پرانے ہیڈر اور فوٹر کے ساتھ انضمام
 */
export const renderSharedLayout = (content) => {
    return `
    <div class="min-h-screen flex flex-col bg-gray-50">
        <header class="fixed top-0 w-full z-50 bg-white">
            ${renderHeader()}
        </header>

        <main class="flex-grow pt-20 pb-20">
            ${content}
        </main>

        <footer class="fixed bottom-0 w-full z-50 bg-white">
            ${renderFooter()}
        </footer>
    </div>
    `;
};
