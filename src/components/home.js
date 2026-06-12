/**
 * AlinGo Super App - All Services Dashboard
 */

window.handleNavigation = (serviceName) => {
    const protectedServices = ["Lawyer", "Accountant", "Doctor", "Lab Tests"];
    if (protectedServices.includes(serviceName)) {
        AuthGuard(() => alert(`Opening ${serviceName} Services...`));
    } else {
        alert(`Opening ${serviceName} Services...`);
    }
};

export const renderHome = () => {
    return `
    <main class="p-3 space-y-6 pb-20">
        <h2 class="text-lg font-black text-gray-900 mb-3 px-1">All Services</h2>
        
        ${buildCategorySection("Repair & Maintenance", [
            {name: "Mason", img: "butans/masun.jpg"}, {name: "Plumber", img: "butans/plumber.jpg"},
            {name: "Electrician", img: "butans/soler-tech.jpg"}, {name: "AC Tech", img: "butans/jemretur-teh.jpg"},
            {name: "Car Mechanic", img: "butans/car.jpg"}, {name: "Bike Mechanic", img: "butans/bick.jpg"},
            {name: "CCTV Tech", img: "butans/10Kgestics.jpg"}, {name: "Carpenter", img: "butans/carpenter.jpg"}
        ])}

        ${buildCategorySection("Personal & Lifestyle", [
            {name: "Barber", img: "butans/gardner.jpg"}, {name: "Laundry", img: "butans/landry.jpg"},
            {name: "Doctor", img: "butans/docter.jpg"}, {name: "Tailor", img: "butans/hotel-room.jpg"},
            {name: "Videographer", img: "butans/movie-maker.jpg"}, {name: "Sound System", img: "butans/Eco sound.jpg"},
            {name: "Beauty Salon", img: "butans/grosry.jpg"}, {name: "Gym", img: "butans/food.jpg"}
        ])}

        ${buildCategorySection("Logistics & Essentials", [
            {name: "Cargo", img: "butans/lOKgestics.jpg"}, {name: "Parcel", img: "butans/parsel.jpg"},
            {name: "Grocery", img: "butans/grocery.jpg"}, {name: "Food", img: "butans/food-delevry.jpg"},
            {name: "Bank", img: "butans/bank.jpg"}, {name: "Insurance", img: "butans/alingo inssorence.jpg"},
            {name: "Bill Pay", img: "butans/bill-pay.jpg"}, {name: "Fuel", img: "butans/bick-ride.jpg"}
        ])}
    </main>
    `;
};

function buildCategorySection(title, services) {
    return `
    <div class="space-y-2">
        <h3 class="text-[10px] font-black text-gray-500 uppercase tracking-widest pl-1 border-l-2 border-[#0D47A1]">${title}</h3>
        <div class="grid grid-cols-4 gap-2">
            ${services.map(s => `
                <div onclick="handleNavigation('${s.name}')" class="relative w-full aspect-square bg-gray-100 border border-gray-100 shadow-sm overflow-hidden rounded-xl cursor-pointer hover:scale-95 transition-transform active:scale-90">
                    <img src="${s.img}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/100?text=${s.name}'" alt="${s.name}">
                    <div class="absolute bottom-0 left-0 right-0 bg-black/60 py-1 text-center">
                        <span class="text-[7px] font-bold text-white leading-tight block truncate px-1">${s.name}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}
