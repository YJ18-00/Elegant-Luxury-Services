/*====================================================================
  1. القائمة الجانبية (SIDEBAR MANAGEMENT)
====================================================================*/

// فتح القائمة الجانبية وإخفاء زر القائمة
function openNav() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.style.width = "250px";
  
  const btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
}

// إغلاق القائمة الجانبية وإعادة إظهار زر القائمة
function closeNav() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.style.width = "0";
  
  const btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  }
}


/*====================================================================
  2. التنقل وتصنيفات السيارات (NAVIGATION & CATEGORIES)
====================================================================*/

// التوجيه إلى صفحات الأقسام المحددة
function showCategory(category) {
  switch(category) {
    case "Exceptional Cars": window.location.href = "exceptional.html"; break;
    case "Luxury Sedans": window.location.href = "sedans.html"; break;
    case "Convertibles": window.location.href = "convertibles.html"; break;
    case "SUVs": window.location.href = "suvs.html"; break;
    case "Minivans": window.location.href = "minivans.html"; break;
    case "City Cars": window.location.href = "citycars.html"; break;
    case "Luxury Yachts": window.location.href = "Yacht.html"; break;
    case "Private Jets": window.location.href = "jet.html"; break;
    default: alert("Page Not Found");
  }
}


/*====================================================================
  3. قاعدة البيانات ونظام الحجز الجانبي (DATABASE & BOOKING DRAWER)
====================================================================*/

const carDatabase = {
    // SUVs
    "Lamborghini Urus": { category: "suvs", folderName: "Lamborghini Urus", model: "2026", hp: "666", engine: "V8 Twin-Turbo", topSpeed: "306", acceleration: "3.5", seats: "5", pricePerDay: 450, images: ["f1.png", "in1.png"] }, 
    "Range Rover Vogue": { category: "suvs", folderName: "Range Rover Vogue", model: "2025", hp: "523", engine: "V8 P530", topSpeed: "250", acceleration: "4.6", seats: "5", pricePerDay: 120, images: ["f1.png", "f2.png", "in1.png"] },
    "Audi Q8": { category: "suvs", folderName: "Audi Q8", model: "2025", hp: "335", engine: "V6 3.0T", topSpeed: "250", acceleration: "5.6", seats: "5", pricePerDay: 55, images: ["f1.png", "in1.png"] },
    "Bentley Bentayga V8": { category: "suvs", folderName: "Bentley Bentayga V8", model: "2026", hp: "542", engine: "V8 Twin-Turbo", topSpeed: "290", acceleration: "4.5", seats: "5", pricePerDay: 380, images: ["F1.png", "f2.png", "In1.png"] },
    "Range Rover Sport": { category: "suvs", folderName: "Range Rover Sport", model: "2025", hp: "395", engine: "Inline-6", topSpeed: "240", acceleration: "5.7", seats: "5", pricePerDay: 95, images: ["f1.png", "In1.png"] },
    "Lexus LX 600 VIP": { category: "suvs", folderName: "Lexus LX 600 VIP", model: "2026", hp: "409", engine: "V6 Twin-Turbo", topSpeed: "210", acceleration: "6.9", seats: "4", pricePerDay: 110, images: ["f1.png", "In1.png"] },

    // Luxury Sedans
    "Rolls-Royce Phantom": { category: "Luxury Sedans", folderName: "Rolls-Royce Phantom", model: "2026", hp: "563", engine: "V12 6.75L", topSpeed: "250", acceleration: "5.3", seats: "4", pricePerDay: 600, images: ["F1.png", "In1.png", "In2.png"] },
    "Audi A8": { category: "Luxury Sedans", folderName: "Audi A8", model: "2025", hp: "335", engine: "3.0L V6 Turbo", topSpeed: "250", acceleration: "5.6", seats: "5", pricePerDay: 140, images: ["F1.png", "F2.png", "In 1.png", "In 2.png", "In 3.png"] },
    "Bentley Mulsanne": { category: "Luxury Sedans", folderName: "Bentley Mulsanne", model: "2025", hp: "505", engine: "6.75L Twin-Turbo V8", topSpeed: "296", acceleration: "5.1", seats: "5", pricePerDay: 450, images: ["F1.png", "F2.png", "In1.png", "In2.png", "In3.png"] },
    "BMW M5": { category: "Luxury Sedans", folderName: "BMW M5", model: "2026", hp: "717", engine: "4.4L V8 Plug-in Hybrid", topSpeed: "305", acceleration: "3.5", seats: "5", pricePerDay: 250, images: ["F1.png", "F2.png", "In1.png", "In2.png", "In3.png"] },
    "Mercedes S63 AMG": { category: "Luxury Sedans", folderName: "Mercedes S63 AMG", model: "2026", hp: "791", engine: "4.0L V8 Biturbo Hybrid", topSpeed: "290", acceleration: "3.3", seats: "5", pricePerDay: 350, images: ["F1.png", "In1.png", "In2.png", "In3.png"] },
    "BMW 7 Series": { category: "Luxury Sedans", folderName: "BMW 7 Series", model: "2025", hp: "536", engine: "4.4L Twin-Turbo V8", topSpeed: "250", acceleration: "4.1", seats: "5", pricePerDay: 180, images: ["F1.png", "F2.png", "In1.png", "In2.png", "In3.png", "In4.png"] },

    // Exceptional Cars
    "Lamborghini Revuelto": { category: "exceptional", folderName: "Lamborghini Revuelto", model: "2026", hp: "1001", engine: "6.5L V12 Hybrid", topSpeed: "350", acceleration: "2.5", seats: "2", pricePerDay: 1200, images: ["F1.png", "In1.png"] },
    "Maserati MC20": { category: "exceptional", folderName: "Maserati MC20", model: "2025", hp: "621", engine: "3.0L V6 Nettuno", topSpeed: "325", acceleration: "2.9", seats: "2", pricePerDay: 700, images: ["F1.png", "F2.png", "In1.png"] },
    "McLaren 750S": { category: "exceptional", folderName: "McLaren 750S", model: "2026", hp: "740", engine: "4.0L V8 Twin-Turbo", topSpeed: "332", acceleration: "2.8", seats: "2", pricePerDay: 850, images: ["F1.png", "F2.png"] },
    "Bugatti Chiron": { category: "exceptional", folderName: "Bugatti Chiron", model: "2025", hp: "1500", engine: "8.0L W16 Quad-Turbo", topSpeed: "420", acceleration: "2.4", seats: "2", pricePerDay: 2500, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },
    "Porsche 911 GT3 RS": { category: "exceptional", folderName: "Porsche 911 GT3 RS", model: "2026", hp: "518", engine: "4.0L Flat-6", topSpeed: "296", acceleration: "3.2", seats: "2", pricePerDay: 900, images: ["F1.png", "In1.png", "In2.png", "In3.png"] },
    "Aston Martin Vanquish": { category: "exceptional", folderName: "Aston Martin Vanquish", model: "2026", hp: "824", engine: "5.2L Twin-Turbo V12", topSpeed: "345", acceleration: "3.3", seats: "2", pricePerDay: 1100, images: ["F1.png", "In1.png", "In2.png", "In3.png"] },

    // Convertibles
    "Bentley Continental GT": { category: "convertibles", folderName: "Bentley Continental GT", model: "2026", hp: "650", engine: "6.0L W12", topSpeed: "335", acceleration: "3.6", seats: "4", pricePerDay: 500, images: ["F1.png", "F2.png"] },
    "BMW M8": { category: "convertibles", folderName: "BMW M8", model: "2026", hp: "617", engine: "4.4L V8 Twin-Turbo", topSpeed: "305", acceleration: "3.1", seats: "4", pricePerDay: 280, images: ["F1.png"] },
    "Chevrolet Corvette C8": { category: "convertibles", folderName: "Chevrolet Corvette C8", model: "2025", hp: "495", engine: "6.2L V8", topSpeed: "312", acceleration: "2.9", seats: "2", pricePerDay: 220, images: ["F1.png"] },
    "Ferrari Portofino": { category: "convertibles", folderName: "Ferrari Portofino", model: "2025", hp: "612", engine: "3.9L Twin-Turbo V8", topSpeed: "320", acceleration: "3.45", seats: "4", pricePerDay: 750, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },
    "Mercedes-AMG SL 63": { category: "convertibles", folderName: "Mercedes-AMG SL 63", model: "2026", hp: "577", engine: "4.0L V8 Biturbo", topSpeed: "315", acceleration: "3.6", seats: "4", pricePerDay: 380, images: ["F1.png"] },
    "Rolls-Royce Phantom Coupe": { category: "convertibles", folderName: "Rolls-Royce Phantom Coupe", model: "2025", hp: "563", engine: "6.75L V12 Twin-Turbo", topSpeed: "250", acceleration: "5.3", seats: "4", pricePerDay: 850, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },

    // City Cars
    "Audi RS 5": { category: "citycars", folderName: "Audi RS 5", model: "2026", hp: "444", engine: "2.9L Twin-Turbo V6", topSpeed: "280", acceleration: "3.8", seats: "5", pricePerDay: 180, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },
    "BMW M2 CS": { category: "citycars", folderName: "BMW M2 CS", model: "2026", hp: "444", engine: "3.0L Twin-Turbo Inline-6", topSpeed: "280", acceleration: "3.8", seats: "4", pricePerDay: 190, images: ["F1.png", "F2.png", "In1.png", "In2.png", "In3.png", "In4.png", "In5.png"] },
    "BMW M3": { category: "citycars", folderName: "BMW M3", model: "2026", hp: "503", engine: "3.0L Twin-Turbo Inline-6", topSpeed: "290", acceleration: "3.4", seats: "5", pricePerDay: 220, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },
    "Genesis G70": { category: "citycars", folderName: "Genesis G70", model: "2025", hp: "365", engine: "3.3L Twin-Turbo V6", topSpeed: "270", acceleration: "4.5", seats: "5", pricePerDay: 120, images: ["F1.png", "F2.png", "In1.png", "In2.png"] },
    "Mercedes-AMG A45 S": { category: "citycars", folderName: "Mercedes-AMG A45 S", model: "2026", hp: "416", engine: "2.0L Turbo Inline-4", topSpeed: "270", acceleration: "3.9", seats: "5", pricePerDay: 160, images: ["F1.png", "In1.png"] },
    "Volkswagen Golf R": { category: "citycars", folderName: "Volkswagen Golf R", model: "2026", hp: "315", engine: "2.0L Turbo Inline-4", topSpeed: "250", acceleration: "4.7", seats: "5", pricePerDay: 110, images: ["F1.png", "In1.png", "In2.png", "In3.png", "In4.png"] },

    // Executive Minivans & Chauffeur
    "Hyundai Staria Lounge": { category: "minivans", folderName: "Hyundai Staria Lounge", model: "2026", hp: "268", engine: "3.5L V6 Lounge Edition", topSpeed: "210", acceleration: "8.9", seats: "7 VIP Seats", pricePerDay: 150, images: ["f1.png", "IN1.png", "In2.png"] },
    "Mercedes-Benz V-Class (Maybach Edition)": { category: "minivans", folderName: "Mercedes-Benz V-Class (Maybach Edition)", model: "2026", hp: "239", engine: "2.0L Turbo Chauffeur Spec", topSpeed: "220", acceleration: "7.8", seats: "6 Maybach Captain Seats", pricePerDay: 350, images: ["F1.png"] },
    "Mercedes-Benz VLE": { category: "minivans", folderName: "Mercedes-Benz VLE", model: "2026", hp: "204", engine: "Electric / Executive Spec", topSpeed: "180", acceleration: "8.5", seats: "7 VIP Seats", pricePerDay: 200, images: ["f1.png", "In1.png", "In2.png"] }
};

let currentCarKey = "";
let currentSlideIndex = 0;

// تحديث مسار الصورة ليقبل كلاً من السيارات واليخوت
function updateSliderImage() {
    const itemData = carDatabase[currentCarKey] || marineAirDatabase[currentCarKey];
    
    if (itemData && itemData.images && itemData.images.length > 0) {
        const fullPath = `images/${itemData.category}/${itemData.folderName}/${itemData.images[currentSlideIndex]}`;
        const imgElement = document.getElementById("drawerCarImage");
        if (imgElement) {
            imgElement.src = fullPath;
        }
    }
}

// فتح لوحة المعاينة للسيارات
function openDrawer(carName) {
    currentCarKey = carName;
    const carData = carDatabase[carName];
    if (!carData) return;

    currentSlideIndex = 0;

    document.getElementById("drawerCarName").innerText = carName;
    document.getElementById("specHp").innerText = `${carData.hp} HP`;
    document.getElementById("specEngine").innerText = carData.engine || "N/A";
    document.getElementById("specTopSpeed").innerText = `${carData.topSpeed || "--"} km/h`;
    document.getElementById("specAcceleration").innerText = `${carData.acceleration || "--"} s`;
    document.getElementById("specSeats").innerText = carData.seats;
    
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
    
    const timeInput = document.getElementById("pickupTime");
    if (timeInput) timeInput.value = "";

    document.getElementById("drawerTotalPrice").innerText = "0";

    updateSliderImage();

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.style.setProperty("display", "none", "important");

    document.getElementById("bookingDrawer").classList.add("active");
}

// إغلاق لوحة المعاينة وإعادة إظهار زر الثيم
function closeDrawer() {
    document.getElementById("bookingDrawer").classList.remove("active");

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.style.setProperty("display", "flex", "important"); 
    }
}

// التنقل بين الصور مع دعم قاعدة بيانات البحرية والجوية
function changeSlide(direction) {
    const itemData = carDatabase[currentCarKey] || marineAirDatabase[currentCarKey];
    if (!itemData || !itemData.images) return;

    currentSlideIndex += direction;
    if (currentSlideIndex >= itemData.images.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = itemData.images.length - 1;

    updateSliderImage();
}

// حساب السعر المباشر للسيارات واليخوت
function calculateLivePrice() {
    const startDateVal = document.getElementById("startDate").value;
    const endDateVal = document.getElementById("endDate").value;
    const priceDisplay = document.getElementById("drawerTotalPrice");
    const itemData = carDatabase[currentCarKey] || marineAirDatabase[currentCarKey];

    if (!startDateVal || !endDateVal || !itemData) {
        priceDisplay.innerText = "0";
        return;
    }

    const start = new Date(startDateVal);
    const end = new Date(endDateVal);
    
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (days > 0) {
        const totalPrice = days * itemData.pricePerDay;
        priceDisplay.innerText = totalPrice;
    } else {
        priceDisplay.innerText = "0";
    }
}

// تأكيد الطلب النهائي وحفظه في LocalStorage
function confirmFinalBooking() {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const timeInput = document.getElementById("pickupTime");
    const time = timeInput ? timeInput.value : "N/A";
    const total = document.getElementById("drawerTotalPrice").innerText;

    if (!start || !end || total === "0") {
        alert("Please select valid rent dates first!");
        return;
    }

    // تجهيز كائن الحجز
    const newBooking = {
        carName: currentCarKey,
        startDate: start,
        endDate: end,
        pickupTime: time,
        totalPrice: total,
        bookingDate: new Date().toLocaleDateString()
    };

    // حفظ الحجز في LocalStorage
    let userBookings = JSON.parse(localStorage.getItem("myBookings")) || [];
    userBookings.push(newBooking);
    localStorage.setItem("myBookings", JSON.stringify(userBookings));

    alert(`Success! Your booking for ${currentCarKey} at ${time} has been sent. Total: ${total} BHD.`);
    closeDrawer();
}

/*====================================================================
  4. قاعدة بيانات ودوال الخدمات البحرية والجوية (YACHTS & JETS)
====================================================================*/

const marineAirDatabase = {
    "Aquarius": {
        category: "Yacht",
        folderName: "Aquarius", 
        model: "Superyacht", 
        hp: "3150", 
        engine: "Caterpillar 3516C", 
        topSpeed: "15 knots", 
        acceleration: "N/A", 
        seats: "12 Guests", 
        pricePerDay: 3500,
        images: [
            "F1.png", "F2.png", "F3.png", "F4.png", "F5.png", "F6.png", "F7.png", "F8.png", "F9.png", "F10.png", "F11.png", "F12.png",
            "In (1).jpg", "In (2).jpg", "In (3).jpg", "In (4).jpg", "In (5).jpg", "In (6).jpg", "In (7).jpg", "In (8).jpg", "In (9).jpg", "In (10).jpg", "In (11).jpg", "In (12).jpg", "In (13).jpg", "In (14).jpg", "In (15).jpg", "In (16).jpg", "In (17).png"
        ]
    },
    "She's a 10 Too": {
        category: "Yacht",
        folderName: "She's a 10 Too", 
        model: "Mega Yacht", 
        hp: "7300", 
        engine: "MTU 16V 4000 M90", 
        topSpeed: "22 knots", 
        acceleration: "N/A", 
        seats: "12 Guests", 
        pricePerDay: 18000,
        images: [
            "F1.png", "F2.png", "F3.png", "F4.png", "F5.png", "F6.png", "F7.png", "F8.png", "F9.png", "F10.png",
            "In (1).jpg", "In (2).jpg", "In (3).jpg", "In (4).jpg", "In (5).jpg", "In (6).jpg", "In (7).jpg", "In (8).jpg", "In (9).jpg", "In (10).jpg", "In (11).jpg", "In (12).jpg", "In (13).jpg", "In (14).jpg", "In (15).jpg", "In (16).jpg", "In (17).jpg", "In (18).jpg"
        ]
    },
    "Coral Ocean": {
        category: "Yacht",
        folderName: "Coral Ocean", 
        model: "Iconic Superyacht", 
        hp: "3960", 
        engine: "Caterpillar 3516B", 
        topSpeed: "17 knots", 
        acceleration: "N/A", 
        seats: "12 Guests", 
        pricePerDay: 35000,
        images: [
            "F1.png", "F2.png", "F3.png", "F4.png", "F5.png", "F6.png", "F7.png", "F8.png", "F9.png", "F10.png", "F11.png", "F12.png", "F13.png", "F14.png", "F15.png", "F16.png",
            "In (1).jpg", "In (2).jpg", "In (3).jpg", "In (4).jpg", "In (5).jpg", "In (6).jpg", "In (7).jpg", "In (8).jpg", "In (9).jpg", "In (10).jpg", "In (11).jpg", "In (12).jpg", "In (13).jpg", "In (14).jpg", "In (15).jpg", "In (16).jpg", "In (17).jpg", "In (18).jpg", "In (19).jpg", "In (20).jpg", "In (21).jpg", "In (22).jpg", "In (23).jpg", "In (24).jpg", "In (25).jpg", "In (26).jpg"
        ]
    }
};

// دالة فتح لوحة المعاينة الخاصة باليخوت والطائرات فقط
function openMarineAirDrawer(itemName) {
    const marineAirData = marineAirDatabase[itemName];
    if (!marineAirData) {
        console.error("Item not found in marineAirDatabase:", itemName);
        return;
    }

    currentCarKey = itemName;
    currentSlideIndex = 0;

    // تعبئة البيانات والنصوص بأسلوب آمن
    const nameEl = document.getElementById("drawerCarName");
    if (nameEl) nameEl.innerText = itemName;

    const hpEl = document.getElementById("specHp");
    if (hpEl) hpEl.innerText = `${marineAirData.hp} HP`;

    const engineEl = document.getElementById("specEngine");
    if (engineEl) engineEl.innerText = marineAirData.engine || "N/A";

    const speedEl = document.getElementById("specTopSpeed");
    if (speedEl) speedEl.innerText = marineAirData.topSpeed || "--";

    const accelEl = document.getElementById("specAcceleration");
    if (accelEl) accelEl.innerText = marineAirData.acceleration || "--";

    const seatsEl = document.getElementById("specSeats");
    if (seatsEl) seatsEl.innerText = marineAirData.seats || "--";

    const startDateEl = document.getElementById("startDate");
    if (startDateEl) startDateEl.value = "";

    const endDateEl = document.getElementById("endDate");
    if (endDateEl) endDateEl.value = "";

    const timeEl = document.getElementById("pickupTime");
    if (timeEl) timeEl.value = "";

    const priceEl = document.getElementById("drawerTotalPrice");
    if (priceEl) priceEl.innerText = "0";


    // إخفاء زر الثيم وتفعيل اللوحة
    updateSliderImage();

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) themeBtn.style.setProperty("display", "none", "important");

    const drawerEl = document.getElementById("bookingDrawer");
    if (drawerEl) drawerEl.classList.add("active");
}

/*====================================================================
  5. التحقق من صحة النماذج (FORM VALIDATION)
====================================================================*/

// التحقق من نموذج التواصل
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === "") {
      alert("Please fill all fields");
      return;
    }

    if(!email.includes("@")) {
      alert("Please Enter Valid Email");
      return;
    }

    alert("Message Sent Successfully");
    form.reset();
  });
}

/*====================================================================
  6. نظام تسجيل الدخول والتحقق (AUTH & LOGIN SYSTEM)
====================================================================*/

// فتح النافذة المنبثقة للتسجيل
function openAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.add("active");
}

// إغلاق النافذة المنبثقة للتسجيل
function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("active");
}

// التبديل بين تبويب الدخول والتسجيل
function switchAuthTab(tab) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const tabLogin = document.getElementById("tabLogin");
  const tabRegister = document.getElementById("tabRegister");

  if (tab === 'login') {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
  } else {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
  }
}

// معالجة نموذج تسجيل الدخول
function handleLoginSubmit(e) {
  e.preventDefault();
  alert("Login triggered (View Ready!)");
  closeAuthModal();
  return false;
}

// معالجة نموذج إنشاء حساب
function handleRegisterSubmit(e) {
  e.preventDefault();
  alert("Register triggered (View Ready!)");
  closeAuthModal();
  return false;
}

/*====================================================================
  7. مظهر الموقع والوضع الليلي (THEME & LIGHT/DARK MODE)
====================================================================*/

// تحديث صورة أيقونة المظهر
function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    if (theme === "light") {
      icon.src = "images/icon/theme-icon.png";
    } 
    else {
      icon.src = "images/icon/theme-icon.png";
    }
  }
}

// ضبط الوضع المحفوظ عند بداية التشغيل
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  
  updateThemeIcon(savedTheme);
});

// زر تبديل الوضع (مضيء/مظلم)
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    
    let currentTheme = "dark";
    if (document.body.classList.contains('light')) {
      currentTheme = "light";
    }
    
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
  });
}

/*====================================================================
  8. تدوير الشرائح التلقائي (HERO AUTOMATIC SLIDER)
====================================================================*/

// تدوير الخلفيات الرئيسية تلقائياً
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let heroSlideIndex = 0;
    const intervalTime = 5000; 

    function nextSlide() {
      slides[currentSlideIndex].classList.remove("active");
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add("active");
    }

    setInterval(nextSlide, intervalTime);
  }
});

/*====================================================================
  9. ضبط الحد الأدنى للتواريخ (MINIMUM DATE RESTRICTION)
====================================================================*/

// تقييد التواريخ ليتم البدء من اليوم
window.addEventListener("DOMContentLoaded", () => {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");

    if (startDateInput && endDateInput) {
        const today = new Date().toISOString().split('T')[0];
        
        startDateInput.min = today;
        endDateInput.min = today;

        startDateInput.addEventListener("change", () => {
            endDateInput.min = startDateInput.value;
        });
    }
});