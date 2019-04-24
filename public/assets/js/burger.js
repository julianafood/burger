$(function() {
    $(".change-enjoyed").on("click", function(event) {
      var id = $(this).data("id");
      var newEnjoyed = $(this).data("newenjoyed");
  
      var newEnjoyedState = {
        burger: newEnjoyed
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newEnjoyedState
      }).then(
        function() {
          console.log("changed burger to", newBurger);
        
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        enjoyed: $("[name=hungry]:checked").val().trim()
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
  