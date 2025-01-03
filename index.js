// Function declaration for saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Call examples
console.log(saturdayFun()); // Default: "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // Custom: "This Saturday, I want to bathe my dog!"

// Function expression for mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Call examples
console.log(mondayWork()); // Default: "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // Custom: "This Monday, I will work from home."

// Function for wrapAdjective
function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

// Call examples
let result = wrapAdjective('*');
console.log(result("a hard worker")); // "You are *a hard worker*!"

result = wrapAdjective('||');
console.log(result("a dedicated programmer")); // "You are ||a dedicated programmer||!"