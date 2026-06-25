export const renderHome = () => {
  return `
    <main class="p-3 pb-20 space-y-6">
      <div id="AlinGo-map" class="w-full h-40 rounded-2xl shadow-sm border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
        <span class="text-gray-400 text-xs">Loading Map...</span>
      </div>

      <section>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Home Repair & Maintenance</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Plumber", i: "plumber.jpg"},
            {t: "Electrician", i: "electrition.jpg"},
            {t: "Carpenter", i: "carpenter.jpg"},
            {t: "Painter", i: "painter.jpg"},
            {t: "Cleaner", i: "cleaner.jpg"},
            {t: "Home Clean", i: "home cleaning.jpg"},
            {t: "Handyman", i: "handyman.jpg"},
            {t: "Mason", i: "mason.jpg"}
          ])}
        </div>
      </section>

      <div class="bg-gradient-to-r from-blue-500 to-emerald-600 p-4 rounded-2xl text-white">
        <h3 class="font-bold">Exclusive Offers</h3>
        <p class="text-xs opacity-80">Get 20% off on all machinery bookings this month!</p>
      </div>

<section>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Technical & Specia>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Food", s: "Dining", i: "burger.jpg"},
            {t: "Shopping", s: "Market", i: "shopping.jpg"},
            {t: "Hospitality", s: "Hotel", i: "Hospitality.jpg"},
            {t: "Tour", s: "Travel", i: "tour_gide.jpg"},
            {t: "Shipment", s: "Cargo", i: "intl_shipment.jpg"},
            {t: "Livestock", s: "Farm", i: "live_stok.jpg"},
            {t: "Banking", s: "Finance", i: "agriculture.jpg"},
            {t: "Home", s: "Services", i: "agriculture.jpg"}
          ])}
        </div>
      </section>

      <section>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Technical & Specialized</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "AC Tech", i: "Ac tachnition.jpg"},
            {t: "Cooling Tech", i: "cooling-tachnition.jpg"},
            {t: "CCTV", i: "CCTV.jpg"},
            {t: "Solar Sys", i: "soler sestum.jpg"},
            {t: "Water Purify", i: "water purifier.jpg"},
            {t: "Eco Sound", i: "eco sound.jpg"},
            {t: "Junretormak", i: "junretormak.jpg"},
            {t: "Mechanic", i: "Nick-mcanic.jpg"}
          ])}
        </div>
      </section>

      <section>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Professional & Lifestyle</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Doctor", i: "doctor-chat.jpg"},
            {t: "Gardner", i: "Gardner.jpg"},
            {t: "Laundry", i: "Landry.jpg"},
            {t: "Beauty", i: "beutyporler.jpg"},
            {t: "Driver", i: "driver services.jpg"},
            {t: "Home Shift", i: "home-shifting.jpg"},
            {t: "Insurance", i: "insurance.jpg"},
            {t: "Expert", i: "xpert Consultation .jpg"}
          ])}
        </div>
      </section>

      <section>
        <h3 class="text-xs font-bold text-gray-700 mb-3">Others</h3>
        <div class="grid grid-cols-4 gap-3">
          ${renderButtons([
            {t: "Pest Control", i: "pest control.jpg"},
            {t: "Movie Maker", i: "movie-makor.jpg"},
            {t: "Security", i: "security-gard.jpg"},
            {t: "Religion", i: "religion.jpg"}
          ])}
        </div>
      </section>
    </main>
  `;
};

export function renderButtons(list) {
  return list.map(b => `
    <div class="flex flex-col items-center">
      <div class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-1 overflow-hidden active:scale-95 transition-all">
        <img src="/buttons/${b.i}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/40'">
      </div>
      <span class="text-[9px] font-bold text-center leading-none text-gray-800">${b.t}</span>
    </div>
  `).join('');
}

