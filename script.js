const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const modal = document.getElementById("contactModal");

function openModal(){
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}

window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none";
  }
};

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
