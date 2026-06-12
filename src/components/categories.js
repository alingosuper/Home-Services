export const renderCategories = () => {
    // 🧠 جاوا اسکرپٹ لاجک: رینڈر ہوتے ہی سمارٹ ورٹیکل فلٹرز اور کلک ہینڈلنگ ایکٹو کریں
    setTimeout(() => {
        // 📋 ورٹیکل ٹیب فلٹر لاجک
        window.filterVerticalCategory = (tabType, element) => {
            // تمام ورٹیکل ٹیبز کا رنگ نارمل کریں
            document.querySelectorAll('.v-tab-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-[#0D47A1]', 'border-r-4', 'border-[#0D47A1]', 'font-black');
                btn.classList.add('text-gray-500', 'font-bold');
            });
            // کلک شدہ ٹیب کو ایکٹو (ڈارک نیلے ہائی لائٹ) کریں
            element.classList.add('bg-white', 'text-[#0D47A1]', 'border-r-4', 'border-[#0D47A1]', 'font-black');
            element.classList.remove('text-gray-500', 'font-bold');

            const buttons = document.querySelectorAll('.main-cat-btn');
            buttons.forEach(btn => {
                const group = btn.getAttribute('data-group');
                if (tabType === 'all' || group === tabType) {
                    btn.style.display = 'flex';
                } else {
                    btn.style.display = 'none';
                }
            });
        };
    }, 100);

    return `
    <main class="bg-gray-50 flex flex-col min-h-screen pb-28 select-none">
        
        <div class="p-3 bg-white border-b border-gray-100 space-y-2">
            <h3 class="text-[9px] font-black text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <span class="material-icons text-xs text-[#0D47A1]">history</span> حالیہ استعمال شدہ (Recently Used)
            </h3>
            <div class="grid grid-cols-4 gap-2">
                ${buildRecentButton("ٹرانسپورٹ", "Categories/Travel-&-Tuars.jpg")}
                ${buildRecentButton("کھانا", "Categories/food.JPG")}
                ${buildRecentButton("بل ادائیگی", "Categories/bils.JPG")}
                ${buildRecentButton("ڈاکٹر", "Categories/dockter.JPG")}
            </div>
        </div>

        <div class="flex flex-grow overflow-hidden">
            
            <div class="w-24 bg-gray-100/80 flex flex-col border-l border-gray-200 text-[9px]">
                <button onclick="window.filterVerticalCategory('all', this)" class="v-tab-btn p-3 text-right bg-white text-[#0D47A1] border-r-4 border-[#0D47A1] font-black transition-all">✨ تمام سروسز</button>
                <button onclick="window.filterVerticalCategory('transport', this)" class="v-tab-btn p-3 text-right text-gray-500 font-bold hover:bg-gray-50 transition-all">🚗 ٹرانسپورٹ</button>
                <button onclick="window.filterVerticalCategory('food', this)" class="v-tab-btn p-3 text-right text-gray-500 font-bold hover:bg-gray-50 transition-all">🍔 فوڈ / گروسری</button>
                <button onclick="window.filterVerticalCategory('repair', this)" class="v-tab-btn p-3 text-right text-gray-500 font-bold hover:bg-gray-50 transition-all">🛠️ ہوم سروسز</button>
                <button onclick="window.filterVerticalCategory('finance', this)" class="v-tab-btn p-3 text-right text-gray-500 font-bold hover:bg-gray-50 transition-all">💳 فنانس اور بلز</button>
            </div>

            <div class="flex-grow p-3 overflow-y-auto">
                <div class="grid grid-cols-3 gap-2" id="main-categories-grid">
                    ${buildSmartGridButton("ٹرانسپورٹ", "Categories/Travel-&-Tuars.jpg", "transport", "ride bike car taxi")}
                    ${buildSmartGridButton("کھانا", "Categories/food.JPG", "food", "food restaurant burger kfc")}
                    ${buildSmartGridButton("گروسری", "Categories/shipment.png", "food", "grocery market fruit subzi")}
                    ${buildSmartGridButton("مرمت", "Categories/tech-spport.JPG", "repair", "repair AC electrician carpenter")}
                    ${buildSmartGridButton("صحت", "Categories/Health.JPG", "repair", "health medicine hospital")}
                    ${buildSmartGridButton("تعلیم", "Categories/Education.JPG", "finance", "education school online fees")}
                    ${buildSmartGridButton("بل ادائیگی", "Categories/bils.JPG", "finance", "bills electric gas water")}
                    ${buildSmartGridButton("سیکیورٹی", "Categories/security.JPG", "repair", "security guard camera home")}
                    ${buildSmartGridButton("ڈاکٹر", "Categories/dockter.JPG", "repair", "doctor clinic appointment")}
                    ${buildSmartGridButton("بینکنگ", "Categories/bank.jpg", "finance", "bank transfer cash wallet")}
                    ${buildSmartGridButton("بیوٹی پارلر", "Categories/bouty.JPG", "repair", "salon beauty makeup parlor")}
                    ${buildSmartGridButton("زراعت", "Categories/Agriculture.png", "food", "kisan agriculture urea kheti")}
                </div>
            </div>

        </div>

        <div class="p-2 bg-white border-t border-gray-100 shadow-md">
            <div onclick="alert('Opening Cashback Offer...')" class="bg-gradient-to-r from-[#0A192F] to-[#0D47A1] rounded-xl p-2 flex items-center justify-between text-white shadow-sm cursor-pointer hover:opacity-95 active:scale-95 transition-all">
                <div class="flex items-center gap-2">
                    <div class="bg-white/20 p-1.5 rounded-lg">
                        <span class="material-icons text-base text-green-400 block">local_offer</span>
                    </div>
                    <div>
                        <h4 class="text-[9px] font-black uppercase tracking-wider">موبائل بل و ٹاپ اپ آفر</h4>
                        <p class="text-[7px] text-gray-200 mt-0.5">ہر بل کی ادائیگی پر پائیں فلیٹ 5% کیش بیک فوری والٹ میں!</p>
                    </div>
                </div>
                <span class="material-icons text-sm text-green-400 pr-1">chevron_left</span>
            </div>
        </div>

    </main>
    `;
};

// 🛡️ ریسیٹ سروسز کے لیے چھوٹا چوکور پریمیم بٹن بلڈر
function buildRecentButton(name, imgPath) {
    return `
    <div onclick="alert('Opening Recent ${name}...')" class="bg-gray-50 border border-gray-100 p-1 rounded-xl flex flex-col items-center text-center shadow-sm cursor-pointer hover:border-gray-300 active:scale-95 transition-all">
        <div class="w-8 h-8 rounded-lg overflow-hidden bg-white mb-1">
            <img src="${imgPath}" class="w-full h-full object-cover">
        </div>
        <span class="text-[7.5px] font-black text-gray-800 tracking-tighter truncate w-full">${name}</span>
    </div>
    `;
}

// 🛡️ مین گریڈ کا چوکور (Aspect 1:1) اور پریمیم ڈارک گریڈینٹ ٹیکسٹ بٹن بلڈر
function buildSmartGridButton(name, imgPath, group, tags) {
    return `
    <div onclick="alert('Opening ${name} section...')" data-name="${name}" data-group="${group}" data-tags="${tags}" class="main-cat-btn flex flex-col items-center gap-1 cursor-pointer group">
        <div class="w-full aspect-square bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm shadow-black/5 group-hover:border-gray-400 group-active:scale-95 transition-all relative">
            
            <img src="${imgPath}" class="w-full h-full object-cover block" alt="${name}" onerror="this.src='https://via.placeholder.com/100?text=${name}'">
            
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/40 py-1 text-center">
                <span class="text-[7.5px] font-black text-white block truncate px-0.5 uppercase tracking-wide">${name}</span>
            </div>
            
        </div>
    </div>
    `;
}
