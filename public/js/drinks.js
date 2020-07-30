function myFunction(itm){
    if (itm == "Blonde Caffè Latte"){
      $('.picCoffee').html(`<img src="/img/coffee4.jpeg" >
      <img src="/img/coffee4.jpeg" >`);
    } else  if (itm == "Caffe Latte"){
     $('.picCoffee').html(`<img src="/img/coffee2.jpeg" >`);
    } else  if (itm == "Chai Tea Latte"){
        $('.picCoffee').html(`<img src="/img/coffee3.jpeg" >`);
    } else  if (itm == "Cinnamon Dolce Latte"){
        $('.picCoffee').html(`<img src="/img/coffee1.png" >`);
    } else  if (itm == "Coconutmilk Cascara Latte"){
        $('.picCoffee').html(`<img src="/img/coffee4.jpeg" >`);
    } else {
        $('.picCoffee').html(`<img src="/img/coffee4.jpeg" >`);
    }
   };

$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newLatte = {
            drink_name: $("#newLatte").val().trim(),
            drank: 0
        };

        $.ajax("/api/lattes", {
            type: "POST",
            data: newLatte
        }).then(function() {
            console.log("Added new Latte");
            location.reload();
        });
    });

    $(".drinkLatte").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var drinkState = {
            drank: 1
        };

        $.ajax("/api/lattes/" + id, {
            type: "PUT",
            data: drinkState
        }).then(function() {
            console.log("Latte drank");
            location.reload();
        });
    });

    $(".trashLatte").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/lattes/" + id
        }).then(location.reload());
    });

})