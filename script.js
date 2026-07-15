/* فتح القائمة الجانبية */
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  const btn = document.querySelector(".menu-btn");
  btn.style.opacity = "0";
  btn.style.pointerEvents = "none";
}

/* إغلاق القائمة الجانبية */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  const btn = document.querySelector(".menu-btn");
  btn.style.opacity = "1";
  btn.style.pointerEvents = "auto";
}

/* الانتقال بين أقسام السيارات */
function showCategory(category){

  switch(category){

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

/* فتح نافذة الحجز */
function bookCar(car){
  currentCar = car;
  document.getElementById("bookingModal").style.display = "flex";
  document.getElementById("selectedCar").innerText = car;
  calculatePrice();
}

/* حساب سعر الإيجار حسب المدة ومكان الاستلام */
function calculatePrice(){
  let period = document.getElementById("period").value;
  let location = document.getElementById("location").value;
  let price = 0;

  if(period === "hour") price = 50;
  if(period === "day") price = 150;
  if(period === "week") price = 900;
  if(period === "month") price = 3000;
  if(period === "year") price = 30000;

  if(location === "airport") price += 20;
  if(location === "hotel") price += 15;

  document.getElementById("price").innerText = price + " BHD";
  return price;
}

/* إرسال بيانات الحجز إلى واتساب */
function sendBooking(){
  let period = document.getElementById("period").value;
  let location = document.getElementById("location").value;
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

/* إغلاق نافذة الحجز */
function closeModal(){
  document.getElementById("bookingModal").style.display = "none";
}

/* التحقق من نموذج التواصل */
const form = document.getElementById("contactForm");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
      alert("Please fill all fields");
      return;
    }

    if(!email.includes("@")){
      alert("Please Enter Valid Email");
      return;
    }

    alert("Message Sent Successfully");
    form.reset();
  });
}

/* تسجيل الدخول */

function login(){

    const username =
        document.getElementById("user").value.trim();

    const password =
        document.getElementById("pass").value.trim();

    if(username === "" || password === ""){

        alert("Please Enter Username And Password");

        return;

    }

    alert("Login Successful");

    window.location.href = "index.html";

}

/*==============================
Dark / Light Mode
==============================*/

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// التحقق من الوضع المحفوظ مسبقاً عند تحميل الصفحة
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
} else {
    body.classList.remove('light');
}

// تبديل الوضع عند الضغط على الزر
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    
    if (body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

/*==============================
Load Saved Theme
==============================*/

window.onload=function(){

const savedTheme=localStorage.getItem("theme");

const icon=document.getElementById("themeIcon");

if(savedTheme==="light"){

document.body.classList.add("light");

if(icon){

icon.src="images/theme/sun.png";

}

}else{

if(icon){

icon.src="images/theme/moon.png";

}

}

}
