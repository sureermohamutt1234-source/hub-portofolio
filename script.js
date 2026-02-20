// Typing Effect
const texts=["MERN Stack Developer","Frontend Specialist","Backend Engineer"];
let count=0,index=0,currentText="",letter="";
function type(){
  if(count===texts.length) count=0;
  currentText=texts[count];
  letter=currentText.slice(0,++index);
  document.querySelector(".typing").textContent=letter;
  if(letter.length===currentText.length){
    count++;
    index=0;
  }
  setTimeout(type,120);
}
type();

// Scroll Reveal & Header background
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(section=>{
    const top=section.getBoundingClientRect().top;
    if(top<window.innerHeight-100) section.classList.add("active");
  });
  const header=document.querySelector(".header");
  if(window.scrollY>50) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});