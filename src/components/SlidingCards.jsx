export const SlidingCards = () => {
  const services = ["CCTV", "Gardner", "Landry", "Carpenter", "Cleaner", "Painter", "Plumber", "Mason", "Electrician", "Security-Gard"];
  return `
    <section class="my-6">
      <h2 class="text-xs font-bold text-gray-700 mb-3">Popular Services</h2>
      <div class="flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
        ${services.map(service => `
          <div class="min-w-[130px] h-[160px] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3">
            <div class="w-16 h-16 bg-gray-50 rounded-xl mb-3 overflow-hidden">
               <img src="/buttons/${service}.jpg" class="w-full h-full object-cover" onerror="this.src='/buttons/cleaner.jpg'" />
            </div>
            <p class="text-[11px] font-bold text-gray-800 text-center uppercase">${service}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
