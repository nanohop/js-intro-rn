
const obj = {
  "key1": 1,
  2: "value 2",
  key3: 3,
  null: "value for null",
  undefined: 5,
  objectKey: {
    1: 1,
    2: 2
  }
}

obj["key3"] = "testing"
console.log(obj["key3"])


const obj = {0: "first", 1: "second", 2: "third"}
obj[0]
obj[0] = "New first"
console.log(obj)


typeof [1, 2, 3]


const obj = {1: "a", 2: "b", 3: "c"}
console.log(obj)
console.log("keys: ", Object.keys(obj))
console.log("values: ", Object.values(obj))


obj[1] = null
console.log(obj)
delete obj[1]
console.log(obj)







