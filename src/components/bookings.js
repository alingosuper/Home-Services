export const renderBookings = () => {
    return `
    <main class="p-3 space-y-4 pb-24 select-none">
        <div class="flex items-center justify-between border-b border-gray-100 pb-2">
            <h2 class="text-sm font-black text-gray-900 border-r-4 border-[#0D47A1] pr-2">میری بکنگز (My Bookings)</h2>
            <span class="bg-[#0A192F] text-white text-[8px] font-bold px-2 py-0.5 rounded-md">3 Active</span>
        </div>

        <div class="space-y-3">
            <h3 class="text-[10px] font-black text-green-600 flex items-center gap-1">
                <span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                جاری سروسز (In Progress)
            </h3>
            
            ${buildBookingCard("Ride Booking", "🚗 Bike Ride (Karachi)", "PKR 350", "In Progress", "bg-amber-500", "motorcycle", "TZ-89432", "Today, 10:30 AM")}
            
            ${buildBookingCard("Food Order", "🍔 Big Burger Deal", "PKR 850", "Pending", "bg-blue-500", "delivery_dining", "TZ-77321", "Today, 11:15 AM")}
        </div>

        <div class="space-y-3 pt-2">
            <h3 class="text-[10px] font-black text-gray-500 flex items-center gap-1">
                <span class="material-icons text-xs">history</span>
                پچھلی بکنگز (Past History)
            </h3>

            ${buildBookingCard("Home Service", "🛠️ Electrician Service", "PKR 1,200", "Completed", "bg-green-600", "build", "TZ-44102", "18 May 2026")}
            
            ${buildBookingCard("Pharmacy", "➕ Panadol & Surbex-Z", "PKR 420", "Cancelled", "bg-red-600", "local_hospital", "TZ-11029", "15 May 2026")}
        </div>
    </main>
    `;
};

// 🛡️ پریمیم ماڈیولر بکنگ کارڈ میکر (90 ڈگری توازن + گول کونے)
function buildBookingCard(type, details, price, status, statusBg, icon, orderId, time) {
    return `
    <div class="bg-white border border-gray-200 p-3 shadow-sm rounded-xl flex flex-col gap-2.5 hover:border-gray-300 transition-all">
        <div class="flex items-center justify-between text-[9px]">
            <span class="font-bold text-gray-400">ID: ${orderId}</span>
            <span class="${statusBg} text-white font-black px-2 py-0.5 rounded-md uppercase tracking-wide text-[7px]">${status}</span>
        </div>

        <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-[#0D47A1]">
                <span class="material-icons text-xl block">${icon}</span>
            </div>
            <div class="flex-grow">
                <h4 class="text-xs font-black text-gray-900 leading-tight">${type}</h4>
                <p class="text-[10px] font-bold text-gray-700 mt-0.5">${details}</p>
                <p class="text-[8px] text-gray-400 mt-1 flex items-center gap-1">
                    <span class="material-icons text-[10px]">schedule</span> ${time}
                </p>
            </div>
            <div class="text-right shrink-0">
                <span class="text-xs font-black text-gray-900 block">${price}</span>
            </div>
        </div>

        ${status !== 'Completed' && status !== 'Cancelled' ? `
        <div class="flex gap-2 border-t border-gray-100 pt-2 mt-0.5">
            <button onclick="alert('Connecting Driver/Partner...')" class="flex-grow bg-[#0D47A1] text-white text-[8px] font-black py-1.5 rounded-md hover:bg-[#0A192F] active:scale-95 transition-all uppercase">Track Order</button>
            <button onclick="alert('Cancelling Request...')" class="px-3 bg-gray-100 text-red-600 border border-gray-200 text-[8px] font-black py-1.5 rounded-md hover:bg-red-50 active:scale-95 transition-all">Cancel</button>
        </div>
        ` : `
        <div class="flex gap-2 border-t border-gray-100 pt-2 mt-0.5">
            <button onclick="alert('Ordering again...')" class="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[8px] font-black py-1.5 rounded-md hover:bg-gray-100 active:scale-95 transition-all">Reorder Service</button>
        </div>
        `}
    </div>
    `;
}
