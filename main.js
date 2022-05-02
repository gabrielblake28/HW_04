let foodArray = [];

let Food = function (pname, pcalories) {
  this.name = pname;
  this.calories = pcalories;
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("addfoodBtn");

  document.getElementById("btnTwo").addEventListener("click", function () {
    const cubedArray = origArray.map((x) => x * x * x);

    document.getElementById("firstInput").value = cubedArray[0];
    document.getElementById("secondInput").value = cubedArray[1];
    document.getElementById("thirdInput").value = cubedArray[2];
  });

  document.getElementById("btnThree").addEventListener("click", toTheFourth);
});
