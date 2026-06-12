export const renderScan = () => {
    // 🧠 جاوا اسکرپٹ لاجک: ٹیب سوئچنگ اور اینیمیشنز کو ہینڈل کریں
    setTimeout(() => {
        window.switchScanTab = (tab, btn) => {
            const scanView = document.getElementById('scan-camera-view');
            const qrView = document.getElementById('my-qr-view');
            const btns = document.querySelectorAll('.scan-tab-btn');

            btns.forEach(b => b.classList.remove('bg-[#0D47A1]', 'text-white'));
            btn.classList.add('bg-[#0D47A1]', 'text-white');

            if (tab === 'scan') {
                scanView.classList.remove('hidden');
                qrView.classList.add('hidden');
            } else {
                scanView.classList.add('hidden');
                qrView.classList.remove('hidden');
            }
        };
    }, 100);

    return `
    <main class="bg-gray-50 min-h-screen pb-32 select-none flex flex-col">
        
        <div class="p-4 flex justify-center">
            <div class="bg-white border border-gray-100 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                <span class="material-icons text-green-600 text-sm">account_balance_wallet</span>
                <span class="text-[9px] font-black text-gray-400 uppercase tracking-tighter">آپ کا بیلنس:</span>
                <span class="text-[10px] font-black text-gray-900">PKR 2,450.00</span>
            </div>
        </div>

        <div class="px-6 mb-4">
            <div class="bg-gray-200 p-1 rounded-xl flex items-center">
                <button onclick="window.switchScanTab('scan', this)" class="scan-tab-btn flex-1 bg-[#0D47A1] text-white py-2 rounded-lg text-[10px] font-black uppercase transition-all">اسکین کریں</button>
                <button onclick="window.switchScanTab('qr', this)" class="scan-tab-btn flex-1 text-gray-500 py-2 rounded-lg text-[10px] font-black uppercase transition-all">میرا QR</button>
            </div>
        </div>

        <div id="scan-camera-view" class="flex-grow flex flex-col items-center justify-center px-8 relative">
            <div class="w-full aspect-square max-w-[280px] border-4 border-white rounded-[40px] shadow-2xl relative overflow-hidden bg-black/5 flex items-center justify-center">
                
                <div class="absolute top-0 left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)] z-10 animate-laser-move"></div>
                
                <div class="absolute top-6 left-6 w-8 h-8 border-t-4 border-l-4 border-[#0D47A1] rounded-tl-xl"></div>
                <div class="absolute top-6 right-6 w-8 h-8 border-t-4 border-r-4 border-[#0D47A1] rounded-tr-xl"></div>
                <div class="absolute bottom-6 left-6 w-8 h-8 border-b-4 border-l-4 border-[#0D47A1] rounded-bl-xl"></div>
                <div class="absolute bottom-6 right-6 w-8 h-8 border-b-4 border-r-4 border-[#0D47A1] rounded-br-xl"></div>
                
                <span class="material-icons text-7xl text-gray-200 opacity-20">qr_code_scanner</span>
            </div>

            <div class="flex gap-8 mt-8">
                <button onclick="alert('Flashlight Toggled')" class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 active:scale-90 transition-all">
                    <span class="material-icons">flashlight_on</span>
                </button>
                <button onclick="alert('Opening Gallery...')" class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 active:scale-90 transition-all">
                    <span class="material-icons">image</span>
                </button>
            </div>

            <button onclick="alert('Enter Number Manual')" class="mt-8 text-[10px] font-black text-[#0D47A1] uppercase tracking-widest border-b-2 border-[#0D47A1] pb-0.5">ٹیزرو ID یا نمبر درج کریں</button>
        </div>

        <div id="my-qr-view" class="hidden flex-grow flex flex-col items-center justify-center px-8">
            <div class="bg-white p-6 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center">
                <div class="w-48 h-48 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <span class="material-icons text-8xl text-gray-300">qr_code_2</span>
                </div>
                <h3 class="mt-4 text-xs font-black text-gray-900">شاہ زیب بھائی</h3>
                <p class="text-[9px] font-bold text-gray-500">+92 300 1234567</p>
            </div>
            <button class="mt-6 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-[9px] font-black text-gray-700">
                <span class="material-icons text-sm">share</span> کیو آر شیئر کریں
            </button>
        </div>

        <div class="p-4 pt-2">
            <h3 class="text-[9px] font-black text-gray-400 uppercase tracking-wider mb-3">حالیہ ادائیگی (Recent Paid)</h3>
            <div class="flex justify-between items-center gap-2 px-1">
                ${buildRecentMerchant("شاہ جی اسٹور", "http://googleusercontent.com/image_collection/image_retrieval/4945195682618999241")}
                ${buildRecentMerchant("کافی ہاؤس", "http://googleusercontent.com/image_collection/image_retrieval/13731965854488353898")}
                ${buildRecentMerchant("فریش مارکیٹ", "http://googleusercontent.com/image_collection/image_retrieval/11261619798736296358")}
                ${buildRecentMerchant("علی احمد", "http://googleusercontent.com/image_collection/image_retrieval/5383492943011775571")}
            </div>
        </div>

    </main>

    <style>
        @keyframes laser-move {
            0% { top: 10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 90%; opacity: 0; }
        }
        .animate-laser-move {
            animation: laser-move 2.5s infinite linear;
        }
    </style>
    `;
};

function buildRecentMerchant(name, img) {
    return `
    <div class="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-all">
        <div class="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-white">
            <img src="${img}" class="w-full h-full object-cover">
        </div>
        <span class="text-[7px] font-black text-gray-600 text-center truncate w-14 uppercase">${name}</span>
    </div>
    `;
}
