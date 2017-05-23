'use strict';

// GLOBAL VARIBALES

// Array of Product objects
var productArr = [];

// Product Constructor
function Products(productName, pathWay) {
  this.productName = productName;
  this.pathWay = pathWay;
  this.shown = 0;
  this.clicked = 0;
  this.newArray = [];

  // push this instance into product array
  productArr.push(this);
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


// Use the random number to return productArr at where index = randomNum
function randomProductObject() {
  // Get random num from 0 to 19
  var getRandomIndex = Math.random() * pictures.length;
  // Round the random number
  var roundedRandIndex = Math.floor(getRandomIndex);
  console.log(roundedRandIndex);
  // Use the random number to return productArr index
  return productArr[roundedRandIndex];
}

// Displaying random images
function selectImg(){
  // Getting the first element of first image by ID
  var imageOne = document.getElementById('image-one');

  // setting the src attribute to the pathway of randomly generated image
  var firstRand = randomProductObject();
  imageOne.setAttribute('src', firstRand.pathWay);

  // Getting the second element of first image by ID
  var imageTwo = document.getElementById('image-two');
  var secondRand = randomProductObject();

  while (firstRand === secondRand) {
    secondRand = randomProductObject();
  }
  // setting the src attribute to the pathway of randomly generated image
  imageTwo.setAttribute('src', secondRand.pathWay);

  // Getting the third element of first image by ID
  var imageThree = document.getElementById('image-three');
  var thirdRand = randomProductObject();

  while (secondRand === thirdRand || thirdRand === firstRand) {
    thirdRand = randomProductObject();
  }

  // setting the src attribute to the pathway of randomly generated image
  imageThree.setAttribute('src', thirdRand.pathWay);
}







selectImg();



// var selectImg = function() {
//   var firstGen = document.getElementById('image-one');
//   var imgOne = randomImg;
//   counter++;
//
//   var secondGen = document.getElementById('image-two');
//   var imgTwo = randomImg;
//   while (imgOne === imgTwo) {
//     imgTwo = randomImg
//   }
//   counter++;
//
//   var thirdGen = document.getElementById('image-three');
//   var imgThree = randomImg;
//   while (imgTwo === imgThree || imgThree === imgOne) {
//     imgThree = randomImg
//   }
//   counter++;
// };
// selectImg();
