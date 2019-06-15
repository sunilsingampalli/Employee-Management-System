 var db = require('../src/db');
 const bcrypt = require('bcryptjs');
 const jsonwt = require('jsonwebtoken');
 const myKey = require('../myurl');



 exports.getAllEmployees = (req, res) => {
         db.query('select * from employees', (err, data) => {
             if (!err) {
                 res.send({
                     status: 200,
                     data: data
                 })
             } else {
                 console.log(err)
             }
         })
        }
         exports.RegisterEmployees = (req, res) => {

             let email = req.body.email;


             db.query('select * from employees where email = ?', [email], (err, data) => {
                 if (data.length !== 0) {
                     res.send({
                         status: 400,
                         message: "email already registered"
                     })
                 } else {
                     let fname = req.body.fname;
                     let lname = req.body.lname;
                     let mobile = req.body.mobile;
                     let designation = req.body.designation;
                     let username = req.body.username;
                     let password = req.body.password;

                     bcrypt.hash(password, 10(err, hash) => {
                         if (err) throw err;
                         password = hash;
                     })
                     console.log(err)
                     db.query('insert into employees(fname,lname,email,mobile,designamtion,username,password) value(?,?,?,?,?,?,?)')

                 }
             })
         }