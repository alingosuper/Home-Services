export const renderWallet = () => {
    return `
    <main class="p-3 space-y-5 pb-24">
        <div class="bg-gradient-to-br from-[#0A192F] to-[#0D47A1] p-5 rounded-2xl text-white shadow-xl">
            <p class="text-[10px] font-medium opacity-80">کل بیلنس (Total Balance)</p>
            <h2 class="text-2xl font-black mt-1">PKR 2,450.00</h2>
            <div class="flex gap-3 mt-4">
                <button class="flex-1 bg-white/20 backdrop-blur-md py-2 rounded-lg text-[10px] font-black">رقم جمع کریں</button>
                <button class="flex-1 bg-green-500 py-2 rounded-lg text-[10px] font-black">رقم نکالیں</button>
            </div>
        </div>
        <div class="space-y-3">
            <h3 class="text-xs font-black">حالیہ لین دین (Recent Transactions)</h3>
            <div class="bg-white border border-gray-100 rounded-xl p-3 flex justify-between items-center shadow-sm">
                <div class="flex items-center gap-3"><span class="material-icons text-green-600">arrow_downward</span><div><p class="text-[10px] font-black">رائڈ پیمنٹ</p><p class="text-[8px] text-gray-400">آج، 10:00 AM</p></div></div>
                <span class="text-[10px] font-black text-red-600">- 350</span>
            </div>
        </div>
    </main>`;
};
