
// var
// let
// const

let myVariable

let my_variable
let variable2
let _my_variable_3

let myVar
myVar = 1

let myVar2 = 123

let x = null
let y = undefined
let absValue = Math.abs(-1)
x = y = absValue

const a = 1
// ERROR:
// a = 2

const myObject = {key: "value"}
myObject.key = "value2"

myObject.key

let myPrimitiveVar = 2
// Unmuted by functions:
// myFunct(myPrimitiveVar)

const myObj = {key: "value1"}
function myFunction(v) {
  v.key = "different value"
}
myFunction(myObj)
// myObj now = {key: "different value"}

let primitive = 1
primitive = "hello"
primitive = { my: "object" }

