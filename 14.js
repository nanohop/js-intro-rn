

// example 1
function log(arg1, arg2) {
  console.log("args: ", arg1, arg2)
}
log("one", "two")
log()



// example 2
function log(arg1 = "default 1", arg2 = "default 2") {
  console.log("args", arg1, arg2)
}
log()
log("one", "two")


// example 3
function log(arg1 = "default 1", arg2 = "default 2") {
  console.log("args", arg1, arg2)
}
function log() {
  console.log("no arguments")
}
log("one", "two")


// example 4
const log = function(arg1, arg2) {
  console.log("args", arg1, arg2)
}
log("one", "two")
log(1, 2)
log({}, [])


// example 5
const log = function(arg1, arg2) {
  console.log("args", arg1, arg2)
  return function() {
    console.log("another function")
  }
}

const result = log()
result()
