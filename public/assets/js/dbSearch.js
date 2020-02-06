// let selectedBook = {
//   title: '',
//   author: '',
//   img: '',
//   year: 0,
//   description: '',
//   pages: 0,
//   isbn: 0
// };
// Front end variables

function dbBookSearch() {
  var apiKeyword = document.getElementById('apiKeyword');
  var apiTitle = document.getElementById('apiTitle');
  var apiAuthor = document.getElementById('apiAuthor');
  var apiISBN = document.getElementById('apiISBN');
  var searchAPI = document.getElementById('searchAPI');
  var apiResults = document.getElementById('apiResults');

  var search = '';
  apiResults.innerHTML = '';

  if (apiKeyword.checked) {
    search = searchAPI.value;
  } else if (apiTitle.checked) {
    search = searchAPI.value;
  } else if (apiAuthor.checked) {
    search = 'authorName:' + searchAPI.value;
  } else if (apiISBN.checked) {
    search = 'ISBN:' + searchAPI.value;
  } else {
    alert('Select a search category.');
  }
  console.log(search);

  $.ajax({
    url: 'api/book/' + search,
    dataType: 'json',
    type: 'GET'

  }).then(function (data) {
    console.log('data', data);

    for (i = 0; i < data.length; i++) {
      var cardDiv = document.createElement('div');
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
      cardDiv.setAttribute('class', 'row');
      cardDiv.setAttribute('data-id', i);
      imgDiv.setAttribute('class', 'col s3');
      contentDiv.setAttribute('class', 'col s6');
      buttonDiv.setAttribute('class', 'col s3');
      cardButton.setAttribute('data-id', i);

      // Defining data
      cardImg.setAttribute('src', data[i].images);
      //cardImg.setAttribute('src', data[i].images);
      cardTitle.innerHTML += data[i].title;
      cardAuthor.innerHTML += data[i].authorName;
      cardYear.innerHTML += data[i].year;
      cardDescription.innerHTML += data[i].description;
      cardPages.innerHTML += data[i].pageNumber;
      cardISBN.innerHTML += data[i].ISBN;
      cardButton.innerHTML += 'CHECKOUT BOOK!';

      // Styling will not be dynamic eventually
      cardDiv.setAttribute('style', 'border:1px solid black; width: 80%; padding: 20px; margin: 30px auto; height: auto;');
      imgDiv.setAttribute('style', 'display: inline-block;');
      contentDiv.setAttribute('style', 'display: inline-block;');
      buttonDiv.setAttribute('style', 'display: inline-block;');
      cardButton.setAttribute('class', 'cardBtn');
      cardTitle.setAttribute('class', 'title');
      cardAuthor.setAttribute('class', 'author');
      cardYear.setAttribute('class', 'year');
      cardDescription.setAttribute('class', 'description');
      cardPages.setAttribute('class', 'pages');
      cardISBN.setAttribute('class', 'isbn');
      cardImg.setAttribute('class', 'img');

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

      console.log(cardDiv.dataset.id);
    }
  });
}


//});


$.ajax('/api/book/', {
  type: 'GET',

}).then(function (){
  console.log('it worked');
}
);
window.onload = function () {
  document.getElementById('apiButton').addEventListener('click', dbBookSearch);
};