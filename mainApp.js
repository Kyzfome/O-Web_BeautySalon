const service = document.querySelectorAll(".serv-container");

service.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
      console.log("clicked");
      console.log(localStorage.getItem("clickedButtonIndex"));
    } else if (index === 1) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
    } else if (index === 2) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
    } else if (index === 3) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
    } else if (index === 4) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
    } else if (index === 5) {
      window.location.href = "prices.html";
      localStorage.setItem("clickedButtonIndex", index);
    }
  });
});
