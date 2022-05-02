let Food = function (pname, pcalories) {
  this.name = pname;
  this.calories = parseInt(pcalories);
};

document.addEventListener("DOMContentLoaded", function (event) {
  let foodArray = [];
  let calorieTotal = 0;
  foodArray.push(new Food("banana", 75));
  foodArray.push(new Food("burger", 600));
  calorieTotal += foodArray[0].calories;
  calorieTotal += foodArray[1].calories;

  document.getElementById("addfoodBtn").addEventListener("click", function () {
    let inputFood = document.getElementById("food").value;
    let inputCalories = document.getElementById("calories").value;
    foodArray.push(new Food(inputFood, inputCalories));
    calorieTotal += parseInt(inputCalories);
    document.getElementById("total").value = calorieTotal;
    console.log(foodArray);
  });
});
