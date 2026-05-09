const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

}

function revealSections(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){
      el.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();
