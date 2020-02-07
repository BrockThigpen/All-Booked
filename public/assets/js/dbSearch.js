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
  var dbTitle = document.getElementById('dbTitle');
  var dbAuthor = document.getElementById('dbAuthor');
  var dbISBN = document.getElementById('dbISBN');
  var searchDB = document.getElementById('site-search');
  var dbResults = document.getElementById('dbResults');

  var search = '';
  dbResults.innerHTML = '';

  if (dbTitle.checked) {
    search = 'title/' + searchDB.value;
  } else if (dbAuthor.checked) {
    search = 'authorName/' + searchDB.value;
  } else if (dbISBN.checked) {
    search = 'ISBN/' + searchDB.value;
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
    console.log(data.length);

    for (i = 0; i < data.length; i++) {
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
      contentDiv.setAttribute('class', 'col s7');
      buttonDiv.setAttribute('class', 'col s3');
      cardButton.setAttribute('data-id', i);

      // Adding ids
      cardImg.setAttribute('id', 'cardImg');
      cardTitle.setAttribute('id', 'cardTitle');
      cardAuthor.setAttribute('id', 'cardAuthor');
      cardYear.setAttribute('id', 'cardYear');
      cardDescription.setAttribute('id', 'cardDescription');
      cardPages.setAttribute('id', 'cardPages');
      cardISBN.setAttribute('id', 'cardISBN');
      cardButton.setAttribute('id', 'cardButton');

      // Defining data
      cardImg.setAttribute('src', data[i].images);
      cardTitle.innerHTML += data[i].title;
      cardAuthor.innerHTML += data[i].authorName;
      cardYear.innerHTML += data[i].year;
      cardDescription.innerHTML += data[i].description;
      cardPages.innerHTML += data[i].pageNumbers;
      cardISBN.innerHTML += data[i].ISBN;
      cardButton.innerHTML += 'Check Out Book!';

      // // Styling will not be dynamic eventually
      // cardDiv.setAttribute('style', 'border:1px solid black; width: 80%; padding: 20px; margin: 30px auto; height: auto;');
      // imgDiv.setAttribute('style', 'display: inline-block;');
      // contentDiv.setAttribute('style', 'display: inline-block;');
      // buttonDiv.setAttribute('style', 'display: inline-block;');
      cardButton.setAttribute('class', 'cardBtn');
      cardTitle.setAttribute('class', 'title');
      cardAuthor.setAttribute('class', 'author');
      cardYear.setAttribute('class', 'year');
      cardDescription.setAttribute('class', 'description');
      cardPages.setAttribute('class', 'pages');
      cardISBN.setAttribute('class', 'isbn');
      cardImg.setAttribute('class', 'img');

      dbResults.append(container);
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
  document.getElementById('dbButton').addEventListener('click', dbBookSearch);
};


$.ajax('/api/book/', {
  type: 'GET',

}).then(function () {
  console.log('it worked');
}
);
