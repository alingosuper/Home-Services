export const renderHome = () => {
  setTimeout(() => {
    const mapContainer = document.getElementById('AlinGo-map');
    if (mapContainer && !mapContainer._leaflet_id) {
       const map = L.map('AlinGo-map').setView([24.8607, 67.0011], 13);
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
  }, 400);

  return `
    <main class="p-3 pb-20 space-y-6">
      <div id="AlinGo-map" class="w-full h-40 rounded-2xl shadow-sm border border-gray-200 overflow-hidden"></div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Top Agricultural Services</h3>
        <div class="grid grid-cols-5 gap-2">
          ${renderButtons([
            {t: "Weather", s: "Update", i: "wather.jpg"}, {t: "Market", s: "Prices", i: "Market-Prices.jpg"},
            {t: "Booking", s: "Machinery", i: "Machinery-Booking.jpg"}, {t: "Alerts", s: "Reminders", i: "notifications.jpg"},
            {t: "Diagnosis", s: "AI", i: "AI-Diagnosis.jpg"}, {t: "Disease", s: "Guide", i: "est-Disease-Guide.jpg"},
            {t: "Expert", s: "Advice", i: "xpert-Consultation.jpg"}, {t: "Soil", s: "Test", i: "Soil-Test-Report.jpg"},
            {t: "Planner", s: "Crop", i: "Crop-Planner.jpg"}, {t: "Yield", s: "Predict", i: "Yield-Predictor.jpg"}
          ])}
        </div>
      </div>

      <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl text-white">
        <h3 class="font-bold">Exclusive Offers</h3>
        <p class="text-xs opacity-80">Get 20% off on all machinery bookings this month!</p>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Lifestyle & Commerce</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Food", s: "Dining", i: "burger.jpg"}, {t: "Shopping", s: "Market", i: "shopping.jpg"},
            {t: "Hospitality", s: "Hotel", i: "room-book.jpg"}, {t: "Tour", s: "Travel", i: "agriculture.jpg"},
            {t: "Shipment", s: "Cargo", i: "fight-cargo.jpg"}, {t: "Livestock", s: "Farm", i: "agriculture.jpg"},
            {t: "Banking", s: "Finance", i: "agriculture.jpg"}, {t: "Home", s: "Services", i: "agriculture.jpg"}
          ])}
        </div>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">General Utilities</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Crop", s: "Calendar", i: "agriculture.jpg"}, {t: "Financial", s: "Ledger", i: "agriculture.jpg"},
            {t: "Fertilizer", s: "Guide", i: "Fertilizer-Guide.jpg"}, {t: "Spray", s: "Calc", i: "spray.jpg"},
            {t: "Irrigation", s: "Planner", i: "Irrigation-Planner.jpg"}, {t: "Farm", s: "Management", i: "agriculture.jpg"},
            {t: "Input", s: "Calculator", i: "agriculture.jpg"}, {t: "Marketplace", s: "Trading", i: "agriculture.jpg"},
            {t: "Drone", s: "Survey", i: "Drone-Survey.jpg"}, {t: "Geo", s: "Mapper", i: "agriculture.jpg"},
            {t: "Order", s: "Form", i: "Order-Form.jpg"}, {t: "Area", s: "Calculator", i: "agriculture.jpg"},
            {t: "Delivery", s: "Logistics", i: "delivery-verifay.jpg"}, {t: "Beauty", s: "Parlor", i: "beutyporler.jpg"}
          ])}
        </div>
      </div>
    </main>
  `;
};

function renderButtons(list) {
  return list.map(b => `
    <div class="flex flex-col items-center">
      <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-1 active:scale-95 transition-all">
        <img src="/${b.i}" class="w-8 h-8 object-contain" onerror="this.src='https://via.placeholder.com/40'">
      </div>
      <span class="text-[9px] font-bold text-center leading-none text-gray-800">${b.t}</span>
      <span class="text-[7px] text-gray-400">${b.s}</span>
    </div>
  `).join('');
}
