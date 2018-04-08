
new Array(1, 2, 3)
// [ 1, 2, 3 ]

[1, 2, 3]
// [ 1, 2, 3 ]

[1, true, "my string"]
// [ 1, true, 'my string' ]

[[1,2], [3,4]]
// [ [ 1, 2 ], [ 3, 4 ] ]

[1,2,3].length
// 3

["dog", "cat", "car"]
// [ 'dog', 'cat', 'car' ]

["dog", "cat", "car"][2]
// 'car'

const arr = ["dog", "cat", "car"]
// undefined

arr
// [ 'dog', 'cat', 'car' ]

arr[-1]
// undefined

arr[arr.length - 1]
// 'car'

arr[2] = "truck"
// 'truck'

arr
// [ 'dog', 'cat', 'truck' ]

arr.slice(1)
// [ 'cat', 'truck' ]

arr.slice(1, 2)
// [ 'cat' ]

arr.slice(1, 1)
// []

arr
// [ 'dog', 'cat', 'truck' ]

arr.indexOf('cat')
// 1

arr.indexOf('boat')
// -1

arr.indexOf('boat') === -1 ? "nope" : "yes"
// 'nope' 

