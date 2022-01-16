const express = require('express');
const cors = require('cors');

const app = express();

const indexRouter = require('./routes/indexRouter');

app.use('/', indexRouter);

app.listen(3000);
