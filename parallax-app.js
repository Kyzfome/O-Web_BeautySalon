const navElement = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;

  navElement.style.transform = `translateY(${scrollValue * -0.5}px)`;
});
