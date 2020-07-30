function myFunction(itm){
    if (itm == "Blonde Caffè Latte"){
      $('.picCoffee').html(`<h2>Blonde Caffè Latte</h2><br><img src="/img/coffee4.jpeg" style="width:300px; height:300px;" >`);
    } else  if (itm == "Caffe Americano"){
        $('.picCoffee').html(`<img src="/coffee/americano.jpeg" >`);
    }else  if (itm == "Caffè Latte"){
        $('.picCoffee').html(`<img src="/coffee/caffee-latte.jpeg" >`);
    }  else  if (itm == "Chai Tea Latte"){
        $('.picCoffee').html(`<h2>Chai Tea Latte</h2><br><img src="/coffee/chai tea latte.jpeg" >`);
    } else  if (itm == "Cinnamon Dolce Latte"){
        $('.picCoffee').html(`<h2>Cinnamon Dolce Latte</h2><br><img src="/coffee/cinnamon dolce.jpeg" >`);
    } else  if (itm == "Coconutmilk Cascara Latte"){
        $('.picCoffee').html(`<h2>Coconutmilk Cascara Latte</h2><br><img src="/coffee/coconut-cascara-latte.jpeg" >`);
    } else  if (itm == "London Fog Tea Latte"){
        $('.picCoffee').html(`<h2>London Fog Tea Latte</h2><br><img src="/coffee/london fog tea latte.jpeg" >`);
    }else  if (itm == "Matcha Green Tea Latte"){
        $('.picCoffee').html(`<h2>Matcha Green Tea Latte</h2><br><img src="/coffee/matcha green tea latte.jpg" >`);
    }else  if (itm == "Royal English Breakfast Tea Latte"){
        $('.picCoffee').html(`<h2>Royal English Breakfast Tea Latte</h2><br><img src="/coffee/royalTeaLatte.jpeg" >`);
    }else  if (itm == "Almond Mocha Latte"){
        $('.picCoffee').html(`<h2>Almond Mocha Latte</h2><br><img src="/coffee/almond-mocha-latte.jpg" >`);
    }else  if (itm == "Kreme De Kona Latte"){
        $('.picCoffee').html(`<h2>Kreme De Kona Latte</h2><br><img src="/coffee/Kreme De Kona Latte.jpeg" >`);
    }else  if (itm == "Nutty Irishman Latte"){
        $('.picCoffee').html(`<h2>Nutty Irishman Latte</h2><br><img src="/coffee/nutty-irishman-latte.png" >`);
    }else  if (itm == "Caramel Vanilla Latte"){
        $('.picCoffee').html(`<h2>Caramel Vanilla Latte</h2><br><img src="/coffee/Caramel-Latte.jpg" >`);
    }else  if (itm == "Snickers Latte"){
        $('.picCoffee').html(`<h2>Snickers Latte</h2><br><img src="/coffee/snickers-latte.jpeg" >`);
    }else {
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