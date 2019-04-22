$(function() {
    $(".change-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newsleep");
  
      var newBurgerState = {
        burger: newBurger
      };
  
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newBurgerItem
      }).then(
        function() {
          console.log("changed burger to", newBurger);
        
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=burger]:checked").val().trim()
      };
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new burger");
       
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
           
          location.reload();
        }
      );
    });
  });
  