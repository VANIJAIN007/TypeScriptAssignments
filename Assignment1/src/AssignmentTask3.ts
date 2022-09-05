let sum1=0;
let number2=prompt(`Enter a number`);

let a:number=parseInt(number2);
var arr2[];
arr2.push(number2);


function varargs1(...args:number[]){
    for(let i=0;i<args.length;i++){
        sum1+=args[i];
    }
    console.log(sum1);
}
// varargs1(1,2,3);

document.write("My sum"+sum1);

