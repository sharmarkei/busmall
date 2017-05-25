'use strict';

// GLOBAL VARIBALES
var counter = 0;
var justShown = [];
// Array of Product objects
var productsArray = [];

// Product Constructor
function Products(productName, pathWay) {
  this.productName = productName;
  this.pathWay = pathWay;
  this.shown = 0;
  this.clicked = 0;

  // push this instance into product array
  productsArray.push(this);
}

// Instantiate Product constructor
var bag = new Products('r2d2', './img/bag.jpg');
var banana = new Products('banana', './img/banana.jpg');
var bathroom = new Products('bathroom', './img/bathroom.jpg');
var boots = new Products('boots','./img/boots.jpg');
var breakfast = new Products('breakfast', './img/breakfast.jpg');
var bubblegum = new Products('bubblegum', './img/bubblegum.jpg');
var chair = new Products('chair', './img/chair.jpg');
var cthulhu = new Products('cthulhu', './img/cthulhu.jpg');
var dogDuck = new Products('dog-duck','./img/dog-duck.jpg');
var dragon = new Products('dragon', './img/dragon.jpg');
var pen = new Products('pen', './img/pen.jpg');
var petSweep = new Products('pet-sweep', './img/pet-sweep.jpg');
var scissor = new Products('scissors','./img/scissors.jpg');
var shark = new Products('shark', './img/shark.jpg');
var sweep = new Products('sweep', './img/sweep.png');
var tauntaun = new Products('tauntaun', './img/tauntaun.jpg');
var unicorn = new Products('unicorn', './img/unicorn.jpg');
var usb = new Products('usb', './img/usb.gif');
var waterCan = new Products('water-can', './img/water-can.jpg');
var wineGlass = new Products('wine-glass', './img/wine-glass.jpg');


// Use the random number to return productsArray at where index = randomNum
function randomProductObject() {
  // // Get random num from 0 to 19
  // var getRandomIndex = Math.random() * productsArray.length;
  // // Round the random number
  // var roundedRandIndex = Math.floor(getRandomIndex);
  while (true) {
    // Get random num from 0 to 19
    var getRandomIndex = Math.random() * productsArray.length;
    // Round the random number
    var roundedRandIndex = Math.floor(getRandomIndex);

    if( !justShown.includes(roundedRandIndex) ) {
      return [productsArray[roundedRandIndex], roundedRandIndex];
    }
    // randomProductObject();
  }
  // Use the random number to return productsArray index
  // return [productsArray[roundedRandIndex], roundedRandIndex];
}


// Getting the img elements of images by #id
var imageOne = document.getElementById('image-one');
var imageTwo = document.getElementById('image-two');
var imageThree = document.getElementById('image-three');
var score = document.getElementById('score');


var firstRand, secondRand, thirdRand;



// Displaying random images
function showRandomImages(){
  // setting the src attribute to the pathway of randomly generated image
  firstRand = randomProductObject();
  imageOne.setAttribute('src', firstRand[0].pathWay);

  secondRand = randomProductObject();
  while (firstRand[1] === secondRand[1]) {
    secondRand = randomProductObject();
  }
  // setting the src attribute to the pathway of randomly generated image
  imageTwo.setAttribute('src', secondRand[0].pathWay);

  // Getting the third element of first image by ID
  thirdRand = randomProductObject();
  while (secondRand[1] === thirdRand[1] || thirdRand[1] === firstRand[1] || thirdRand === firstRand) {
    thirdRand = randomProductObject();
  }
  // setting the src attribute to the pathway of randomly generated image
  imageThree.setAttribute('src', thirdRand[0].pathWay);

  justShown = [];
  justShown.push(firstRand[1]);
  justShown.push(secondRand[1]);
  justShown.push(thirdRand[1]);
  console.log('justShown:', justShown)

}


// Event Listener
var imageClick = function () {
  thirdRand[0].clicked += 1;
  counter += 1;
  console.log('count:', counter);
  console.log('clicked:', thirdRand[0].clicked);

  if (counter >= 25) {
    clicksReached();
    finalScore();
  }
  showRandomImages();
};

imageOne.addEventListener('click', imageClick);
imageTwo.addEventListener('click',imageClick);
imageThree.addEventListener('click', imageClick);





function clicksReached() {
  imageOne.removeEventListener('click', imageClick);
  imageTwo.removeEventListener('click', imageClick);
  imageThree.removeEventListener('click', imageClick);
}

function finalScore() {
  var listArr = [];
  var test = document.createElement('ul');
  for (var i = 0; i < productsArray.length; i++) {
    listArr.push('<li>' + 'This picture ' + productsArray[i].productName + ' got ' + productsArray[i].clicked + ' votes.' + '</li>');
  }
  test.innerHTML = listArr.join('');
  score.appendChild(test);
}

// var list = document.createElement('ul');
//       var listArr = [];
//
//       for (var i = 0; i < hours.length; i++) {
//
//         if (i < 5) {
//           listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//         } else {
//           listArr.push('<li>' + hours[i] + ': ' + this.avgCustArr[i] + ' cookies</li>');
//
//         }
//       }
//
//       listArr.push('<li>Total: ' + this.totalCooks + ' cookies</li>');
//
//       var fullString = listArr.join('');
//       list.innerHTML = fullString;
//       document.body.appendChild(list);
//     }
//   };


// FUNCTION CALLS
showRandomImages();
// imagesToDom();
