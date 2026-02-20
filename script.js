// ==================== Hamburger Menu Toggle ====================
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".header nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Change icon
  if(nav.classList.contains("active")){
    toggle.textContent = "✖";
  } else {
    toggle.textContent = "☰";
  }
});

// ==================== Typing Effect ====================
const texts = ["MERN Developer","Frontend Specialist","Backend Engineer"];
let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){
  if(count === texts.length) count = 0;
  current = texts[count];
  letter = current.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if(letter.length === current.length){
    count++;
    index = 0;
  }
  setTimeout(type, 120);
})();

// ==================== Scroll Reveal ====================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("active");
    }
  });
});

// ==================== Optional: Close menu on link click (mobile) ====================
document.querySelectorAll(".header nav a").forEach(link => {
  link.addEventListener("click", () => {
    if(nav.classList.contains("active")){
      nav.classList.remove("active");
      toggle.textContent = "☰";
    }
  });
});