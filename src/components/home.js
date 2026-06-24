export const renderHome = () => {
    // جیسے ہی ہوم پیج رینڈر ہو، نقشہ فائر کریں
    setTimeout(() => {
        const mapContainer = document.getElementById('tezro-map');
        if (mapContainer && !mapContainer._leaflet_id) {
            const map = L.map('tezro-map', {
                zoomControl: false,
                attributionControl: false
            }).setView([24.8607, 67.0011], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19
            }).addTo(map);

            const tezroIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="color: #16a34a; transform: scale(1.5); text-shadow: 0 2px 4px rgba(0,0,0,0.3);"><span class="material-icons">location_on</span></div>`,
                iconSize: [30, 42],
                iconAnchor: [15, 42]
            });

            L.marker([24.8607, 67.0011], { icon: tezroIcon }).addTo(map);
            setTimeout(() => { map.invalidateSize(); }, 200);
        }
    }, 400);

    return `
    <main class="p-3 space-y-5 pb-20">
        <div class="relative border border-gray-200 shadow-sm z-10 rounded-xl overflow-hidden">
            <div id="tezro-map" class="w-full h-32 bg-gray-100"></div>
            <button class="absolute bottom-2 right-2 bg-white p-1.5 text-gray-700 shadow-md z-[1000] rounded-lg active:scale-95 transition-transform" onclick="alert('Searching live GPS...')">
                <span class="material-icons text-sm block">my_location</span>
            </button>
        </div>

        <div class="grid grid-cols-5 gap-2 px-1">
            ${buildImageServiceButton("Ride", "butans/car-ride.jpg")}
            ${buildImageServiceButton("Food Delivery", "butans/food-delevry.jpg")}
            ${buildImageServiceButton("Grocery", "butans/grocery.jpg")}
            ${buildImageServiceButton("Home Services", "butans/jernretur-teh.jpg")}
            ${buildImageServiceButton("Shopping", "butans/grosry.jpg")}
            ${buildImageServiceButton("Parcel", "butans/parcel-delivry.jpg")}
            ${buildImageServiceButton("Pharmacy", "butans/docter.jpg")}
            ${buildImageServiceButton("Laundry", "butans/landry.jpg")}
            ${buildImageServiceButton("Tickets", "butans/flay-tickets.jpg")}
            ${buildImageServiceButton("Hotel Room", "butans/hotel-room.jpg")}
        </div>

        <div class="relative bg-white p-4 flex justify-between items-center overflow-hidden border border-gray-100 shadow-sm rounded-xl">
            <div class="space-y-1">
                <span class="bg-red-600 text-white text-[7px] font-black px-1.5 py-0.5 uppercase tracking-wider rounded">Big Offers</span>
                <h3 class="text-sm font-black tracking-wide leading-tight text-gray-900">On Food Delivery</h3>
                <p class="text-[9px] text-red-700 font-bold">Up to 30% OFF</p>
                <button class="mt-2 bg-[#0A192F] text-white text-[9px] font-black px-3 py-1 rounded-md hover:bg-[#0D47A1] active:scale-95 transition-all">Order Now</button>
            </div>
            <div class="w-24 h-16 flex items-center justify-center overflow-hidden rounded-lg">
                <img src="butans/food-delevry.jpg" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/100x80?text=Food'">
            </div>
        </div>

        <div class="grid grid-cols-3 gap-2">
            ${buildPromotionCard("Grocery", "Fresh & Fast Up to 20% OFF", "butans/grocery.jpg", "Shop Now")}
            ${buildPromotionCard("Ride", "Flat 15% OFF On Every Ride", "butans/car.jpg", "Book Now")}
            ${buildPromotionCard("Pharmacy", "Save 20% On Medicines", "butans/docter.jpg", "Order Now")}
        </div>

        <div class="space-y-2">
            <h3 class="text-xs font-black text-gray-800 border-r-2 border-[#0D47A1] pr-2">Important Services</h3>
            <div class="grid grid-cols-2 gap-2.5">
                ${buildImportantLink("Bill Payment", "receipt_long")}
                ${buildImportantLink("Mobile Topup", "phone_android")}
                ${buildImportantLink("Insurance", "verified_user")}
                ${buildImportantLink("Bank Transfer", "account_balance")}
                ${buildImportantLink("Investments", "trending_up")}
                ${buildImportantLink("Offers", "local_offer")}
                ${buildImportantLink("Wallet", "wallet")}
                ${buildImportantLink("Help & Support", "support_agent")}
            </div>
        </div>

        <div class="border border-gray-200 bg-white p-2 shadow-sm flex flex-col items-center rounded-xl overflow-hidden">
            <div class="w-full flex justify-center gap-1 overflow-x-auto py-1">
                <img src="Publisity-Poster/IMG_20260506_184246.JPG" class="h-28 object-contain border border-gray-100 shadow-sm rounded-lg" onerror="this.src='https://via.placeholder.com/80x110?text=Flyer+1'">
                <img src="Publisity-Poster/Tezro partner.JPG" class="h-28 object-contain border border-gray-100 shadow-sm rounded-lg" onerror="this.src='https://via.placeholder.com/80x110?text=Flyer+2'">
                <img src="Publisity-Poster/bus.JPG" class="h-28 object-contain border border-gray-100 shadow-sm rounded-lg" onerror="this.src='https://via.placeholder.com/80x110?text=Flyer+3'">
            </div>
        </div>
    </main>
    `;
};

// 🛡️ فکسڈ سائز امیج بٹن انجن (پوری تصویر بیک گراؤنڈ پر فٹ اور کونے گول)
function buildImageServiceButton(name, imgPath) {
    return `
    <div onclick="alert('Opening ${name}...')" class="relative w-full aspect-square bg-gray-200 shadow-sm overflow-hidden rounded-xl cursor-pointer hover:scale-95 active:scale-90 transition-transform group border border-gray-100">
        <img src="${imgPath}" class="w-full h-full object-cover block" alt="${name}" onerror="this.src='https://via.placeholder.com/100?text=${name}'">
        
        <div class="absolute bottom-0 left-0 right-0 bg-black/60 py-0.5 text-center">
            <span class="text-[7px] font-black text-white leading-tight block truncate px-0.5">${name}</span>
        </div>
    </div>
    `;
}

function buildPromotionCard(title, desc, imgPath, btnText) {
    return `
    <div class="bg-white border border-gray-100 p-2 flex flex-col items-center text-center shadow-sm rounded-xl overflow-hidden">
        <h4 class="text-[9px] font-black text-gray-800">${title}</h4>
        <p class="text-[7px] text-gray-600 leading-tight mt-0.5">${desc}</p>
        <div class="w-12 h-12 my-1.5 overflow-hidden rounded-lg">
            <img src="${imgPath}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/40x40?text=Icon'">
        </div>
        <button class="bg-[#0D47A1] text-white text-[7px] font-black px-2 py-0.5 rounded hover:bg-[#0A192F] active:scale-95 transition-all w-max">${btnText}</button>
    </div>
    `;
}

function buildImportantLink(title, icon) {
    return `
    <div class="bg-white border border-gray-200 p-2 flex items-center gap-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
        <span class="material-icons text-sm text-[#0D47A1]">${icon}</span>
        <span class="text-[9px] font-bold text-gray-800">${title}</span>
    </div>
    `;
}
