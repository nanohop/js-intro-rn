
for(let i = 0; i < 10; i++) {
  console.log("i: ", i)
}


for(let i = 0; i < 10; i++) {
  console.log("i: ", i)
}
console.log("after the loop", i)


let i
for(i = 0; i < 10; i++) {
  console.log("i: ", i)
}
console.log("after the loop", i)


let i
for(let i = 0; i < 10; i++) {
  console.log("i: ", i)
}
console.log("after the loop", i)


let i = 0;

while(i < 10) {
  console.log("i", i)
  i++
}


while(Math.random() > 0.1) {
  console.warn("inside loop")
}
console.warn("finished")


while(true) {
  let r = Math.random()
  console.log("number: ", r)
  if(r < 0.5) {
    break
  }
}
console.log("finished")


for(let i = 0; i < 10; i++) {
  if(i > 5) {
    break;
  }
  console.warn("in loop", i)
}


for(let i = 0; i < 10; i++) {
  if(i == 2) {
    continue
  }
  console.warn("in loop", i)
}
