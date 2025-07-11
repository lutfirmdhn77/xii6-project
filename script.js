setInterval(() => {
  const el = document.querySelectorAll("*")[Math.floor(Math.random() * document.querySelectorAll("*").length)];
  el.style.boxShadow = "0 0 10px #0ff";
  setTimeout(() => {
    el.style.boxShadow = "";
  }, 400);
}, 1000);



const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

document.querySelectorAll("img").forEach(img => {
  img.style.transition = "filter 0.3s ease";
  img.addEventListener("mouseover", () => {
    img.style.filter = "grayscale(100%)";
  });
  img.addEventListener("mouseout", () => {
    img.style.filter = "grayscale(0%)";
  });
});