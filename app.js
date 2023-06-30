const nodemailer = require('nodemailer');                          //import the module
const path = require("path");

require('dotenv').config();                                        //set up the environment variables
SENDER_EMAIL = process.env.SENDER_EMAIL;                           //the email address of the sender
SENDER_PASSWORD = process.env.SENDER_PASSWORD;                     //the app password of the sender email address
RECEIVER_ADDRESS = process.env.RECEIVER_ADDRESS;                   //the email address of the receiver

const transporter = nodemailer.createTransport({                   //Creating a Transporter Object
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD
    }
});

const mailOptions = {                                              //Creating a MailOptions Object
    from: {
        name:"Nicemol Johns",
        address:SENDER_EMAIL
    },
    to: RECEIVER_ADDRESS, 
    subject: "Sending Email using Nodemailer",
    text: "This is a demonstration of sending email using nodemailer", 
    html: "<p>This is a demonstration of sending email using nodemailer</p> <br> <img src='cid:imagecreatedbyai'/>",
    attachments:[{
      filename:'image1.png',
      path: './assets/image1.png',
      cid: 'imagecreatedbyai' 
    }] 
  };

  const sendMail = async (transporter,mailOptions)=>{              //send email using sendMail()
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully")
    } catch (error) {
        console.log(error);
    }
  }
  sendMail(transporter,mailOptions);
