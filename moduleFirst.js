/*
const simple2 = require("./moduleSecond")
//call
simple2()
*/
/*
//import simple2 from moduleSecond.mjs , we cannot use require to import
import{simple2 as simple} from "./moduleSecond.mjs"
simple()
*/
/*
import simple2 from "./moduleSecond.mjs"
simple2()
*/
import * as a2 from "./moduleSecond.mjs"
console.log(a2.simple())
