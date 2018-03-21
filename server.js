const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;

const employeesRouter = require('./api/employees.js');
const menusRouter = require('./api/menus.js');

app.use(morgan('dev'));

app.use('/api/employees', employeesRouter);
app.use('/api/menus', menusRouter);

app.listen(PORT, ()=> {
  console.log(`listeing on port. ${PORT}...`);
});

module.exports = app;
