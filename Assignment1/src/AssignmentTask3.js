// let number2=prompt(`Enter a number`);
// let a:number=parseInt(number2);
// var arr2[];
// arr2.push(number2);
function varargs1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum1 = 0;
    for (var i = 0; i < args.length; i++) {
        sum1 += args[i];
    }
    return sum1;
}
// varargs1(1,2,3);
var value = prompt("Enter length of arguments");
var value1 = parseInt(value);
var y = [];
for (var i = 0; i < value1; i++) {
    var mynumber = prompt("Enter number");
    var num = parseInt(mynumber);
    y.push(num);
}
document.body.style.textAlign = "center";
document.body.style.color = "white";
document.body.style.fontSize = "24px";
document.write("My sum is: " + varargs1.apply(void 0, y));
