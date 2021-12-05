require("dotenv").config();
const axios = require('axios');
const GEO_URL = 'http://api.geonames.org/searchJSON?q';
const WB_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const PIX_URL = 'https://pixabay.com/api/?';
const { GEO_USER, WB_KEY, PIX_KEY } = process.env;

const getApis = async (cityName) => {
  try {
    const geoData = await axios.get(`${GEO_URL}=${cityName}&maxRows=1&username=${GEO_USER}`);

    const { name, countryName, lat, lng } = geoData.data.geonames[0];

    const [weatherData, pixData1, pixData2] = await Promise.all([
      axios.get(`${WB_URL}&lat=${lat}&lon=${lng}&days=7&key=${WB_KEY}`),
      axios.get(`${PIX_URL}key=${PIX_KEY}&q=${name}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=7&pretty=true`),      
      axios.get(`${PIX_URL}key=${PIX_KEY}&q=${countryName}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=7&pretty=true`),
    ]);

    const pixHits =
      pixData1.data.totalHits > 0
        ? pixData1.data.hits[0]
        : pixData2.data.hits[0];

    const dest = name === countryName ? countryName : `${name}, ${countryName}`;

    const allApis = {
      travelTo: dest,
      weather: weatherData.data.data,
      pic: pixHits,
    };
    
    return allApis;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getApis;
