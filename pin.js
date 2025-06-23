let arr = [
  { name: "Apache RTR", image: "./images/Apache RTR.jpg" },
  { name: "Kawasaki", image: "./images/Kawasaki.jpg" },
  { name: "KTM Duke", image: "./images/KTM duke.jpg" },
  { name: "Royal Enfield", image: "./images/Royal Enfield.jpg" },
  { name: "Moto GP", image: "./images/Moto GP.jpg" },
  { name: "Stunt Bike", image: "./images/Stunt Bike.jpg" },
  { name: "Lambo", image: "./images/Lambo.jpg" },
  { name: "Mercedes", image: "./images/Mercedes.jpg" },
  { name: "Bugatti", image: "./images/Bugatti.jpg" },
  { name: "Ferrari", image: "./images/Ferrari.jpg" },
  { name: "Porsche GT", image: "./images/Porsche GT.jpg" },
  { name: "super car", image: "./images/super car.jpg" },
  { name: "Dog Sketch", image: "./images/Dog Sketch.jpg" },
  { name: "Hand Sketch", image: "./images/Hand Sketch.jpg" },
  { name: "Mountain Sketch", image: "./images/Mountain Sketch.jpg" },
  { name: "Tree Sketch", image: "./images/Tree Sketch.jpg" },
  { name: "Eye Sketch", image: "./images/Eye Sketch.jpg" },
  { name: "Girl", image: "./images/Girl.jpg" },
];
function showeThecards() {
  let clutter = "";
  arr.forEach(function (obj) {
    clutter += `
            <div class="card">
                <img src="${obj.image}" alt="${obj.name}">
            </div>
        `;
  });
  document.querySelector(".content").innerHTML = clutter;
}
function searchFunctionality() {
  var input = document.getElementById("searchinput");
  input.addEventListener("focus", function () {
    document.querySelector(".overlay").style.display = "block";
  });
  input.addEventListener("blur", function () {
    document.querySelector(".overlay").style.display = "none";
  });
  input.addEventListener("input", function () {
    const fiteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value)
    );
    var clutter = "";
    var clutter2 = "";
    fiteredArray.forEach(function (obj) {
      clutter += `<div class="card">
      <img src="${obj.image}" alt="${obj.name}">
      </div>`;
    });
    document.querySelector(".content").innerHTML = clutter;
    fiteredArray.forEach(function (obj) {
      clutter2 += `<div class="searchtext">
      <i class="ri-search-line"></i>
      <h6>${obj.name}</h6>
      </div>`;
    });
    document.querySelector(".searchdata").style.display = "block";
    document.querySelector(".searchdata").innerHTML = clutter2;
    document.querySelector(".content").innerHTML = clutter;
  });
}
showeThecards();
searchFunctionality();
