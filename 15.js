
const doWork = function(arg1, done) {
  console.log("doing work with arg: ", arg1)
  done()
}

const complete = function() {
  console.warn("function complete")
}

doWork("arg one", complete)




const doSomething = function() {
  console.log("done!")
  setTimeout(doSomethingElse, 1000)
}

doSomethingElse = function() {
  console.log("something else")
  // Infinite Loop:
  // setTimeout(doSomething, 1000)
}

setTimeout(doSomething, 1000)
