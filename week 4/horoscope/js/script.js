document.getElementById("enter").onclick= zodiacSign; //when user hits enter function zodiac runs

function zodiacSign (){
  let month = document.getElementById("month").value; // does the system assign value
  let day = document.getElementById("day").value;
  let result = "Please enter a valid birthday"; //in case user inputs something wrong

if((month == 1 && day >=20)||(month == 2 && day <= 18)){
  result = ("Aquarius: Yoda");
  document.getElementById("description").innerHTML = "As an Aquarius, you are wise and powerful."
  document.getElementById("zodiacImage").innerHTML = "<img src='images/yoda.jpg'>"; //image

} else if ((month == 2 && day >=19) || (month==3 && day <= 20)){
  result = ("Pisces: Obi-Wan Kenobi");
  document.getElementById("description").innerHTML = "You are wise, kind, and very spiritual, but there is a mystery in you that nobody knows.";
  document.getElementById("zodiacImage").innerHTML = "<img src='images/obiWan.jpeg'>";

} else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)){
    result = ("Aries: Princess Leia Organa");
    document.getElementById("description").innerHTML = "You are a motivated, goal-oriented, and fierce leader.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/leia.jpg'>";

  }else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)){
    result = ("Taurus: Chewbacca");
    document.getElementById("description").innerHTML = "You are a good friend and a loyal companion to have.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/chewbacca.jpg'>";

  }else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)){
    result = ("Gemini: Luke Skywalker");
    document.getElementById("description").innerHTML = "You are a fast-learner and have the ability to change the world, but you are very inconsistent.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/luke.jpeg'>";

  }else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)){
    result = ("Cancer: R2-D2");
    document.getElementById("description").innerHTML = "You are caring and loyal to those around you, but you're also a bit moody.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/r2d2.jpg'>";

  }else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)){
    result = ("Leo: Darth Vader");
    document.getElementById("description").innerHTML = "You cannot accept criticism and have a bossy nature, but your good qualities like loyalty, determination and fierce leadership makes up for that.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/vader.jpg'>";

  }else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)){
    result = ("Virgo: C-3PO");
    document.getElementById("description").innerHTML = "You are a kind and analytical thinker. Everybody likes having you around.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/3cpo.jpg'>";

  }else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)){
    result = ("Libra: BB-8");
    document.getElementById("description").innerHTML = "You are cute and loyal, but also complicated.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/bb8.jpeg'>";

  }else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)){
    result = ("Scorpio: Emperor Palpatine");
    document.getElementById("description").innerHTML = "Everybody recognizes you as ambitious, but you always have a hidden agenda in your favor.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/palpatine.png'>";

  }else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)){
    result = ("Sagittarius: Han Solo");
    document.getElementById("description").innerHTML = "You are fiery, passionate and independent who loves adventures.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/han.webp'>";

  }else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)){
    result = ("Capricorn: Grand Moff Tarkin");
    document.getElementById("description").innerHTML = "Your practical and disciplined mindset describes you.";
    document.getElementById("zodiacImage").innerHTML = "<img src='images/moff.jpg'>";

  }else {
    alert("Invalid birthday");
  } //conditional ends

document.getElementById("result").innerHTML= result;
}   //function zodiac ends
