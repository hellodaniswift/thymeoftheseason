document.querySelector('form').addEventListener('submit', function(event) {
  alert('you have successfully subscribed to our mailing list:-)!');
});


function adjustIngredients() {
  var servings = document.getElementById("servings").value;
  
  var baseTomatoes = 8;
  var baseGarlic = 2;
  var baseOliveOil = 200;
  var baseAnchovies = 6;
  var basePasta = 200;
  
  var adjustedTomatoes = (baseTomatoes * servings / 4);
  var adjustedGarlic = (baseGarlic * servings / 4);
  var adjustedOliveOil = (baseOliveOil * servings / 4);
  var adjustedAnchovies = (baseAnchovies * servings / 4);
  var adjustedPasta = (basePasta * servings / 4);
  
  document.getElementById("tomatoes").innerHTML = adjustedTomatoes;
  document.getElementById("garlic").innerHTML = adjustedGarlic;
  document.getElementById("oliveOil").innerHTML = adjustedOliveOil;
  document.getElementById("anchovies").innerHTML = adjustedAnchovies;
  document.getElementById("pasta").innerHTML = adjustedPasta;
}

window.addEventListener('load', adjustIngredients);