const buttons = document.querySelectorAll(".category-button");

document.addEventListener("DOMContentLoaded", function () {
  const clickedButtonIndex = localStorage.getItem("clickedButtonIndex");
  console.log(clickedButtonIndex);
  buttons[clickedButtonIndex].click();
  buttons[clickedButtonIndex].click();
});

document.addEventListener("DOMContentLoaded", function () {
  reservation();
});

const hairCutsData = [
  { name: "Стрижка жіноча + укладка", price: "1 000 ₴" },
  { name: "Стрижка чубчика", price: "300 ₴" },
  { name: "Зачіска", price: "800 ₴" },
  { name: "Плетіння", price: "500 ₴" },
  { name: "Афронакрутка", price: "700 ₴" },
  { name: "Укладка", price: "400 ₴" },
  { name: "Укладка люкс", price: "600 ₴" },
  { name: "Укладка нарощене волосся", price: "1000 ₴" },
  { name: "Укладка люкс нарощене волосся", price: "1500 ₴" },
  { name: "Нарощування волосся", price: "4000 ₴" },
  { name: "Зняття нарощеного волосся", price: "2000 ₴" },
  { name: "Нарощування 1 пучка", price: "100 ₴" },
];

const dyeingData = [
  { name: "Фарбування La Biosthetique + укладка", price: "1 600 ₴" },
  { name: "Безаміачне тонування Color&Gloss + укладка", price: "1 700 ₴" },
  { name: "Тонування + укладка", price: "1 500 ₴" },
  { name: "Кольорове фарбування + укладка", price: "1 700 ₴" },
  { name: "Освітлюючий крем", price: "1 500 ₴" },
  { name: "Освітлюючі масла La Biosthetique + укладка", price: "1 600 ₴" },
  { name: "Зняття кольору кислотне", price: "1 200 ₴" },
  { name: "Зняття кольору пудрою", price: "1 300 ₴" },
  { name: "Органічне зняття кольору", price: "1 400 ₴" },
  {
    name: "Підсилювач м'якого висвітлення Wanna Be Blond + плекс Bond Angel",
    price: "2 000 ₴",
  },
  { name: "Блонд миття", price: "700 ₴" },
  { name: "Мелірування 'Sun Lights'", price: "1 200 ₴" },
  { name: "Мелірування 'Каліфорнія'", price: "1 800 ₴" },
  { name: "Мелірування 'Балаяж'", price: "2 100 ₴" },
  { name: "Мелірування 'Шатуш'", price: "2 600 ₴" },
  { name: "Мелірування 'Вуаль'", price: "2 800 ₴" },
  { name: "Мелірування 'Airtouch'", price: "4 400 ₴" },
  {
    name: "Вихід із чорного (висвітлення + фарбування + захист) + укладка",
    price: "6 000 ₴",
  },
];

const parentElement = document.getElementById("booking-list");

hairCutsData.forEach((item, index) => {
  const listItem = document.createElement("div");
  if (index % 2 === 0) {
    listItem.classList.add("items-container", "gray");
  } else {
    listItem.classList.add("items-container", "white");
  }
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = item.name;
  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = item.price;

  listItem.appendChild(nameParagraph);
  listItem.appendChild(priceParagraph);

  parentElement.appendChild(listItem);
});

const hairHealthData = [
  {
    name: "Щастя для волосся Milbon Plarmia Deep Energement + укладка",
    price: "2 900 ₴",
  },
  {
    name: "Процедура м’якість і об’єм Milbon Plarmia Lifting Effect + укладка",
    price: "1 200 ₴",
  },
  { name: "Відновлення К18 (додатково)", price: "1 400 ₴" },
  { name: "Догляд К18 + укладка", price: "600 ₴" },
  {
    name: "Повне лікування волосся Lebel 'Абсолютне щастя' + укладка",
    price: "2 400 ₴",
  },
  { name: "Експрес-лікування волосся Lebel + укладка", price: "1 400 ₴" },
  {
    name: "Лікування волосся Lebel 'Щасливе фарбування' + укладка",
    price: "1 400 ₴",
  },
  {
    name: "Відновлююча процедура Lebel HITA ACTIVE PLEX TREATMENT",
    price: "2 400 ₴",
  },
  { name: "Детокс шкіри голови Lebel (додатково)", price: "800 ₴" },
  { name: "Детокс шкіри голови Lebel + укладка", price: "1 100 ₴" },
  { name: "Лікування волосся Inphenom + укладка", price: "1 700 ₴" },
  { name: "Процедура відновлення TOKIO INKARAMI + укладка", price: "2 900 ₴" },
  { name: "SPA-процедура Napla Imprime + укладка", price: "1 300 ₴" },
  { name: "SPA-процедура Milbon CRONNA + укладка", price: "1 000 ₴" },
  { name: "Лікування волосся AWG + укладка", price: "1 000 ₴" },
  { name: "Лікування волосся AWG + ампула + укладка", price: "2 000 ₴" },
  { name: "Лікування волосся AWG + 2 ампули + укладка", price: "2 300 ₴" },
  {
    name: "Лікування волосся PCC La Biosthetique + ампула + укладка",
    price: "1 000 ₴",
  },
  { name: "Лікування волосся PCC La Biosthetique + укладка", price: "900 ₴" },
  {
    name: "Експрес-догляд SPA Fluid Cheveux Longs La Biosthetique ампула (додатково)",
    price: "500 ₴",
  },
  { name: "Реконструкція волосся Brae Revival + укладка", price: "1 700 ₴" },
  { name: "Захист Brae Bond Angel (додатково)", price: "1 500 ₴" },
  { name: "Догляд Brae Bond Angel + укладка", price: "1 700 ₴" },
  { name: "Догляд Brae Power Dose + укладка", price: "1 600 ₴" },
  { name: "Віталамінування Dr. Sorbie + укладка", price: "1 800 ₴" },
  {
    name: "Віталамінування Dr. Sorbie + Therapy oil + укладка",
    price: "2 000 ₴",
  },
  { name: "Dr. Sorbie SPA + укладка", price: "1 400 ₴" },
  { name: "Dr. Sorbie SPA + маска + укладка", price: "1 600 ₴" },
  {
    name: "Dr. Sorbie захист без уповільнення освітлення (додатково)",
    price: "700 ₴",
  },
  {
    name: "Dr. Sorbie KERA-VITA 'Антибрейк протектор' + укладка",
    price: "800 ₴",
  },
  { name: "Догляд Oribe + укладка", price: "1 800 ₴" },
  { name: "Ритуал Balmain + укладка", price: "1 600 ₴" },
  { name: "Догляд KEVIN MURPHY + укладка", price: "1 700 ₴" },
  { name: "Очищення SCALP SPA KEVIN MURPHY (додатково)", price: "1 000 ₴" },
  { name: "Innovatis Hair + укладка", price: "2 400 ₴" },
  { name: "Кератин Brazilian Blowout + укладка", price: "5 500 ₴" },
  { name: "Біозавивка + укладка", price: "5 000 ₴" },
];

const manicureData = [
  { name: "Комплекс зняття + манікюр + покриття гель-лак", price: "1 000 ₴" },
  { name: "Манікюр класичний", price: "400 ₴" },
  { name: "Європейський манікюр", price: "300 ₴" },
  { name: "Японський манікюр", price: "700 ₴" },
  { name: "Лак", price: "200 ₴" },
  { name: "Гель-лак", price: "500 ₴" },
  { name: "Гель-лак дизайн", price: "600 ₴" },
  { name: "Гель-лак аерограф / френч", price: "700 ₴" },
  { name: "Зняття гель-лаку", price: "100 ₴" },
  { name: "Зняття звичайного лаку", price: "50 ₴" },
  { name: "IBX первинний", price: "350 ₴" },
  { name: "IBX повторний", price: "300 ₴" },
  { name: "Лікувальне покриття Baehr", price: "300 ₴" },
  { name: "Укріплення акриловою пудрою", price: "300 ₴" },
  { name: "Нарощування нігтів", price: "1 500 ₴" },
  { name: "Зняття нарощених нігтів", price: "300 ₴" },
  { name: "Корекція нарощених нігтів", price: "900 ₴" },
  { name: "Запил нарощених нігтів", price: "400 ₴" },
  { name: "Форма нігтів", price: "100 ₴" },
  { name: "Полірування нігтів", price: "100 ₴" },
  { name: "Нарощування 1 нігтя гелем", price: "100 ₴" },
  { name: "Нарощування 1 нігтя акриловою пудрою", price: "100 ₴" },
  { name: "SPA догляд свічка", price: "100 ₴" },
  { name: "SPA догляд скраб + маска", price: "300 ₴" },
  { name: "SPA NMP для рук", price: "200 ₴" },
];

const makeupData = [
  { name: "Догляд перед макіяжем", price: "300 ₴" },
  { name: "Light макіяж", price: "400 ₴" },
  { name: "Денний макіяж", price: "600 ₴" },
  { name: "Коктейльний макіяж", price: "800 ₴" },
  { name: "Вечірній макіяж", price: "1 000 ₴" },
  { name: "Макіяж для особливих випадків", price: "1 400 ₴" },
  { name: "Урок макіяжу для себе", price: "1 700 ₴" },
];

const skincareData = [
  { name: "Монодозний догляд Casmara 'Purifying'", price: "2 600 ₴" },
  { name: "Монодозний догляд Casmara 'Годжі'", price: "2 600 ₴" },
  { name: "Монодозний догляд Casmara 'Ocean Miracle'", price: "2 800 ₴" },
  { name: "Монодозний догляд Casmara 'RGnerin'", price: "2 900 ₴" },
  { name: "Комплексна чистка", price: "1 500 ₴" },
  { name: "Чистка для проблемної шкіри", price: "1 700 ₴" },
  { name: "Пілінг", price: "1 000 ₴" },
  { name: "Пілінг PRX-T33", price: "2 800 ₴" },
  { name: "Карбоксітерапія", price: "1 500 ₴" },
  { name: "Киснева мезотерапія", price: "2 000 ₴" },
  { name: "Догляд Hydropeptide", price: "1 600 ₴" },
  { name: "Маска альгінатна", price: "500 ₴" },
  {
    name: "Додатковий догляд для зони очей і кісетних зморшок",
    price: "400 ₴",
  },
  { name: "Освітлюючий пілінг для делікатних зон", price: "4 000 ₴" },
  { name: "Чистка спини", price: "2 000 ₴" },
];

const menServicesData = [
  { name: "Стрижка чоловіча", price: "700 ₴" },
  { name: "Стрижка машинкою", price: "400 ₴" },
  { name: "Борода та вуса", price: "300 ₴" },
  { name: "Укладка", price: "200 ₴" },
  { name: "Пілінг шкіри голови", price: "800 ₴" },
  { name: "Камуфлювання", price: "900 ₴" },
  { name: "Фарбування", price: "1 600 ₴" },
];

const servicesData = [
  { name: "Білий", price: "1 000 ₴" },
  { name: "Білий", price: "1 500 ₴" },
  { name: "Рожевий", price: "2 000 ₴" },
  { name: "Рожевий", price: "3 000 ₴" },
  { name: "Чорний", price: "5 000 ₴" },
  { name: "Чорний", price: "10 000 ₴" },
];

function displayList(data, title) {
  parentElement.innerHTML = "";

  const booking_text = document.createElement("div");
  booking_text.classList.add("booking-text");
  const booking_text_h3 = document.createElement("h3");
  booking_text_h3.textContent = title;
  booking_text.appendChild(booking_text_h3);
  parentElement.appendChild(booking_text);

  data.forEach((item) => {
    const listItem = document.createElement("div");

    listItem.classList.add("items-container");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = item.name;
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = item.price;

    listItem.appendChild(nameParagraph);
    listItem.appendChild(priceParagraph);

    parentElement.appendChild(listItem);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Стрижки укладки зачіски") {
      displayList(hairCutsData, button.textContent);
    } else if (button.textContent === "Усі види фарбувань") {
      displayList(dyeingData, button.textContent);
    } else if (button.textContent === "Догляд та лікування волосся") {
      displayList(hairHealthData, button.textContent);
    } else if (button.textContent === "Манікюр педикюр подологія") {
      displayList(manicureData, button.textContent);
    } else if (button.textContent === "Макіяж брови вії") {
      displayList(makeupData, button.textContent);
    } else if (button.textContent === "Косметологія Масаж Епіляція") {
      displayList(skincareData, button.textContent);
    } else if (button.textContent === "Усі послуги для чоловіків") {
      displayList(menServicesData, button.textContent);
      console.log(button.textContent);
    } else if (button.textContent === "Подарункові бокси та сертифікати") {
      displayList(servicesData, button.textContent);
      console.log(button.textContent);
    }
  });
});

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

  if (isLogin === "true") {
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
      "Ви увійшли до свогой облікового запису, тому при натисненні на кнопку нижче, ви будете зареєстровані автоматично за вашими персональними данними.";

    parentElement.appendChild(loginText);

    const button = document.querySelector("#reservation-button");

    button.addEventListener("click", () => {
      const name = localStorage.getItem("name");
      const phone = localStorage.getItem("phone");

      const massage = `Ваше бронювання: ${name}, ${phone}. Ваш час: ${
        reservationTimes[Math.floor(Math.random() * reservationTimes.length)]
      }`;
      alert(massage);
    });
  } else {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.querySelector("#name").value;
      const phone = document.querySelector("#phone").value;

      const massage = `Ваше бронювання: ${name}, ${phone}. Ваш час: ${
        reservationTimes[Math.floor(Math.random() * reservationTimes.length)]
      }`;
      alert(massage);
    });
  }
}
