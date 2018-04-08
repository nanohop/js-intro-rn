
if(1 > 5) {
  console.log("was true")
}

if(1) {
  console.warn("is true")
}

if(0) {
  console.warn("is true")
}

if(false) { console.log("value is true") }
if(0) { console.log("value is true") }
if(null) { console.log("value is true") }
if(undefined) { console.log("value is true") }
if(NaN) { console.log("value is true") }
if("") { console.log("value is true") }

if(true) { console.log("value is true") }
if(1) { console.log("value is true") }

if(0) { console.log("value is true") }
if("0") { console.log("value is true") }

Boolean(1)
Boolean("1")
Boolean(0)
Boolean("0")

if(0) {
  console.log("is true")
} else {
  console.log("is false")
}

if(0) {
  console.log("0")
} else if(1) {
  console.log("1")
} else {
  console.log("else")
}

if(true) {
  console.log("true")
} else if(1) {
  console.log("1")
} else {
  console.log("else")
}

1 == 2 ? "equal" : "not equal"

const result = 1 == 2 ? "equal" : "not equal"
console.log("result", result)

const result = 1 == 2 ? "1 == 2" : 2 == 2 ? "2 == 2" : "nothing equal"
console.log("result", result)

const result = (
  1 == 2 ? "1 == 2" : 
    (
      2 == 2 ? 
      "2 == 2" : "not equal"
    )
)
console.log("result", result)
