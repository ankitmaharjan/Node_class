const httpStatus = require("http-status");
//const { request } = require("express")

//calculationHelper lai export gareko
((calculationHelper)=>{
   /*
    calculationHelper.sum = function(a,b){
        return (a+b)
    }
    */
   //call back function
   calculationHelper.sum = (a,b)=>{ // assign the function in variable
    setTimeout(()=>{
        console.log("hello");
    },2000);
   }
   // calculationHelper.login = function(a,b){
    calculationHelper.login = async(request)=>{
        //if username passed in reques
        const isvalid = await calculationHelper.loginValidation(request);
        if(!isvalid){
            return{
                status: httpStatus.BAD_GATEWAY, message:"USer name is required"
                //object ma semi colon rakhna mildaina
            }
        } else{
           return "Successful Login"
    }
        // get if user exit database

        //check passsword is correct
        //if user have access
        //return a+b
    }
        calculationHelper.loginValidation = async (request) =>{ // calculation object bhitra loginValidation define gareko
        if(request.username){
            return true;
        }
        else{
            return false;
        }
    }
    
})(module.exports) //for multiple exports
//module.exports.sum=sum;