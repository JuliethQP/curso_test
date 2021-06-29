function display(some) {
    console.log("------------")
    console.log(" resultado " + some)
    console.log("-------------")
}

function myCalculator(num1, num2, myCallback) {
    let suma = num1 + num2;
    myCallback(suma)
}

myCalculator(5, 5, display)