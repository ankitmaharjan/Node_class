// const users =[[email:"amitmaharjan01@gmail.com",password:"test123"],
//                 [email:"ram",password:"qwe"],
//                 [email:"shyam",password:"eat"]];
const users =[["anitmaharjan@gmail.com","test123"],
                ["ram","ffr"],
                ["shyam","mtyy"]];
((authorization)=>{
    
    // authorization.check=function (email,password){
    //     if(email=="amitmaharjan01@gmail.com" && password=="test123"){
    //         console.log(email)
    //         return true
    //     }
    //     return false;
    // }
    let word="email already exists";
    let word2="new user?sign-in to continue!"
    count=0;
    authorization.checkExistingEmail=function (email){
        for(i=0;i<users.length;i++){
           if(count==0){
                if(email==users[i][0]){
                    count=1;
                }
            }
        }
        if(count==1){
            return word;
        }
        else{
            return word2;
        }
    }
    authorization.newAccount=function (email,password){
        const emailCheck=new RegExp(/^([a-zA-Z0-9\.\_])+@([a-zA-Z0-9])+.com$/);
        const pass=new RegExp(/^[a-zA-Z0-9]{6,10}$/);
        boo=emailCheck.test(email);
        boo2=pass.test(password);
        console.log(boo2)
    }
    authorization.validation=function(email,password){
        test=0;
        for(i=0;i<users.length;i++){
            if(test==0){
                // console.log("if")
                // console.log(users[i][0])
                // console.log(users[i][1])
                if(email==users[i][0] && password==users[i][1]){
                    console.log(users[i][0])
                    console.log(users[i][1])
                    test=1;
                }
            }
        }
        console.log(test)
        if(test==1)
            console.log("correct email and pass.")
        else
            console.log("incorrect email or password")
    }
    
})(module.exports)
// function authorization(request){
//     if(request.email=="amitmaharjan01@gmail.com"){
//         console.log("success");
//     }
// }