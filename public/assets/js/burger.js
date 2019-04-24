$(function() {
    $(".change-enjoyed").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newenjoyed");
  
      var newBurgerState = {
        burger: newBurger
      };
  
      $.ajax("/api/burger/" + id, {
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
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
       
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
           
          location.reload();
        }
      );
    });
  });
  