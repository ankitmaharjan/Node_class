const httpStatus = require("http-status");

((calculateHelper) => {

    calculateHelper.sum= function(a,b){
        setTimeout(()=>{
            console.log("yo");
            
        },5000);
        return parseInt(a)+parseInt(b)
    }
    calculateHelper.dif = function(a,b){
        return a-b
    }
    calculateHelper.login = async(request) =>{
        const isValid= await calculateHelper.loginValidate(request);
        if(!isValid){
            return{ 
                status: httpStatus.BAD_GATEWAY, message:"Username is required!"
            }
        }

        if(request.username=="ankit"){
            
            console.log(request);
            console.log(request.username);
            return request.username;
            // console.log("success");
            // console.log("success");
        }
        // return isValid
        
    }
    calculateHelper.loginValidate= async(request) =>{
        
        if(request.username=="ankit"){
            return true
        }
        return false
    }
})(module.exports)