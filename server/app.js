const express = require('express');
const cors = require('cors');

const app = express();

const indexRouter = require('./routes/indexRouter');
const cartRouter = require('./routes/cartRouter');

app.use('/', indexRouter);
app.use('/shopping-cart', cartRouter);

app.use('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.listen(3000);
