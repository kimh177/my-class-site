let myFlower = document.getElementById("container");

let images = ['Group1.png', 'Group2.png', 'Group3.png', 'Group4.png'];

let randomImage = Math.floor(Math.random() * images.length);

myFlower.style.backgroundImage = "url(" + images[randomImage] + ")";


