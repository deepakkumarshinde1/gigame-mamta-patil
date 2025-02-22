let object = {};
object.name = "Deepakkumar";
object["age"] = 25;

let varOne = "city";
object[varOne] = city;

console.log(object); // { name: 'Deepakkumar', age: 25, city: 'Nashik' }

// create a copy of object
let objectCopy = Object.assign({}, object);
// spread operator ( deep copy )
let objectCopy2 = { ...object };

// methods of object
console.log(Object.keys(object)); // [ 'name', 'age', 'city' ]
console.log(Object.values(object)); // [ 'Deepakkumar', 25, 'Nashik' ]
console.log(Object.entries(object)); // [ [ 'name', 'Deepakkumar' ], [ 'age', 25 ], [ 'city', 'Nashik' ] ]

// loop an object
for (let key in object) {
  console.log(key, object[key]);
}

// freeze object
Object.freeze(object);
object.name = "Deepak"; // not allowed
console.log(object); // { name: 'Deepakkumar', age: 25, city: 'Nashik' }

// find a length of object
console.log(Object.keys(object).length); // 3

// test object is empty or not
console.log(Object.keys(object).length === 0); // false

// merge two objects
let obj1 = { name: "Deepak" };
let obj2 = { age: 25 };
let obj3 = { ...obj1, ...obj2 };

// list of string methods
// 1. charAt() => returns the character at the specified index (position)
let str = "Hello World";
console.log(str.charAt(0)); // H

// 2. charCodeAt() => returns the Unicode of the character at the specified index
console.log(str.charCodeAt(0)); // 72

// 3. concat() => joins two or more strings, and returns a new joined strings
console.log(str.concat(" Deepak")); // Hello World Deepak

// 4. endsWith() => checks whether a string ends with specified string/characters
console.log(str.endsWith("World")); // true

// 5. fromCharCode() => converts Unicode values into characters
console.log(String.fromCharCode(72)); // H

// 6. includes() => checks whether a string contains the specified string/characters
console.log(str.includes("World")); // true

// 7. indexOf() => returns the position of the first found occurrence of a specified value in a string
console.log(str.indexOf("World")); // 6

// 8. lastIndexOf() => returns the position of the last found occurrence of a specified value in a string
// i want to check and extension of file deepak.shinde.pdf
let fileName = "deepak.shinde.pdf";
console.log(fileName.lastIndexOf(".")); // 12
let ext = fileName.slice(fileName.lastIndexOf(".") + 1); // pdf

// extension array => ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf", "html", "css", "js", "php", "java", "c", "cpp", "py", "rb", "swift", "go", "ts", "json", "xml", "yaml", "yml", "sql", "db", "dbf", "csv", "tsv", "md", "markdown", "sh", "bat", "cmd", "ps1", "psm1", "psd1", "ps1xml", "psc1", "psc2", "msh", "msh1", "msh2", "mshxml", "msh1xml", "msh2xml", "scm", "scm1", "scm2", "scmx", "dsc", "dsc1", "dsc2", "dscmx", "ksh", "csh", "bash", "zsh", "fish", "awk", "sed", "pl", "pm", "tcl", "r", "rmd
let extArray = ["pdf", "doc", "docx"];
console.log(extArray.includes(ext)); // true

// 9. match() => searches a string for a match against a regular expression, and returns the matches
let text = "How is your day?";
let pattern = /home/;
console.log(text.match(pattern)); // null

let pattern2 = /day/;
console.log(text.match(pattern2)); // [ 'day', index: 12, input: 'How is your day?', groups: undefined ]

let string = "Hello, This deepakkumar and gigame is saying hello";
let pattern3 = /hello/gi; // g => global, i => case insensitive
console.log(string.match(pattern3)); // [ 'Hello', 'hello' ]

// 10. repeat() => returns a new string with a specified number of copies of an existing string
let str2 = "Hello ";
console.log(str2.repeat(3)); // Hello Hello Hello

// 11. replace() => searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
let str3 = "Hello, this deepak from gigame and gigame is awesome";
let pattern4 = /gigame/gi;
let changeText = "Nashik";
console.log(str3.replace(pattern4, changeText)); // Hello, this deepak from Nashik and Nashik is awesome

// 12. search() => searches a string for a specified value, or regular expression, and returns the position of the match
let str4 = "Hello, this deepak from gigame and gigame is awesome";
let pattern5 = /gigame/gi;
console.log(str4.search(pattern5)); // 22

// 13. slice() => extracts a part of a string and returns a new string
let str5 = "Hello, this deepak from gigame and gigame is awesome";
let start = 22;
let end = 28;
console.log(first.slice(start, end)); // gigame

// 14. split() => splits a string into an array of substrings
let date = "2025:01:22";
let dateArray = date.split(":");
console.log(dateArray); // [ '2025', '01', '22' ]
// convert dd-mm-yyyy
let dateArray2 = dateArray.reverse();
let newDate = dateArray2.join("-");
console.log(newDate); // 22-01-2025

// write this date in one line
let newDate2 = date.split(":").reverse().join("-"); // method chaining
console.log(newDate2); // 22-01-2025

// 15. uppercase() => converts a string to uppercase letters
let str6 = "hello";
console.log(str6.toUpperCase()); // HELLO

// 16. lowercase() => converts a string to lowercase letters
let str7 = "HELLO";
console.log(str7.toLowerCase()); // hello

// 17. trim() => removes whitespace from both sides of a string
let str8 = "   Hello     ";
// check string is empty or not
console.log(first.trim() === ""); // false

// sort a string
let str9 = "Deeepakkumar";
let strArray = str9.toLowerCase().split("");
let sortedArray = strArray.sort();
let sortedStr = sortedArray.join(""); // aadeekkmmpru

// reverse a string
let str10 = "Deepakkumar";
let strArray2 = str10.split("");
let reversedArray = strArray2.reverse();
let reversedStr = reversedArray.join(""); // ramukkapeeD

// MAP is javascript => key value pair
let map = new Map();
// there map methods
// 1. set() => set the value
// 2. get() => get the value
// 3. has() => check the key is present or not
// 4. delete() => delete the key
// 5. clear() => delete all keys
// 6. size() => get the size of map
// 7. keys() => get the keys ; all keys are unique
// 8. values() => get the values ; values can be duplicate
// 9. entries() => get the entries ; key value pair

map.set("name", "Deepak");
map.set("age", 25);
map.set("city", "Nashik");

console.log(map.get("name")); // Deepak
console.log(map.get("country")); // undefined

console.log(map.has("name")); // true
console.log(map.has("country")); // false
console.log(map.size); // 3
map.delete("name");
console.log(map.has("name")); // false

map.clear();
console.log(map.size); // 0

// difference between map and object

// Object
// 1. object key can be string, number, symbol
// 2. object key are not ordered
// 3. object has a prototype
// 4. object can be used as a map

// Map
// 1. map key can be any value
// 2. map key are ordered
// 3. map has no prototype
// 4. map is iterable
