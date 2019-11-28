const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

sendmail = async (name, message, email, cb) => {
    try {
        const data = {user: process.env.email, pass: process.env.pass};
        console.log('data from .env file, ', data);
        let transporter = nodemailer.createTransport({
             host: "smtp.gmail.com",
             port: 465,
            //service: 'gmail',
            secure: true, // true for 465, false for other ports
            auth: data
        });

        let info = await transporter.sendMail({
            from: email, // sender address
            to: process.env.email, // list of receivers
            subject: `Please email ${name}`, // Subject line
            text: `Please email ${name} at ${email}. \n ${message}` // plain text body
        });

        if (info) {
            cb(null, info);
        }else {
            cb(true, null);
        }


    }
    catch(e) {
        if (e) {
            cb(true, null);
            console.log(e);
        }
    }
};

router.post('/densliame', (req, res) => {
    if (req.body){
         console.log("API being");
       const {name, email, message} = req.body;
       sendmail(name, message, email, (err, res_) => {
           if(err){
               res.status(501).json({error: true, message: 'There was an error.'});
           }else{
               res.json({sucess: true, message:'Message sent successfullu', info: res_.info});
           }

       })

    }
});

module.exports = router;