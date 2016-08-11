$(document).ready(function() {
  $("form#spiritAnimal").submit(function(event){
    event.preventDefault();
    var food = parseInt($("select#food").val());
    console.log(food);
    var cities = parseInt($("select#cities").val());
    console.log(cities)
    var colors = parseInt($("select#color").val());
    console.log
    var spiritNumber = food+cities+colors;
    console.log(spiritNumber);

    if (spiritNumber <= 4) {
      $('#outPut').html('<img src="img/amoeba.jpg"> <p>Your Spirit Animal is: amoeba</p>');
    } else if (spiritNumber <= 6) {
      $('#outPut').html('<img src="img/seaPig.jpg"> <p>Your Spirit Animal is: seaPig</p>');
    } else if (spiritNumber <= 8) {
      $('#outPut').html('<img src="img/Chupacabra_4.jpg"> <p>Your Spirit Animal is: chupacabra</p>');
    } else if (spiritNumber <= 10) {
      $('#outPut').html('<img src="img/hedgehog.jpg"> <p>Your Spirit Animal is: hedgehog</p>');
    } else if (spiritNumber <= 12) {
      $('#outPut').html('<img src="img/hedgehog.jpg"> <p>Your Spirit Animal is: jackalope</p>');
    } else if (spiritNumber <=14) {
      $('#outPut').html('<img src="img/nautilus.jpg"><p>Your Spirit Animal is: nautilus</p>');
    } else {
      $('#outPut').html('<img src="img/sasquatch.gif"><p>Your Spirit Animal is: sasquatch</p>');
    }

    });
});


//     var amoeba =< 5;
//     var chupacabra =< ;
//     var hedgehog =< 6;
//     var jackalope =< 9;
//     var nautilus =< 12;
//     var seaPig =< 15;
//     var sasquatch =< 18
//
// }
