const logButton = document.getElementById("login");
const form = document.querySelector(".reservation-form");

logButton.addEventListener("click", () => {
  if (logButton.textContent === "Увійти") {
    document.getElementById("modal").classList.add("open");
  } else if (logButton.textContent === "Вийти") {
    localStorage.setItem("isLogin", "false");
    logButton.textContent = "Увійти";
  }
});

document
  .querySelector("#modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithinModal = true;
  });

document.getElementById("modal").addEventListener("click", (event) => {
  if (!event._isClickWithinModal) {
    document.getElementById("modal").classList.remove("open");
  }
  event._isClickWithinModal = false;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  localStorage.setItem("name", name);
  localStorage.setItem("phone", phone);
  localStorage.setItem("isLogin", "true");
  console.log(localStorage.getItem("isLogin"));

  const message = "Ви увійшли за логіном: " + name + " та номером: " + phone;

  alert(message);

  document.getElementById("modal").classList.remove("open");

  logButton.textContent = "Вийти";
});
