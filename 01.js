
true
// true

false
// false

0
// 0

3.14
// 3.14

-200
// -200

1e5
// 100000

-Infinity
// -Infinity

Infinity
// Infinity

NaN
// NaN

"my string"
// 'my string'

'with single quotes'
// 'with single quotes'

`special string`
// 'special string'

1 + 2
// 3

1e2 + 1
// 101

"hello" + " " + "world"
// 'hello world'

"my string " + 123
// 'my string 123'

true + false
// 1

true + false + true + false
// 2

1 + true
// 2

1 + false
// 1

false + 100 + true
// 101

`my string`
// 'my string'

`my string ${123}`
// 'my string 123'

`my string ${1 + 1}`
// 'my string 2'

`my string ${true}`
// 'my string true'

`my string ${1 + true}`
// 'my string 2'

"my string " + true
// 'my string true'

false + " my string"
// 'false my string'

1 + 2
// 3

100 * true
// 100

3.14 / "2"
// 1.57

100 * "testing"
// NaN

100 / 0
// Infinity

typeof 1
// 'number'

typeof true
// 'boolean'

typeof "hello"
// 'string'

typeof ("hello" + 1)
// 'string'

typeof (true + 1)
// 'number'

typeof (true + "hello")
// 'string'

Number()
// 0

String()
// ''

Boolean()
// false

Number("3.14")
// 3.14

Number(true)
// 1

Number(false)
// 0

parseInt("101 my number")
// 101

parseInt("101", 2)
// 5

parseFloat("3.14 is pi")
// 3.14

String(123)
// '123'

String(true)
// 'true'

Boolean(0)
// false

Boolean(1)
// true

Boolean("")
// false

Boolean("testing")
// true

