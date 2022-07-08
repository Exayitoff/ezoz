let box2 = document.querySelector("#boxikki");
let strelka1 = document.querySelector(".strelka1");
let strelka2 = document.querySelector("#strelka2")
let strelkabox = document.querySelector(".strelka1")
let strelkabox2 = document.querySelector(".strelka2")


console.log(strelka2);

strelka1.addEventListener("click", aylana);
function aylana(){
  box2.style.transform  = "rotate(-360deg)"
  strelkabox.style.transform = " translateX(190px) translateY(190px)"
}

// box2.style.transform =  "rotate(90deg)"
strelkabox2.addEventListener("click", aylana2);
function aylana2(){
// transform: translateY(-230px) translateX(-230px) rotate(180deg);
box2.style.transform  = "translateY(-240px) translateX(-240px) rotate(180deg)";
strelkabox.style.transform = " translateX(140px) translateY(140px)"
}