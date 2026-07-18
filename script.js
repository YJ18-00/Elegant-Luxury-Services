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
  3. نظام الحجز والأسعار (BOOKING SYSTEM)
====================================================================*/

let currentCar = ""; // تعريف المتغير لحفظ السيارة المحددة حالياً

// فتح نافذة الحجز
function bookCar(car) {
  currentCar = car;
  const modal = document.getElementById("bookingModal");
  const selectedCarText = document.getElementById("selectedCar");
  
  if (modal) modal.style.display = "flex";
  if (selectedCarText) selectedCarText.innerText = car;
  
  calculatePrice();
}

// حساب سعر الإيجار حسب المدة ومكان الاستلام
function calculatePrice() {
  const periodEl = document.getElementById("period");
  const locationEl = document.getElementById("location");
  const priceEl = document.getElementById("price");
  
  if (!periodEl || !locationEl) return 0;

  let period = periodEl.value;
  let location = locationEl.value;
  let price = 0;

  // احتساب السعر الأساسي بناءً على المدة
  if(period === "hour") price = 50;
  if(period === "day") price = 150;
  if(period === "week") price = 900;
  if(period === "month") price = 3000;
  if(period === "year") price = 30000;

  // رسوم إضافية حسب مكان الاستلام
  if(location === "airport") price += 20;
  if(location === "hotel") price += 15;

  if (priceEl) {
    priceEl.innerText = price + " BHD";
  }
  return price;
}

// إرسال بيانات الحجز إلى واتساب
function sendBooking() {
  const periodEl = document.getElementById("period");
  const locationEl = document.getElementById("location");
  
  if (!periodEl || !locationEl) return;

  let period = periodEl.value;
  let location = locationEl.value;
  let price = calculatePrice();

  let message = 
`Elegant Cars Rental Booking

Car: ${currentCar}
Duration: ${period}
Pickup Location: ${location}
Price: ${price} BHD`;

  alert("Booking Successful");

  window.open(
    "https://wa.me/97332211146?text=" + encodeURIComponent(message),
    "_blank"
  );
}

// إغلاق نافذة الحجز
function closeModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.style.display = "none";
}


/*====================================================================
  4. التحقق من النماذج 
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


/*==================================================
5. تسجيل الدخول والتحقق من اسم المستخدم وكلمة المرور
==================================================*/

function handleLogin(event) {

  // منع الصفحة من التحديث التلقائي عند الضغط على الزر
  event.preventDefault();

  const userEl = document.getElementById("username");
  const passEl = document.getElementById("password");
  const msgEl = document.getElementById("msg");

  if (!userEl || !passEl) return false;

  const username = userEl.value.trim();
  const password = passEl.value.trim();

  // التحقق من أن الحقول ليست فارغة
  if (username === "" || password === "") {
    if (msgEl) {
      msgEl.style.color = "red";
      msgEl.innerText = "Please Enter Username And Password";
    } else {
      alert("Please Enter Username And Password");
    }
    return false;
  }

  // في حال النجاح: إظهار التنبيه ثم الانتقال لصفحة index.html
  alert("Login Successful");
  window.location.href = "index.html";
  return false;
}

/*==================================================
  تأثير الجزيئات المتساقطة
==================================================*/
function initLoginParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return; // إذا مش في صفحة الـ Login ما يشغل الكود ولا يسبب خطأ

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

    // توليد الجزيئات بانتظام
    setInterval(createParticle, 300);
}

// تشغيل الدالة تلقائياً عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initLoginParticles);

/*====================================================================
  6. مظهر الموقع والوضع الليلي
====================================================================*/

// دالة لتحديث أيقونة الوضع (شمس أو قمر)
function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    if (theme === "light") {
      icon.src = "images/icon/theme-icon.png"; // أيقونة الشمس للوضع الفاتح
    } else {
      icon.src = "images/icon/theme-icon.png";
    }
  }
}

// عند تشغيل الصفحة: ضبط وتطبيق المظهر المحفوظ
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; // الافتراضي هو المظلم
  
  if (savedTheme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  
  updateThemeIcon(savedTheme);
});

// تبديل الوضع عند الضغط على الزر
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
  7. تدوير الشرائح التلقائي 
====================================================================*/
window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let currentSlideIndex = 0;
    const intervalTime = 5000; // Time set to 5000ms (5 seconds)

    function nextSlide() {
      // Remove active state from current slide
      slides[currentSlideIndex].classList.remove("active");
      
      // Calculate next slide index (wrap-around using modulus)
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      
      // Apply active class to fade the new slide in
      slides[currentSlideIndex].classList.add("active");
    }

    // Initialize auto-rotation intervals
    setInterval(nextSlide, intervalTime);
  }
});