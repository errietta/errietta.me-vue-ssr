const app = require('../server');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at localhost:${port}`)
});
