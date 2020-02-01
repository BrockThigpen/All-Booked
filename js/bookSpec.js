function insertBooks(event) {
    event.preventDefault();
    var books = {
      title: $newItemInput.val().trim(),
      authorName: 
      description:
      ISBN:
      images:
      pageNumbers:
      totalCopies:
      copiesIN:// write to increment this
    };

    $.post("/api/todos", function (data) {
        $.ajax({
            method: "POST",
            url: "/api/todos",
            data: books
          }).then();
        console.log("data", data)
      
  })
};

// If a user sends data to add a new character...
app.post("/api/new", function(req, res) {
    // Take the request...
    var character = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    });

    res.status(204).end();
  });
};
