
const items = ["a", "b", "c"]

for(let i = 0; i < items.length; i++) {
  console.log(i, items[i])
}

for(i in items) {
  console.log(i, items[i])
}

// want: ["letter a", "letter b", "letter c"]

items.map(function(item) {
  console.log("in the loop: ", item)  
})

const letters = items.map(function(item) {
  return "letter " + item
})
console.log("letters: ", letters)


// Map letters - exclude b
const letters = items.map(function(item) {
  if(item !== "b") {
    return "letter " + item
  }
})
console.log("letters: ", letters)

// Filter letters, exclude b
const filtered = items.filter(function(item) {
  return item !== "b"  
})
console.log(filtered)



// Combine map and filter
const items = ["a", "b", "c"]

const letters = items.filter(function(item) {
  return item !== "b"  
}).map(function(item) {
  return "letter " + item
})
console.log("letters: ", letters)


// Reduce example
const numbers = [1, 5, 4, 8, 3, 7, 3, 7, 3, 3, 9]

const freq = numbers.reduce(function(result, value) {
  if(!result[value]) {
    result[value] = 1
  } else {
    result[value] = result[value] + 1
  }
  return result
}, {})

console.log(freq)