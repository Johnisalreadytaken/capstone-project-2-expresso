const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const employeesRouter = require('./api/employees.js');
const menusRouter = require('./api/menus.js');

const PORT = process.env.PORT || 4000;
const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/employees', employeesRouter);
app.use('/api/menus', menusRouter);

app.listen(PORT, ()=> {
  console.log(`listeing on port. ${PORT}...`);
});

module.exports = app;
