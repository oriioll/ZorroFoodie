document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("scrollDownBtn").addEventListener("click", function () {
    const vh = window.innerHeight / 100;
    const targetScroll = window.scrollY + 90 * vh; // 40vh más abajo
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  });
});




window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const vh = window.innerHeight / 100;
  const triggerOffset = 40 * vh; // 10vh

  if (window.scrollY > triggerOffset) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
