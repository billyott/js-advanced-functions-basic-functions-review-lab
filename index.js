// Your code here
function saturdayFun(arg='roller-skate') {
    return `This Saturday, I want to ${arg}!`
}

let mondayWork = function(arg='go to the office') {
    return `This Monday, I will ${arg}.`
}

function wrapAdjective(myString="*") {
    return function(arg="special") {
        return `You are ${myString}${arg}${myString}!`
    } 
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(myInt, myFunctions) {
    let a = myInt

    for (let i = 0; i < myFunctions.length; i++ ){
      a = myFunctions[i](a)
    }
  
    return a
}