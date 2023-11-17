let letters = document.getElementsByClassName("letter");

console.log(letters);

let images = ['image1.png', 'image2.png', 'image3.png', 'image4.png']

let randomImage = Math.floor(Math.random() * images.length)

letters[Math.floor(Math.random() * letters.length)].innerHTML = "<img src=" + images[randomImage] + ">";