var mealCost = Number(prompt("How much is your check ex. $25.99"));
var tip = Number(
  prompt("How much would you like to tip? ex. enter 0.20 for 20%")
);
var tipAmount = mealCost * tip;
var numOfPeople = Number(prompt("How many people are splitting the check?"));
var total = mealCost + tipAmount;

console.log(
  alert(
    `Your meal cost $${mealCost}, and with the tip, it comes to $${total.toFixed(
      2
    )}. 
  Your share is $${(total / numOfPeople).toFixed(2)}. 
  Hope it was delicious!`
  )
);
