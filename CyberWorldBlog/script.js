console.log("SG Future Blog Loaded");

window.addEventListener("scroll",()=>{

  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,0.7)";
  }
  else{
    header.style.background = "rgba(255,255,255,0.05)";
  }

});

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

  card.addEventListener("mouseenter",()=>{
    card.style.boxShadow = "0 0 40px rgba(255,255,255,0.3)";
  });

  card.addEventListener("mouseleave",()=>{
    card.style.boxShadow = "none";
  });

});