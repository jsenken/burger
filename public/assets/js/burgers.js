$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("this fired also");
    
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: false
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new Burger");
                location.reload();
            }
        );
    });
    $(".change-eat").on("click", function(event) {
        console.log("this fired")
        var id = $(this).data("id");
        var newBurger = $(this).data("newBurger");
        var newEatState = {
            devoured : true
        };
    
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed eat to", newBurger);
                location.reload();
            }
        );
    });
});





//needed to undevour something