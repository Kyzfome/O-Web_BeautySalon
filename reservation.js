const form = document.querySelector(".reservation-form");

const reservationTimes = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
];

function reservation() {
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin === "truee") {
    const parentElement = document.querySelector(".reservation-form");
    const formName = document.querySelector("#name");
    const formPhone = document.querySelector("#phone");
    const labelForm = document.querySelector(".form-label");
    const labelForm1 = document.querySelector(".form-label1");
    labelForm1.style.display = "none";
    labelForm.style.display = "none";
    formName.style.display = "none";
    formPhone.style.display = "none";

    const loginText = document.createElement("p");
    loginText.textContent =
      "Ви увійшли до свого облікового запису, тому при натисненні на кнопку нижче, ви будете зареєстровані автоматично за вашими персональними даними.";

    parentElement.appendChild(loginText);

    const button = document.querySelector("#reservation-button");

    button.addEventListener("click", async () => {
      const name = localStorage.getItem("name");
      const phone = localStorage.getItem("phone");

      const selectedTime =
        reservationTimes[Math.floor(Math.random() * reservationTimes.length)];

      const data = { name, phone, time: selectedTime };

      try {
        const response = await fetch("http://localhost:3000/api/reservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        emailjs.send("service_shygf0r", "template_bexvgfa", data);

        alert(
          "Ви успішно зареєструвались! Детальна інформація прийде вам на пошту."
        );
      } catch (error) {
        console.error("Error:", error);
        alert("Error making reservation");
      }
    });
  } else {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const phone = document.querySelector("#phone").value;
      const email = document.querySelector("#email").value;

      const selectedTime =
        reservationTimes[Math.floor(Math.random() * reservationTimes.length)];

      const data = { name, phone, email, time: selectedTime };

      try {
        const response = await fetch("http://localhost:3000/api/reservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        alert(
          "Ви успішно зареєструвались! Детальна інформація прийде вам на пошту."
        );
      } catch (error) {
        console.error("Error:", error);
        alert("Error making reservation");
      }

      emailjs.send("service_shygf0r", "template_bexvgfa", data);
    });
  }
}
