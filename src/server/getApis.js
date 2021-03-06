require("dotenv").config();
const axios = require('axios');
const geoUrl = 'http://api.geonames.org/searchJSON?q';
const wbUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixUrl = 'https://pixabay.com/api/?';

const getApis = async (cityName) => {
  try {
    const geoData = await axios.get(`${geoUrl}=${cityName}&maxRows=1&username=${process.env.GEO_USER}`);

    const { name, countryName, lat, lng } = geoData.data.geonames[0];

    const [weatherData, pixData1, pixData2] = await Promise.all([
      axios.get(`${wbUrl}&lat=${lat}&lon=${lng}&days=7&key=${process.env.WB_KEY}`),
      axios.get(`${pixUrl}key=${process.env.PIX_KEY}&q=${name}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=7&pretty=true`),      
      axios.get(`${pixUrl}key=${process.env.PIX_KEY}&q=${countryName}&image_type=photo&orientation=horizontal&category=travel&order=popular&per_page=7&pretty=true`),
    ]);

    const pixHits = pixData1.data.totalHits > 0 ? pixData1.data.hits[0] : pixData2.data.hits[0];

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
