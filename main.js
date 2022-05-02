let origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("firstInput").value = origArray[0];
  document.getElementById("secondInput").value = origArray[1];
  document.getElementById("thirdInput").value = origArray[2];

  document.getElementById("btnTwo").addEventListener("click", function () {
    const cubedArray = origArray.map((x) => x * x * x);

    document.getElementById("firstInput").value = cubedArray[0];
    document.getElementById("secondInput").value = cubedArray[1];
    document.getElementById("thirdInput").value = cubedArray[2];
  });

  document.getElementById("btnThree").addEventListener("click", toTheFourth);
});

function squared() {
  const squaredArray = origArray.map((x) => x * x);

  document.getElementById("firstInput").value = squaredArray[0];
  document.getElementById("secondInput").value = squaredArray[1];
  document.getElementById("thirdInput").value = squaredArray[2];
}

function toTheFourth() {
  const toTheFourthArray = origArray.map((x) => x * x * x * x);

  document.getElementById("firstInput").value = toTheFourthArray[0];
  document.getElementById("secondInput").value = toTheFourthArray[1];
  document.getElementById("thirdInput").value = toTheFourthArray[2];
}
