// Dark Mode Toggle
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Animate skill bars on scroll
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".bar span");

  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

  if (window.scrollY > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});