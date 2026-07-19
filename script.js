/*====================================================================
  1. القائمة الجانبية (SIDEBAR)
====================================================================*/

// فتح القائمة الجانبية
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  const btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  }
}

// إغلاق القائمة الجانبية
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  const btn = document.querySelector(".menu-btn");
  if (btn) {
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
  }
}


/*====================================================================
  2. التنقل وتصنيفات السيارات (NAVIGATION & CATEGORIES)
====================================================================*/

// الانتقال بين أقسام السيارات
function showCategory(category) {
  switch(category) {
    case "Exceptional Cars":
      window.location.href = "exceptional.html";
      break;
    case "Luxury Sedans":
      window.location.href = "sedans.html";
      break;
    case "Convertibles":
      window.location.href = "convertibles.html";
      break;
    case "SUVs":
      window.location.href = "suvs.html";
      break;
    case "Minivans":
      window.location.href = "minivans.html";
      break;
    case "City Cars":
      window.location.href = "citycars.html";
      break;
    default:
      alert("Page Not Found");
  }
}

/*====================================================================
  3. نظام الحجز والأسعار المطور (BOOKING SYSTEM & DRAWER)
====================================================================*/

// قاعدة البيانات المحدثة لمطابقة اسم المجلد الفعلي على الجهاز
const carDatabase = {
    "Lamborghini Urus": {
        folderName: "Lamborghini Urus", 
        model: "2026", hp: "666", engine: "V8 Twin-Turbo", topSpeed: "306", acceleration: "3.5", seats: "5", pricePerDay: 450,
        images: ["f1.png", "in1.png"]
    }, 
    "Range Rover Vogue": {
        folderName: "Range Rover Vogue", 
        model: "2025", hp: "523", engine: "V8 P530", topSpeed: "250", acceleration: "4.6", seats: "5", pricePerDay: 120,
        images: ["f1.png", "f2.png", "in1.png",]
    },
    "Audi Q8": {
        folderName: "Audi Q8", 
        model: "2025", hp: "335", engine: "V6 3.0T", topSpeed: "250", acceleration: "5.6", seats: "5", pricePerDay: 55,
        images: ["f1.png", "in1.png"]
    },
    "Bentley Bentayga V8": {
        folderName: "Bentley Bentayga V8",
        model: "2026", hp: "542", engine: "V8 Twin-Turbo", topSpeed: "290", acceleration: "4.5", seats: "5", pricePerDay: 380,
        images: ["F1.png", "f2.png", "In1.png"]
    },
    "Range Rover Sport": {
        folderName: "Range Rover Sport",
        model: "2025", hp: "395", engine: "Inline-6", topSpeed: "240", acceleration: "5.7", seats: "5", pricePerDay: 95,
        images: ["f1.png", "In1.png"]
    },
    "Lexus LX 600 VIP": {
        folderName: "Lexus LX 600 VIP",
        model: "2026", hp: "409", engine: "V6 Twin-Turbo", topSpeed: "210", acceleration: "6.9", seats: "4", pricePerDay: 110,
        images: ["f1.png", "In1.png"]
    }
};

let currentCarKey = "";
let currentSlideIndex = 0;

// دالة فتح لوحة المعاينة (Drawer) وتعبئة البيانات وإخفاء زر الثيم
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
    document.getElementById("drawerTotalPrice").innerText = "0";

    updateSliderImage();

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.style.setProperty("display", "none", "important");
    }

    document.getElementById("bookingDrawer").classList.add("active");
}

// دالة إغلاق لوحة المعاينة (Drawer) وإعادة إظهار زر الثيم
function closeDrawer() {
    document.getElementById("bookingDrawer").classList.remove("active");

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        themeBtn.style.setProperty("display", "flex", "important"); 
    }
}

// دالة تحديث مسار صورة السيارة داخل لوحة المعاينة
function updateSliderImage() {
    const carData = carDatabase[currentCarKey];
    if (carData && carData.images && carData.images.length > 0) {
        document.getElementById("drawerCarImage").src = "images/suvs/" + carData.folderName + "/" + carData.images[currentSlideIndex];
    }
}

// التحكم في التنقل بالأسهم للصور
function changeSlide(direction) {
    const carData = carDatabase[currentCarKey];
    if (!carData) return;
    currentSlideIndex += direction;
    if (currentSlideIndex >= carData.images.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = carData.images.length - 1;
    updateSliderImage();
}

// دالة حساب السعر الإجمالي بناءً على التواريخ المختارة
function calculateLivePrice() {
    const startDateVal = document.getElementById("startDate").value;
    const endDateVal = document.getElementById("endDate").value;
    const priceDisplay = document.getElementById("drawerTotalPrice");
    const carData = carDatabase[currentCarKey];

    if (!startDateVal || !endDateVal || !carData) {
        priceDisplay.innerText = "0";
        return;
    }

    const start = new Date(startDateVal);
    const end = new Date(endDateVal);
    
    const timeDiff = end.getTime() - start.getTime();
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (days > 0) {
        const totalPrice = days * carData.pricePerDay;
        priceDisplay.innerText = totalPrice;
    } else {
        priceDisplay.innerText = "0";
    }
}

// دالة تأكيد الحجز النهائي وإرسال الطلب
function confirmFinalBooking() {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
    const total = document.getElementById("drawerTotalPrice").innerText;

    if (!start || !end || total === "0") {
        alert("Please select valid rent dates first!");
        return;
    }
    alert(`Success! Your booking for ${currentCarKey} has been sent. Total: ${total} BHD.`);
    closeDrawer();
}

/*====================================================================
  4. التحقق من صحة النماذج (FORM VALIDATION)
====================================================================*/

// التحقق من نموذج التواصل (Contact Form)
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
  5. نظام تسجيل الدخول والتحقق (LOGIN SYSTEM)
====================================================================*/

// التحقق من اسم المستخدم وكلمة المرور عند تسجيل الدخول
function handleLogin(event) {
  event.preventDefault();

  const userEl = document.getElementById("username");
  const passEl = document.getElementById("password");
  const msgEl = document.getElementById("msg");

  if (!userEl || !passEl) return false;

  const username = userEl.value.trim();
  const password = passEl.value.trim();

  if (username === "" || password === "") {
    if (msgEl) {
      msgEl.style.color = "red";
      msgEl.innerText = "Please Enter Username And Password";
    } else {
      alert("Please Enter Username And Password");
    }
    return false;
  }

  alert("Login Successful");
  window.location.href = "index.html";
  return false;
}

// نظام تأثير الجزيئات المتساقطة في خلفية صفحة تسجيل الدخول
function initLoginParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 5 + 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    setInterval(createParticle, 300);
}

document.addEventListener('DOMContentLoaded', initLoginParticles);

/*====================================================================
  6. مظهر الموقع والوضع الليلي (THEME & LIGHT/DARK MODE)
====================================================================*/

// دالة لتحديث أيقونة الوضع (شمس أو قمر)
function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    if (theme === "light") {
      icon.src = "images/icon/theme-icon.png";
    } else {
      icon.src = "images/icon/theme-icon.png";
    }
  }
}

// ضبط المظهر الافتراضي المحفوظ عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  
  updateThemeIcon(savedTheme);
});

// تبديل الوضع (مضيء/مظلم) عند الضغط على زر التغيير
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
  7. تدوير الشرائح التلقائي (HERO AUTOMATIC SLIDER)
====================================================================*/
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let currentSlideIndex = 0;
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
  8. ضبط الحد الأدنى للتواريخ (MINIMUM DATE RESTRICTION)
====================================================================*/
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