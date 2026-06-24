export const renderHome = () => {
  return `
    <main class="p-3 pb-20 space-y-6">
      <div id="AlinGo-map" class="w-full h-40 rounded-2xl shadow-sm border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
        <span class="text-gray-400 text-xs">Service Map Area</span>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Home Repair & Maintenance</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Plumber", s: "Service", i: "plumber.jpg"},
            {t: "Electrician", s: "Repair", i: "Nick-mcanic.jpg"},
            {t: "Carpenter", s: "Woodwork", i: "carpaiter.jpg"},
            {t: "Painter", s: "Expert", i: "painter.jpg"},
            {t: "Gardener", s: "Care", i: "gardener.jpg"},
            {t: "Cleaner", s: "Service", i: "cleaner.jpg"},
            {t: "Pest", s: "Control", i: "spray.jpg"},
            {t: "Tank", s: "Clean", i: "cleaner.jpg"}
          ])}
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-500 to-emerald-600 p-4 rounded-2xl text-white">
        <h3 class="font-bold">Exclusive Offers</h3>
        <p class="text-xs opacity-80">Get 20% off on all machinery bookings this month!</p>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Agriculture & Auto</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Agri", s: "Analysis", i: "crob test.jpg"},
            {t: "Fertilizer", s: "Delivery", i: "fertilizer.jpg"},
            {t: "Auto", s: "Wash", i: "car.jpg"},
            {t: "Battery", s: "Jump", i: "Nick-mcanic.jpg"}
          ])}
        </div>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Professional Support</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Doctor", s: "Consult", i: "Dr-time.jpg"},
            {t: "Physio", s: "Therapy", i: "helth.jpg"},
            {t: "Lawyer", s: "Advice", i: "lawyer-apnt.jpg"},
            {t: "Education", s: "Tutoring", i: "education.jpg"}
          ])}
        </div>
      </div>

      <div>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Logistics & Events</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Laundry", s: "Service", i: "Landry.jpg"},
            {t: "Shipment", s: "Cargo", i: "lojistic.jpg"},
            {t: "Warehousing", s: "Storage", i: "werehous.jpg"},
            {t: "Gift", s: "Delivery", i: "gift.jpg"},
            {t: "Catering", s: "Event", i: "burger.jpg"},
            {t: "Photography", s: "Event", i: "movie-makor.jpg"}
          ])}
        </div>
      </div>
    </main>
  `;
};

function renderButtons(list) {
  return list.map(b => `
    <div class="flex flex-col items-center">
      <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-1 active:scale-95 transition-all overflow-hidden">
        <img 
          src="/${b.i}" 
          class="w-full h-full object-cover" 
          onerror="this.src='https://via.placeholder.com/40'"
        >
      </div>
      <span class="text-[9px] font-bold text-center leading-none text-gray-800">${b.t}</span>
      <span class="text-[7px] text-gray-400">${b.s}</span>
    </div>
  `).join('');
}

