const express = require('express');
const app =express.Router();
const path = require('path');
const fs = require('fs-extra');


const employeeController = require('../controllers/employeeController');

app.get('/employees',employeeController.getAllEmployees);
app.post('/register',employeeController.RegisterEmployees);



exports.allroutes=app;