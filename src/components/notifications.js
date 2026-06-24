// 🔔 نوٹیفکیشنز کا فرضی لائیو ڈیٹا بیس
let notificationsData = [
    { id: 1, title: "کیش بیک آفر! 🎉", message: "بل کی ادائیگی پر 5% کیش بیک آپ کے والٹ میں منتقل کر دیا گیا ہے۔", time: "5 منٹ پہلے", read: false, icon: "local_offer", color: "text-green-500 bg-green-50" },
    { id: 2, title: "سیکیورٹی الرٹ ⚠️", message: "آپ کا اکاؤنٹ ایک نئے ڈیوائس (Termux Linux) پر لاگ ان ہوا ہے۔", time: "30 منٹ پہلے", read: false, icon: "security", color: "text-red-500 bg-red-50" },
    { id: 3, title: "آرڈر مکمل ہو گیا 🚗", message: "آپ کی ٹرانسپورٹ رائیڈ کامیابی کے ساتھ مکمل ہو چکی ہے۔ شکریہ!", time: "2 گھنٹے پہلے", read: true, icon: "directions_car", color: "text-blue-500 bg-blue-50" },
    { id: 4, title: "والٹ اپڈیٹ 💳", message: "شاہ زیب بھائی، آپ کے اکاؤنٹ میں PKR 1,000 جمع کر دیے گئے ہیں۔", time: "1 دن پہلے", read: true, icon: "account_balance_wallet", color: "text-purple-500 bg-purple-50" }
];

// 🎨 نوٹیفکیشن اسکرین کو رینڈر کرنے کا مین فنکشن
export const renderNotifications = () => {
    // جاوا اسکرپٹ لاجک: سب کو ریڈ مارک کرنے کا ایکشن
    window.markAllNotificationsAsRead = () => {
        notificationsData = notificationsData.map(n => ({ ...n, read: true }));
        // اسکرین کو دوبارہ تازہ (Refresh) کریں تاکہ ڈاٹ غائب ہو جائے
        if (typeof window.switchMainTab === 'function') {
            window.switchMainTab('notifications');
        }
    };

    // غیر پڑھے ہوئے نوٹیفکیشنز کی تعداد
    const unreadCount = notificationsData.filter(n => !n.read).length;

    return `
    <main class="bg-gray-50 min-h-screen pb-24 select-none p-3 space-y-4">
        
        <div class="flex items-center justify-between border-b border-gray-200 pb-2">
            <div class="flex items-center gap-2">
                <h2 class="text-sm font-black text-gray-900 border-r-4 border-[#0D47A1] pr-2">نوٹیفیکیشنز (Notifications)</h2>
                ${unreadCount > 0 ? `<span class="text-[8px] bg-red-500 text-white font-black px-1.5 py-0.5 rounded-full">${unreadCount} نئے</span>` : ''}
            </div>
            ${unreadCount > 0 ? `
                <button onclick="window.markAllNotificationsAsRead()" class="text-[9px] font-black text-[#0D47A1] hover:underline flex items-center gap-0.5">
                    <span class="material-icons text-xs">done_all</span> سب پڑھے ہوئے مارک کریں
                </button>
            ` : `
                <span class="text-[8px] text-gray-400 font-bold flex items-center gap-0.5">
                    <span class="material-icons text-xs text-green-600">done_all</span> تمام الرٹس صاف ہیں
                </span>
            `}
        </div>

        <div class="space-y-2.5">
            ${notificationsData.length === 0 ? `
                <div class="text-center py-12 text-gray-400 font-bold text-xs uppercase">کوئی نوٹیفیکیشن موجود نہیں ہے</div>
            ` : notificationsData.map(noti => `
                <div class="p-3 bg-white border ${noti.read ? 'border-gray-100' : 'border-blue-200 bg-blue-50/10'} rounded-2xl shadow-sm flex gap-3 relative transition-all active:scale-[0.99]">
                    
                    ${!noti.read ? '<div class="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>' : ''}
                    
                    <div class="w-10 h-10 ${noti.color} rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <span class="material-icons text-lg">${noti.icon}</span>
                    </div>

                    <div class="flex-grow min-w-0 pr-4">
                        <div class="flex items-baseline justify-between gap-2">
                            <h4 class="text-[10px] font-black text-gray-900 truncate">${noti.title}</h4>
                            <span class="text-[7px] font-bold text-gray-400 shrink-0">${noti.time}</span>
                        </div>
                        <p class="text-[8.5px] font-medium text-gray-600 leading-normal mt-0.5">${noti.message}</p>
                    </div>

                </div>
            `).join('')}
        </div>

    </main>
    `;
};

// 🔔 ہیڈر میں ریڈ ڈاٹ دکھانے کے لیے ایک ہیلپر فنکشن
export const getUnreadNotificationsCount = () => {
    return notificationsData.filter(n => !n.read).length;
};
