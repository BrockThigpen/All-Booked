// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eaten").on("click", function(event) {
      var id = $(this).data("id");

      var neweatState = {
        devour_it: false,
      };

      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: neweatState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerValue").val().trim(),
          devour_it: true,
        };
    
        // Send the POST request.
        $.ajax("/api/burger/", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
$(".delete-burger").on("click", function(event) {
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burger/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );

/**  Here is the event listener to clear the eaten burgers */
// var clearBtn = document.querySelector("#clear");
// var divContEL = document.querySelector(".container2")
// document.addEventListener("click", function (event) {
//   if (event.target === clearBtn) {
//     divContEL.innerHTML = ''
      
//   }
// })
});
});

/**  Here is the event listener to clear the eaten burgers */
var addBtn = document.querySelector('apiButton');
//var divContEL = document.querySelector(".container2")
document.addEventListener('click', function (event) {
  if (event.target === addBtn) {
    //someFunc;
    var id = this.data("id");
    console.log('book id', id)
    var orderBook = {
        title: req.body.title,
        authorName : req.body.author,
        images :     req.body.img,
        year :       req.body.year,
        desciption : req.body.desciption,
        pageNumbers: req.body.pages,
	    ISBN :       req.body.ISBN,
      };

      // Send the PUT request.
      $.ajax("/api/books/" + id, {
        type: "POST",
        data: orderBook
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  }

});

function addBooks(){

 var newBook ={
     title: 


 }




}
