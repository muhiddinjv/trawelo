import { doc } from "prettier";

const slideShow = () => {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");

  let slideIndex = 1;
  showSlides(slideIndex);

  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => {
      showSlides((slideIndex = n + 1));
    });
  });

  function showSlides(n) {
    let i;
    // if (n > slides.length) {slideIndex = 1}
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) slides[i].style.display = "none";

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
};

const currentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;
  return today; // today = current year-month-date
};

const in1year = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear() + 1;

  today = `${yyyy}-${mm}-${dd}`;
  return today; // today = current year-month-date
};

// Number of Days Between Two Dates
const checkDayDiff = (date1, date2) => {
  // Get Argument's Time
  let date1Time = new Date(date1).getTime();
  let date2Time = new Date(date2).getTime();

  // Total Milliseconds in A Day
  const dayInMs = 24 * 60 * 60 * 1000;

  // Return Day Difference Between Two Dates
  return parseInt((date2Time - date1Time) / dayInMs);
};

const unixToLocalTime = (num) => {
  let unix_timestamp = num;

  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);

  // Hours part from the timestamp
  var hours = date.getHours();

  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();

  // Seconds part from the timestamp
  // var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  // var formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
  var formattedTime = `${hours}:${minutes.substr(-2)}`;

  return formattedTime;
};

const getMonthName = (dateSplit) => {
  dateSplit = dateSplit.split("-");
  let monthShortNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateSplit[0], dateSplit[1], dateSplit[2]);
  return `${
    months[date.getMonth() == 0 ? date.getMonth() + 11 : date.getMonth() - 1]
  } ${dateSplit[2]}, ${dateSplit[0]}`;
};

const scrollIntoView = (e) => {
  const travelCards = document.querySelectorAll(".travels__card");

  for (const card of travelCards) {
    if (e.target.id == card.attributes.id.value) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
};

const comingSoon = () => {
  let alertBtns = document.querySelectorAll(".alert");
  let inputSelect = document.querySelector(".form__inputs-select");
  alertBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("This feature is coming soon!");
    });
  });
  inputSelect.addEventListener("change", () => {
    alert("This feature is coming soon!");
  });
};

const removeElement = (e) => {
  try {
    e.path[3].remove();
  } catch (error) {
    console.log("Oops! " + error);
  }
};

export {
  in1year,
  currentDate,
  checkDayDiff,
  getMonthName,
  unixToLocalTime,
  scrollIntoView,
  removeElement,
  comingSoon,
};
