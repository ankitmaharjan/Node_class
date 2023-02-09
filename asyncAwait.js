const { response } = require("express");
(async ()=>{
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
async function getOrderItems(){
    console.log("getOrderItems ===", orders)
}

async function addNewItem(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            orders.push({fruits:"apple",qty:4},{fruits:"papaya",qty:6});
            resolve(true);
            
          },6000);
        })
        
    } 

const order = await addNewItem();
console.log(order)
if(order)   {
const orderlist = await getOrderItems();
}
})()