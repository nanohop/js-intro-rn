this
// (global object)
// { console: [Getter],
// ...
//      cache: {} } }

global
// (global object)
// { console: [Getter],
// ...
//      cache: {} } }

this === global
// true

function isThisGlobal() {return this === global}
// undefined

isThisGlobal()
// true

const obj = {whatIsThis: isThisGlobal}
// undefined

obj
// { whatIsThis: [Function: isThisGlobal] }

obj.whatIsThis()
// false

isThisGlobal()
// true

obj.whatIsThis()
// false

obj.whatIsThis = isThisGlobal.bind(this)
// [Function: bound isThisGlobal]

obj.whatIsThis()
// true

isThisGlobal = isThisGlobal.bind({})
// [Function: bound isThisGlobal]

isThisGlobal()
// false

obj.whatIsThis()
// true

function printThis(){console.log(this)}
// undefined

printThis()
// (global object)
// { console: [Getter],
// ...
//      cache: {} } }

printThis.call({})
// {}

printThis()
// (global object)
// { console: [Getter],
// ...
//      cache: {} } }

obj.whatIsThis
// [Function: bound isThisGlobal]

obj.whatIsThis()
// true

obj.whatIsThis.call({})
// true



