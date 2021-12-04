# FEND Capstone Travel App

## Project Description
This travel app, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

The project includes a simple form where you can enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. It uses Weatherbit API which only takes in coordinates for weather data and those coordinates are retrieved from the Geonames API. Once, all of this data is colleted, its displayed in the User Interface along with an image of the location entered; for this, the Pixabay API is used.

## Project Features
1) if input value is invalid, a helpful error message is displayed
2) if its valid, an API call is done and the result is displayed in UI
3) it works offline with the help of service-worker set up in webpack
4) it uses the "dotenv" environment variable to hide private API keys
5) it has unit-testing done in "Jest" to test the behavior of functions
6) it has separate development and production configurations for Webpack
7) it has the developer environment set up with the Webpack dev server
8) it minifies javascript and style files in the production environment
 

## Technologies and Languages Used
- Backend-Server:
  - ExpressJS(NodeJS)
  - Async/Await
- UI (Front-end):
  - Vanilla Javascript
  - Sass
  - HTML
- Tools:
  - Webpack
  - Axios
  - Git version Control System
  - Github
  - Github Pages, Live <a href="https://mukhiddinaka.web.app">Here</a>
- Testing:
  - Jest

## How to Start
| Command | Action |
| :------------: | :-----------: |
| 1) `npm install` | install dependencies |
| 2) `npm i -D postcss` | install postcss |
| 3) `npm run prod` | Build project |
| 4) `npm start` | Run project |
| 5) `npm run dev` | Run DevServer |


## Configs Files
- Webpack
  - Dev Configs: `webpack.config.dev.js`
    - not optimized build
    - source map
  - Production `webpack.config.prod.js`
    - optimized build
    - auto generated HTML from template
- Dependency
  - `package.json`

## Testing
Testing is done with Jest. To run test, use the command `npm test`. To see a full coverage of all the tests, add { "test": "jest --coverage", } to package.json and run `npm test` to run test and generate a new folder called "coverage". Then, run "Open with Live Server" on index.html in "coverage > Icov-report" in VScode.


# Project Requirements

## Minimum project must:

- [x] 1) input a desired trip location & (departure) date from the user

- [x] 2) output weather & image of the location using info obtained from external APIs
  
- [x] 3) Have a countdown to see how soon the trip is & store the data

- [x] 4) Be set up with Webpack, Express, Node, and Sass, & Service Workers

- [x] 5) Have separate dev and prod configurations for Webpack

- [x] 6) Have the developer environment set up with the Webpack dev server

- [x] 7) Make request to at least 3 external APIs: [Weatherbit](https://www.weatherbit.io/), [Pixabay](https://pixabay.com/api/docs/#), [GeoNames API](http://www.geonames.org/)

- [x] 8) Minify js and Sass styles in the production environment

- [x] 9) Response from the API must be added to the view for a user to see 

- [x] 10) Be able to show content offline

---

## Extended project must:

- [x] 1) Add end date and display length of trip

- [x] 2) Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities)

- [ ] 3) Integrate the [REST Countries API](https://restcountries.com/) to pull in data for the country being visited 

- [ ] 4) Use [Local Storage](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) to save the data so that when they close, then revisit the page, their info is still there

- [x] 5) Instead of just pulling a single day forecast, pull the forecast for multiple days

- [x] 6) Incorporate icons into forecast

---

- [ ] 7) Allow user to Print their trip and/or export to PDF

- [x] 8) Allow user to add multiple destinations on the same trip

  - [x] Pull in weather for additional locations

- [x] 9) Allow user to remove the trip

- [ ] 10) Allow user to add hotel and/or flight data

- [ ] 11) Allow user to add a todo list and/or packing list for their trip.

- [ ] 12) Allow user to add additional trips (this may take some heavy reworking, but is worth the challenge)

  - [ ] Automatically sort additional trips by countdown

  - [ ] Move expired trips to bottom/have their style change so it’s clear it’s expired

- [ ] 13) Check past years: get weather on the current day for the past 3 years

- [ ] 14) Host the dynamic web app on heroku