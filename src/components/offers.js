export const renderOffers = () => {
    return `
    <main class="p-3 space-y-4 pb-24">
        <h2 class="text-sm font-black text-gray-900 border-r-4 border-[#0D47A1] pr-2">خصوصی آفرز (Exclusive Offers)</h2>
        <div class="space-y-3">
            <div class="relative rounded-2xl overflow-hidden shadow-lg"><img src="butans/food-delevry.jpg" class="w-full h-32 object-cover"><div class="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white"><p class="text-xs font-black uppercase">Foodie Friday</p><p class="text-[9px]">Get 50% OFF on first 3 orders!</p></div></div>
            <div class="relative rounded-2xl overflow-hidden shadow-lg"><img src="butans/car-ride.jpg" class="w-full h-32 object-cover"><div class="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white"><p class="text-xs font-black uppercase">Weekend Ride</p><p class="text-[9px]">Flat PKR 100 cashback on every ride.</p></div></div>
        </div>
    </main>`;
};
