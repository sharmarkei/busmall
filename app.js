'use strict';

// GLOBAL VARIBALES

// Array of Product objects
var productsArray = [];

// Product Constructor
function Products(productName, pathWay) {
  this.productName = productName;
  this.pathWay = pathWay;
  this.shown = 0;
  this.clicked = 0;
  this.newArray = [];

  // push this instance into product array
  productsArray.push(this);
}

// Instantiate Product constructor
var bag = new Products ('r2d2', './img/bag.jpg');
var banana = new Products ('banana', './img/banana.jpg');
var bathroom = new Products ('bathroom', './img/bathroom.jpg');
var boots = new Products ('boots','./img/boots.jpg');
var breakfast = new Products ('breakfast', './img/breakfast.jpg');
var bubblegum = new Products ('bubblegum', './img/bubblegum.jpg');
var chair = new Products ('chair', './img/chair.jpg');
var cthulhu = new Products ('cthulhu', './img/cthulhu.jpg');
var dogDuck = new Products ('dog-duck','./img/dog-duck.jpg');
var dragon = new Products ('dragon', './img/dragon.jpg');
var pen = new Products ('pen', './img/pen.jpg');
var petSweep = new Products ('pet-sweep', './img/pet-sweep.jpg');
var scissor = new Products ('scissors','./img/scissors.jpg');
var shark = new Products ('shark', './img/shark.jpg');
var sweep = new Products ('sweep', './img/sweep.png');
var tauntaun = new Products ('tauntaun', './img/tauntaun.jpg');
var unicorn = new Products ('unicorn', './img/unicorn.jpg');
var usb = new Products ('usb', './img/usb.gif');
var waterCan = new Products ('water-can', './img/water-can.jpg');
var wineGlass = new Products ('wine-glass', './img/wine-glass.jpg');

// List of all product names
var pictures = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissor, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];


// Use the random number to return productsArray at where index = randomNum
function randomProductObject() {
  // Get random num from 0 to 19
  var getRandomIndex = Math.random() * pictures.length;
  // Round the random number
  var roundedRandIndex = Math.floor(getRandomIndex);
  // Use the random number to return productsArray index
  return productsArray[roundedRandIndex];
}

// Getting the img elements of images by #id
var imageOne = document.getElementById('image-one');
var imageThree = document.getElementById('image-three');
var imageTwo = document.getElementById('image-two');

var firstRand, secondRand, thirdRand;

// Displaying random images
function showRandomImages(){
  // setting the src attribute to the pathway of randomly generated image
  firstRand = randomProductObject();
  imageOne.setAttribute('src', firstRand.pathWay);

  secondRand = randomProductObject();
  while (firstRand === secondRand) {
    secondRand = randomProductObject();
  }
  // setting the src attribute to the pathway of randomly generated image
  imageTwo.setAttribute('src', secondRand.pathWay);

  // Getting the third element of first image by ID
  thirdRand = randomProductObject();
  while (secondRand === thirdRand || thirdRand === firstRand) {
    thirdRand = randomProductObject();
  }
  // setting the src attribute to the pathway of randomly generated image
  imageThree.setAttribute('src', thirdRand.pathWay);
}

// Event Listener
imageOne.addEventListener('click', function () {
  firstRand.clicked += 1;

  showRandomImages();
  console.log('button hit!');

});

imageTwo.addEventListener('click', function () {
  secondRand.clicked += 1;
  showRandomImages();
  console.log('button hit!');

});

imageThree.addEventListener('click', function () {
  thirdRand.clicked += 1;
  showRandomImages();
  console.log('button hit!');

});


//
// .addEventListener('click',  selectImg() {
//   clicked++
// });









// FUNCTION CALLS
showRandomImages();
