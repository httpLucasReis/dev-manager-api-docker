const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

// Setting acess-control-expose-headers
const corsOptions = {
  origin: ["*"],
  credentials: true,
  exposedHeaders: ['X-Total-Count', 'Content-Length']
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

// notFound
app.use((req, res, next) => {
  const error = new Error;
  error.status = 404;
  error.message = 'Not Found';
  next(error);
})

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message })
})

app.listen(process.env.PORT || 3333, ()=> {
  console.log('Server is running');
});