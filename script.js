AOS.init({ duration: 1000, once: true, offset: 50 });

if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
  });
}

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var id = this.getAttribute("href");
    if (!id || id === "#") return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
