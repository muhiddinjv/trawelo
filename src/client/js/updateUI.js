import { checkDayDiff, currentDate, getMonthName, unixToLocalTime, comingSoon, scrollIntoView, removeElement} from "./helpers";

const updateUI = (api, e) => { 
  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#end").value;
  
  // Variables for day difference
  let countdown = checkDayDiff(currentDate(), startDate);
  let travelDays = checkDayDiff(startDate, endDate);
  
  try {
    const travelResults = document.querySelector(".travels__results");
    const fragment = document.createDocumentFragment();
    const travelCard = document.createElement("li");
    travelCard.setAttribute("class", "travels__list");
    // travelCard.setAttribute("data-num", `${travelResults.children.length}`);
    // travelCard.setAttribute("id", `card${travelResults.children.length}`);
    // travelCard.setAttribute("id", `${(new Date()).getTime()}`); //timestamp for id

    travelCard.innerHTML = `
      <div class="travels__card" id="submit">
        <img class="travels__image" src="${api.pic.webformatURL}" alt="${api.pic.alt}">
        <div class="travels__content">
          <div class="travels__header">
            <h3 class="travels__title">${api.travelTo}</h3>
            <p class="travels__dates">
              Your trip is in ${countdown} ${countdown > 1 ? 'days' : 'day'} & will last ${travelDays} days
            </p>
          </div>
          <ul class="travels__weather">
            ${api.weather.map(w=>getWeather(w)).join('')}
          </ul>
        </div>
        <div class="travels__edit">
          <button class="btn alert travels__todo">&#128221;</button>
          <button class="btn alert travels__past">Past</button>
          <button class="btn alert travels__future">Future</button>
          <button class="btn travels__delete">&#10006</button>
        </div>
      </div>
    `;

    fragment.appendChild(travelCard);
    travelResults.appendChild(fragment);
    comingSoon();
    scrollIntoView(e);
    let delBtns = document.querySelectorAll('.travels__delete');
    delBtns.forEach((btn)=>{
      btn.addEventListener('click', removeElement)
    })
  } catch (error) {
    console.log("error", error);
  }
};

const getWeather = (w) => {
   return `
    <li class="travels__weather-card">
      <h4 class="travels__weather-date">
        Forecast for ${getMonthName(w.valid_date)}
      </h4>
      <div class="travels__weather-content">
        <fieldset class="travels__weather-temp">
          <legend>Temp</legend>
          <div class="travels__weather-tempmeta">
            <div class="high">
              &#128200; <span class="big-font">${Math.round(w.high_temp)}°C</span>
            </div>
            <div class="low">
              &#128201; <span class="big-font">${Math.round(w.low_temp)}°C</span>
            </div>
          </div>
        </fieldset>
        <div class="travels__weather-icon">
          <img src="src/client/pics/${w.weather.icon}.png" alt="${w.weather.description}"/>
        </div>
        <fieldset class="travels__weather-sun">
          <legend>Sun</legend>
          <div class="travels__weather-sunmeta">
            <div class="rise">
              &#128316; <span class="big-font">${unixToLocalTime(w.sunrise_ts)}</span>
            </div>
            <div class="set">
              &#128317; <span class="big-font">${unixToLocalTime(w.sunset_ts)}</span>
            </div>
          </div>
        </fieldset>
      </div>

      <p class="travels__weather-desc">${w.weather.description}</p>

      <div class="travels__weather-chance">
        <span>Chance of</span> 
        <span class="rain">&#127783;</span> 
        <span class="big-font">${Math.round(w.pop)}%</span> 
        <span class="snow">&#127784;</span> 
        <span class="big-font">${Math.round(w.snow)}%</span> 
      </div>
    </li>
    `;
};

export { updateUI };
