// Kacie's AJAX Code
let selectedBook = {
  title: '',
  author: '',
  img: '',
  year: 0,
  description: '',
  pages: 0,
  isbn: 0,
  totalCopies: 1,
  copiesIn: 1
};

// Front end variables
function bookSearch() {
  console.log('It worked here....');
  var apiTitle = document.getElementById('apiTitle');
  var apiAuthor = document.getElementById('apiAuthor');
  var apiISBN = document.getElementById('apiISBN');
  var searchAPI = document.getElementById('search-input');
  var apiResults = document.getElementById('apiResults');

  var search = '';
  apiResults.innerHTML = '';

  if (apiTitle.checked) {
    search = 'intitle:' + searchAPI.value;
  } else if (apiAuthor.checked) {
    search = 'inauthor:' + searchAPI.value;
  } else if (apiISBN.checked) {
    search = 'isbn:' + searchAPI.value;
  } else {
    alert('Select a search category.');
  }
  console.log(search);

  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDHWfAVWQPX7UK1qgA-EZvxpQROi2uXe_w',
    dataType: 'json',
    type: 'GET'
  }).then(function (data) {

    for (i = 0; i < data.items.length; i++) {
      var container = document.createElement('div');
      var rowDiv = document.createElement('div');
      var imgDiv = document.createElement('div');
      var contentDiv = document.createElement('div');
      var buttonDiv = document.createElement('div');
      var cardImg = document.createElement('img');
      var cardTitle = document.createElement('h2');
      var cardAuthor = document.createElement('p');
      var cardYear = document.createElement('p');
      var cardDescription = document.createElement('p');
      var cardPages = document.createElement('p');
      var cardISBN = document.createElement('p');
      var cardButton = document.createElement('button');

      // Giving divs rows and columns
      container.setAttribute('class', 'container');
      rowDiv.setAttribute('class', 'row');
      rowDiv.setAttribute('data-id', i);
      imgDiv.setAttribute('class', 'col s2');
      contentDiv.setAttribute('class', 'col s6');
      buttonDiv.setAttribute('class', 'col s4');
      cardButton.setAttribute('class', 'cardBtn btn waves-effect waves-light darken');
      cardButton.setAttribute('type', 'submit');
      cardButton.setAttribute('name', 'action');
      cardButton.setAttribute('data-id', i);

      // Adding ids
      cardImg.setAttribute('id', 'cardImg');
      cardTitle.setAttribute('id', 'cardTitle');
      cardAuthor.setAttribute('id', 'cardAuthor');
      cardYear.setAttribute('id', 'cardYear');
      cardDescription.setAttribute('id', 'cardDescription');
      cardPages.setAttribute('id', 'cardPages');
      cardISBN.setAttribute('id', 'cardISBN');

      // Defining data
      cardImg.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail);
      cardTitle.innerHTML += data.items[i].volumeInfo.title;
      cardAuthor.innerHTML += data.items[i].volumeInfo.authors;
      cardYear.innerHTML += data.items[i].volumeInfo.publishedDate;
      cardDescription.innerHTML += data.items[i].volumeInfo.description;
      cardPages.innerHTML += data.items[i].volumeInfo.pageCount;
      cardISBN.innerHTML += data.items[i].volumeInfo.industryIdentifiers[0].identifier;
      cardButton.innerHTML += 'Add Book to our Library Stock';

      cardTitle.setAttribute('class', 'title');
      cardAuthor.setAttribute('class', 'author');
      cardYear.setAttribute('class', 'year');
      cardDescription.setAttribute('class', 'description');
      cardPages.setAttribute('class', 'pages');
      cardISBN.setAttribute('class', 'isbn');
      cardImg.setAttribute('class', 'img');

      apiResults.append(container);
      container.append(rowDiv);
      rowDiv.append(imgDiv);
      rowDiv.append(contentDiv);
      rowDiv.append(buttonDiv);
      imgDiv.append(cardImg);
      contentDiv.append(cardTitle);
      contentDiv.append(cardAuthor);
      contentDiv.append(cardYear);
      contentDiv.append(cardDescription);
      contentDiv.append(cardPages);
      contentDiv.append(cardISBN);
      buttonDiv.append(cardButton);

      console.log(rowDiv.dataset.id);

    }
  });
}

window.onload = function () {
  document.getElementById('apiButton').addEventListener('click', bookSearch);
};

$(document).on('click', '.cardBtn', function () {
  event.preventDefault();

  // variable stores the id# of card clicked
  var cardID = $(this).data('id');

  selectedBook.title = document.getElementsByClassName('title')[cardID].innerText;
  selectedBook.author = document.getElementsByClassName('author')[cardID].innerText;
  selectedBook.year = document.getElementsByClassName('year')[cardID].innerText;
  selectedBook.description = document.getElementsByClassName('description')[cardID].innerText;
  selectedBook.pages = document.getElementsByClassName('pages')[cardID].innerText;
  selectedBook.isbn = document.getElementsByClassName('isbn')[cardID].innerText;
  selectedBook.img = document.getElementsByClassName('img')[cardID].src;

  // GET API call to see if current ISBN number is already stored in db
  $.ajax({
    url: 'api/book/isbn/' + selectedBook.isbn,
    dataType: 'json',
    type: 'GET'

  }).then(function (data) {
    console.log(data);

    console.log('ISBN:' + selectedBook.isbn);
    console.log(selectedBook);

    // if the isbn exists in the db, update it's totalCopies and copiesIN'
    if (data && data.length > 0) {

      var dataObject = {
        totalCopies: data[0].totalCopies + 1,
        copiesIN: data[0].copiesIN + 1
      };

      console.log(dataObject);

      $.ajax({
        method: 'PUT',
        url: 'api/books/isbn/' + selectedBook.isbn,
        data: dataObject,
        // contentType: 'application/json'
      }).then(function (data) {
        console.log(data);
        console.log('It has updated!');
        document.getElementsByClassName('cardBtn')[cardID].innerText = 'Book Added To Library';
        setTimeout(function () {
          document.getElementsByClassName('cardBtn')[cardID].innerText = 'Add Book to our Library Stock';
        }, 2000);
        selectedBook = {
          title: '',
          author: '',
          img: '',
          year: 0,
          description: '',
          pages: 0,
          isbn: 0,
          totalCopies: 1,
          copiesIn: 1
        };
      });
      // if an empty array is returned, create new row in db with values
    } else {
      console.log('Does not exist');
      console.log(cardID);

      console.log(selectedBook);

      //create a new object to hold the books when add a book is clicked
      var orderedBooks = {
        title: selectedBook.title,
        authorName: selectedBook.author,
        images: selectedBook.img,
        year: selectedBook.year,
        description: selectedBook.description,
        pageNumbers: selectedBook.pages,
        ISBN: selectedBook.isbn,
        totalCopies: selectedBook.totalCopies,
        copiesIN: selectedBook.copiesIn
      };

      console.log(orderedBooks);

      // Send the POST request.
      $.ajax('/api/book', {
        type: 'POST',
        data: orderedBooks
      }).then(
        function (data) {
          // Reload the page to get the updated list
          console.log('data', data);
          document.getElementsByClassName('cardBtn')[cardID].innerText = 'Book Added To Library';
          setTimeout(function () {
            document.getElementsByClassName('cardBtn')[cardID].innerText = 'Add Book to our Library Stock';
          }, 2000);
          selectedBook = {
            title: '',
            author: '',
            img: '',
            year: 0,
            description: '',
            pages: 0,
            isbn: 0,
            totalCopies: 1,
            copiesIn: 1
          };
        }
      );
    }
  });
});