
// AND = &&
// OR  = ||
// NOT = !

!true
// false

!1
// false

true && false
// false

true || false
// true

1 == 1 && 2 == 2 && 3 == 10 && 4 == 4
// false

1 == 1 || 2 == 2 || 3 == 10 || 4 == 4
// true


const a = 1
const b = "my string"

let result
if(a) {
  result = b
}


const a = 1
const b = "my string"
const result = a && b
console.log("result", result)
