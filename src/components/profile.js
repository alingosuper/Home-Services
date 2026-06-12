export const renderProfile = () => {
    return `
    <main class="p-3 space-y-5 pb-24">
        <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#0D47A1] font-black">SZ</div>
            <div><h2 class="text-sm font-black">شاہ زیب بھائی</h2><p class="text-[9px] text-gray-500 font-bold">+92 300 1234567</p></div>
        </div>
        <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden divide-y divide-gray-50 shadow-sm">
            ${buildProfileLink("settings", "ایپ کی ترتیبات (Settings)")}
            ${buildProfileLink("history", "میری ہسٹری (My History)")}
            ${buildProfileLink("support", "مدد اور سپورٹ (Support)")}
            <div class="p-3 text-red-600 flex items-center gap-3 cursor-pointer"><span class="material-icons text-sm">logout</span><span class="text-[10px] font-black uppercase">Logout</span></div>
        </div>
    </main>`;
};
function buildProfileLink(icon, title) {
    return `<div class="p-3 flex items-center justify-between hover:bg-gray-50 cursor-pointer"><div class="flex items-center gap-3 text-gray-700"><span class="material-icons text-sm">${icon}</span><span class="text-[10px] font-bold">${title}</span></div><span class="material-icons text-gray-300 text-sm">chevron_left</span></div>`;
}
