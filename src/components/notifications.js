/**
 * AlinGo نوٹیفکیشن سسٹم
 */
export const notify = (message, type = 'info') => {
    const toast = document.createElement('div');
    toast.className = `fixed top-5 right-5 p-4 rounded-xl shadow-lg text-white font-bold z-50 ${type === 'error' ? 'bg-red-600' : 'bg-green-600'}`;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};
