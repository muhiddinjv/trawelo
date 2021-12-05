const app = require('./index');
const port = process.env.PORT || 1010;

// designates what port the app will listen to for incoming requests
app.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log(`Travel app listening on port ${port}!`);
});