// JSON - java script object notation 
// When working with JSON it is common to convert it back to a JavaScript object to work with its properties. To do this you need to use the global built-in JSON object and its parse method.  

// JSON is a string that looks like an object.
// conv json strings to js
const jsonStr = '{"greeting" : "hello"}'
const aPlainObj = JSON.parse(jsonStr)
aPlainObj.greeting = 'hi'

// use stringify to conv js objects to json
const data = {
    name: 'John',
    age: 30,
    city: 'New York'
}
JSON.stringify(data)




