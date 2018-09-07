$(function() {
    $(".eat").on("click", function(event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten")

        var newEatenState = {
            devoured: eaten
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                console.log(`Changed devoured status to ${eaten}`)
                //reload the page
                location.reload();
            }
        );
    });

    $(".create-form").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#burgs").val().trim()
        }

        //send the data over
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger")
                location.reload();
            }
        )
    });

})