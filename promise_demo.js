//DEMO OF CALL BACK AND PROMISES
const { response } = require("express");

const orders = [
    {fruits:"mango",qty:10},
    {fruits:"orange",qty:3},
]
/*
function order ( ) {
    setTimeout(()=>{
        console.log(orders)
    },3000);
}
*/
function getOrderItems(){
    console.log("getOrderItems ===", orders)
}

function addNewItem(getOrderItems){ //callback
    //setTimeout(()=>{
      //  orders.push({fruits:"apple",qty:4});
        //getOrderItems();
    //},6000);
    return new Promise((resolve,reject)=>{
        const err = false;
        setTimeout(()=>{
            orders.push({fruits:"apple",qty:4},{fruits:"papaya",qty:6});
            resolve(true);
            if(err){
                reject()
            }
          },6000);
    }) 
}
addNewItem().then(response =>{
    console.log("response success ===")
    getOrderItems()
}).catch((err)=>{
    console.log("err ===")
});


addNewItem(getOrderItems);
//getOrderItems(orders);