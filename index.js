let b;
b = b * 9;
console.log(b);
console.log(typeof b);

/*
c = c * 10;
console.log(c);
console.log(typeof c);
*/

//Adding string + string
result = "2" + "3";
console.log(result);

//Adding string + number
var str = "42";
var num = 10;
result = str + num;
console.log(result); // "4210"

//Adding number + string
var num = 10;
var str = "42";
result = num + str;
console.log(result); // "1042"

//Number to String Conversion:
var num = 42;
var str = num.toString();
console.log(str); //"42"

//String to Number Conversion:
var str = "42";
var num = parseInt(str);
console.log(num); // 42

//Boolean to Number Conversion:
var bool = true;
var num = Number(bool);
console.log(num);

//String to Boolean Conversion:
var str1 = "Hello";
var str2 = "";
var bool1 = Boolean(str1);
var bool2 = Boolean(str2);
console.log(bool1); // true
console.log(bool2); // false

//Array to String Conversion:
var arr = [1, 2, 3];
var arrString = arr.join(", ");
console.log(arrString);

//String to Array Conversion
var str = "apple,banana,cherry";
var strArray = str.split(",");
console.log(strArray);

let a = 0;
if (a++ && (a = a + 9)) {
  console.log(a); // console.log(a); statement is not reached,and nothing is logged to the console.
}

a = 0;
if (++a && (a = a + 9)) {
  console.log(a); // 10
}

a = 0;
if (false || (a = a + 54)) {
  console.log(a); // 54
}
