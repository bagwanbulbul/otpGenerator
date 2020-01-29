var express = require("express");
var app = express();
var otpGenerator = require("otp-generator")

app.get("/otp",function(req,res){
    let response = otpGenerator.generate(4,{upperCase:false,specialChars:false,alphabets:false})
    res.json({"massage":"your otp number","otp":response})
    // response.then((result)=>{
    //     res.send(result)
    // }).catch((err)=>{
    //     res.send(err)
    // })
})
app.listen(4000, () => console.log('server is listening 4000....'));


