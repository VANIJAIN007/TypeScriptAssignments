var sum = 0;
var number1 = parseInt(prompt("Enter a number"));
function varargs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}
varargs(1, 2, 3);
document.write("My sum" + sum);
