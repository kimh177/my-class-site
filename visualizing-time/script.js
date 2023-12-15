function updateTime() {
  
    let today = new Date();

    let currentMonth = today.getMonth();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   
    let currentDate = today.getDate();
    let currentYear = today.getFullYear();
    
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSeconds = today.getSeconds();
    
    let myDate = document.getElementById("dateHere");
    let myTime = document.getElementById("timeHere");
    let myText = document.getElementById("textHere");
      
      if(currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
    
      
      if(currentMinute < 10) {
        currentMinute = "0" + currentMinute;
      }
      
      if(currentHour > 12) {
        currentHour = currentHour - 12;
      }

      
    myDate.innerHTML = months[currentMonth] + " " + currentDate + ", " + currentYear;
    myTime.innerHTML = currentHour + ":" + currentMinute + ":" + currentSeconds;
      
      
      if(currentHour == 8 && currentMinute == 0) {
        myText.innerHTML = "Make coffee!"
      }
      
      if(currentHour == 8 && currentMinute == 5) {
        myText.innerHTML = "Coffee is ready!";
      }
      
      if(currentHour == 8 && currentMinute == 6) {
        myText.innerHTML = "Pour coffee!"
      }
      
      if(currentHour == 8 && currentMinute == 7) {
        myText.innerHTML = "Blow on coffee!"
      }
      
      if(currentHour == 8 && currentMinute == 11) {
        myText.innerHTML = "Drink coffee!"
        // myText.innerHTML += '<img src="https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg">'
      }
      
      
    }
    
    setInterval(updateTime, 1000);



    let bodyElem = document.body;

document.onkeydown = function(e) {
    if(e.key == " "){
        bodyElem.classList.toggle("coffee");

    }
}

document.onkeyup = function(e) {
    bodyElem.classList.remove("coffee");
}