



// The lines:
const obj = {1: "one", 2: "two"}
obj[1] = "three"
console.log(obj)

// Will do the same thing with or without semicolons:
const obj = {1: "one", 2: "two"};
obj[1] = "three";
console.log(obj);

// But this line will break:
console.log(1) console.log(2)

// Unless you add a semicolo:
console.log(1); console.log(2)

// This function will return the correct string:
function myFunc() {
  return "my value"
}

// But this function will not:
function myFunc() {
  return 
    "my value"
}

const result = myFunc()
console.log("result: ", result)
