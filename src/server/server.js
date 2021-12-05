require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getApis = require('./getApis');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

console.log(process.env.DB);

// Create travel data from 3 apis
app.post('/apis', async (req, res) => {
	try {
		const cityName = encodeURI(req.body.cityInput);
		const data = await getApis(cityName);
		// console.log(data);
		res.send(data);
	} catch (err) {
		console.error(err);
	}
});

const PORT = process.env.PORT || 1010;

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Travel app listening on port ${port}!`);
});

module.exports = app;