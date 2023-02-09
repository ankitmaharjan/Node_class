const httpStatus = require("http-status");

((namepassword)=>{
    namepassword.sum=function(a,b){
        setTimeout(()=>{
            console.log("hey");
        },5000);
        //return a+b;
        
    }
   namepassword.login=async(request)=>{
        const isvalid=await namepassword.loginValidation(request);

        if(isvalid){
            console.log("right login");
        }
        else{
            console.log("not right login");
        }
    }
    namepassword.loginValidation=(request)=>{
    if (request.username=='kapil' && request.password == 'kapil123'){
            return true;
        }
        return false;
    }
})(module.exports)