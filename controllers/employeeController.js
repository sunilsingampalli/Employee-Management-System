 var db = require('../src/db');
 const bcrypt = require('bcryptjs');
 const jsonwt = require('jsonwebtoken');
 const myKey = require('../myurl');


// To get all the employees data
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

            bcrypt.hash(password, 10,(err, hash) => {
                if (err) throw err;
                password = hash;
            })
            db.query('insert into employees(fname,lname,email,mobile,designation,username,password) values(?,?,?,?,?,?,?)', [fname,lname,email,mobile,designation,username,password], (err,employee) => {
                if(!err) {
                    db.query('select * from employees where email = ?', [email], (err,employee) => {
                        if(!err) {

                            const payload = {
                                id:employee[0].employeeId,
                                mobile:employee[0].mobile,
                                username:employee[0].username
                                
                            }
                            jsonwt.sign(payload, myKey.secret, {expiresIn:604800},
                                (err,token) => {
                                    if(err) throw err;
                                    return res.send({
                                        status:200,
                                        token:token,
                                        id:employee[0].employeeId,
                                        username:employee[0].username,
                                        mobile:employee[0],mobile,
                                        email:employee[0],email

                                    })
                                }
                                )
                        }
                        else{
                            res.send({
                                status:400,
                                message:err
                            })
                        }
                    })
                }
            })

        }
    })
}