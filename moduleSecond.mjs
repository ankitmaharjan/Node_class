/*
export function simple(){
    console.log("Simple is complex")
}
*/
/*
export function simple2(){
    console.log("Simple2 is complex")
}
*/
export function simple(){
    console.log("Simple is complex")
    return 45
}
//By default it exports the simple2 function to moduleFirst.js, no problem to call
export default function simple2(){
    console.log("Simple2 is complex")
}