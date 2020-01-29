var express = require("express");
var app = express();
var otpGenerator = require("otp-generator")
var nodemailer=require("nodemailer")

app.get("/otp",function(req,res){
    let response = otpGenerator.generate(4,{upperCase:false,specialChars:false,alphabets:false})
    res.json({"massage":"your otp number","otp":response})
})

var transport = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user:"bulbul18@navgurukul.org",
        pass: "navgurukul"
    }
});
function sendMail(email,otp){
    var details = {
        from: "bulbul18@navgurukul.org",
        to:email,
        subject: "hffhfhfhhjfhjf",
        html:otp
    };
    transport.sendMail(details, function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    })
}
var email = "anjalis18@navgurukul.org";
var otp = "0123456789"
sendMail(email,otp)


// app.listen(4000, () => console.log('server is listening 4000....'));


