// Kacie's AJAX Code
let selectedBook = {
    title: '',
    author: '',
    img: '',
    year: 0,
    description: '',
    pages: 0,
    isbn: 0
}
// Front end variables

function bookSearch() {
    var apiKeyword = document.getElementById('apiKeyword');
    var apiTitle = document.getElementById('apiTitle');
    var apiAuthor = document.getElementById('apiAuthor');
    var apiISBN = document.getElementById('apiISBN');
    var searchAPI = document.getElementById('searchAPI');
    var apiResults = document.getElementById('apiResults');

    var search = '';
    apiResults.innerHTML='';
  
    if(apiKeyword.checked) {
      search = searchAPI.value;
    } else if(apiTitle.checked) {
      search = 'intitle:' + searchAPI.value;
    } else if(apiAuthor.checked) {
      search = 'inauthor:' + searchAPI.value;
    } else if(apiISBN.checked) {
      search = 'isbn:' + searchAPI.value;
    } else {
      alert('Select a search category.');
    }
    console.log(search);
  
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDHWfAVWQPX7UK1qgA-EZvxpQROi2uXe_w',
      dataType: 'json',
      type: 'GET'
    }).then(function(data) {

      for (i=0;i<data.items.length; i++) {
        var cardDiv = document.createElement("div");
        var imgDiv = document.createElement("div");
        var contentDiv = document.createElement("div");
        var buttonDiv = document.createElement("div");
        var cardImg = document.createElement("img");
        var cardTitle = document.createElement("h2");
        var cardAuthor = document.createElement("p");
        var cardYear = document.createElement("p");
        var cardDescription = document.createElement("p");
        var cardPages = document.createElement("p");
        var cardISBN = document.createElement("p");
        var cardButton = document.createElement("button");

        // Giving divs rows and columns
        cardDiv.setAttribute("class", "row");
        cardDiv.setAttribute("data-id", i);
        imgDiv.setAttribute("class", "col s3");
        contentDiv.setAttribute("class", "col s6");
        buttonDiv.setAttribute("class", "col s3");
        cardButton.setAttribute("data-id", i);

        // Defining data
        cardImg.setAttribute("src", data.items[i].volumeInfo.imageLinks.thumbnail);
        cardTitle.innerHTML += data.items[i].volumeInfo.title;
        cardAuthor.innerHTML += data.items[i].volumeInfo.authors[0];
        cardYear.innerHTML += data.items[i].volumeInfo.publishedDate;
        cardDescription.innerHTML += data.items[i].volumeInfo.description;
        cardPages.innerHTML += data.items[i].volumeInfo.pageCount;
        cardISBN.innerHTML += data.items[i].volumeInfo.industryIdentifiers[0].identifier;
        cardButton.innerHTML += "ORDER BOOK!";

        // Styling will not be dynamic eventually
        cardDiv.setAttribute("style", "border:1px solid black; width: 80%; padding: 20px; margin: 30px auto; height: auto;");
        imgDiv.setAttribute("style", "display: inline-block;");
        contentDiv.setAttribute("style", "display: inline-block;");
        buttonDiv.setAttribute("style", "display: inline-block;");
        cardButton.setAttribute("class", "cardBtn");
        cardTitle.setAttribute("class", "title");
        cardAuthor.setAttribute("class", "author");
        cardYear.setAttribute("class", "year");
        cardDescription.setAttribute("class", "description");
        cardPages.setAttribute("class", "pages");
        cardISBN.setAttribute("class", "isbn");

        apiResults.append(cardDiv);
        cardDiv.append(imgDiv);
        cardDiv.append(contentDiv);
        cardDiv.append(buttonDiv);
        imgDiv.append(cardImg);
        contentDiv.append(cardTitle);
        contentDiv.append(cardAuthor);
        contentDiv.append(cardYear);
        contentDiv.append(cardDescription);
        contentDiv.append(cardPages);
        contentDiv.append(cardISBN);
        buttonDiv.append(cardButton);

        console.log(cardDiv.dataset.id)
      }
    });
  }


window.onload= function() {
    document.getElementById('apiButton').addEventListener('click', bookSearch);
}

$(document).on("click", ".cardBtn", function () {
	event.preventDefault();
	// console.log("Hello there");
    var cardID = $(this).data("id");
    console.log(cardID);
    var divNum = document.getElementsByClassName('row')[cardID];
    selectedBook.title = divNum.getElementsByClassName('title')[0].innerText;
    selectedBook.author = divNum.getElementsByClassName('author')[0].innerText;
    selectedBook.year = divNum.getElementsByClassName('year')[0].innerText;
    selectedBook.description = divNum.getElementsByClassName('description')[0].innerText;
    selectedBook.pages = divNum.getElementsByClassName('pages')[0].innerText;
    selectedBook.isbn = divNum.getElementsByClassName('isbn')[0].innerText;
    console.log(selectedBook);
});