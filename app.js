'use strict';

// global variables
// var counter = 0;

// constructor
//
function Products(productName, pathWay) {
  this.productName = productName;
  this.pathWay = pathWay;

}

var bag = new Products ('r2d2', '/img/bag.jpg');
var banana = new Products ('banana', '/img/banana.jpg');
var bathroom = new Products('bathroom', '/img/bathroom.jpg');
var boots = new Products('boots','/img/boots.jpg');
var breakfast = new Products('breakfast', '/img/breakfast.jpg');
var bubblegum = new Products('bubblegum', '/img/bubble.jpg');
var chair = new Products('chair', '/img/chair.jpg');
var cthulhu = new Products('cthulhu', '/img/cthulhu.jpg');
var dogDuck = new Products ('dog-duck','/img/dog-duck.jpg');
var dragon = new Products ('dragon', '/img/dragon.jpg');
var pen = new Products('pen', '/img/pen.jpg');
var petSweep = new Products('pet-sweep', '/img/pet-sweep.jpg');
var scissor = new Products('scissor','/img/scissor.jpg');
var shark = new Products('shark', '/img/sharks.jpg');
var sweep = new Products ('sweep', '/img/sweep.png');
var tauntaun = new Products('tauntaun', '/img/tauntaun.jpg');
var unicorn = new Products('unicorn', '/img/unicorn.jpg');
var usb = new Products('usb', '/img/usb.gif');
var waterCan = new Products('water-can', '/img/water-can.jpg');
var wineGlass = new Products('wine-glass', '/img/wine-glass.jpg');

var pictures = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissor, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

var imageOne = document.getElementById('image-one');
// console.log(chairImage);
imageOne.setAttribute('src', 'img/unicorn.jpg');

//
//
// var randomImg = function(){
//   return Math.floor(Math.random() * allImages.length)
// };
//
// var selectImg = function() {
//   var firstGen = document.getElementById('image_one');
//   chair.setAttribute('src', 'img/chair.jpg');
//   var imgOne = randomImg;
//   counter++;
//
//   var secondGen = document.getElementById('image_two');
//   var imgTwo = randomImg;
//   while (imgOne === imgTwo) {
//     imgTwo = randomImg
//   }
//   counter++;
//
//   var thirdGen = document.getElementById('image_three');
//   var imgThree = randomImg;
//   while (imgOne === imgTwo || imgTwo === imgThree || imgThree === imgOne) {
//     imgThree = randomImg
//   }
//   counter++;
// };
//
