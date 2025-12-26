const arg = process.argv[2]
const number = parseInt(arg)
if (number.isNan(number)){
    comsole.log("Not a number");
}else{
    console.log("My number: " + number);
}