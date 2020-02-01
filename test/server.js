function bookSearch() {
  var search = '';
  document.getElementById('results').innerHTML='';
  console.log(search);

  if(document.getElementById('keyword').checked) {
    search = document.getElementById('search').value;
  } else if(document.getElementById('title').checked) {
    search = 'intitle:' + document.getElementById('search').value;
  } else if(document.getElementById('author').checked) {
    search = 'inauthor:' + document.getElementById('search').value;
  } else if(document.getElementById('isbn').checked) {
    search = 'isbn:' + document.getElementById('search').value;
  } else {
    alert('nope');
  }

  $.ajax({
    url: 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDHWfAVWQPX7UK1qgA-EZvxpQROi2uXe_w',
    dataType: 'json',
    type: 'GET'
  }).then(function(data) {
    for (i=0;i<data.items.length; i++) {
      results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '</h2>';
      results.innerHTML +='<p>Author: ' + data.items[i].volumeInfo.authors[i] + '</p>';
      results.innerHTML +='<p>Description: ' + data.items[i].volumeInfo.description + '</p>';
      results.innerHTML +='<p>ISBN: ' + data.items[i].volumeInfo.industryIdentifiers[0].identifier + '</p>';
      results.innerHTML +='<p>Page Count: ' + data.items[i].volumeInfo.pageCount + '</p>';
      results.innerHTML +='<img src="' + data.items[i].volumeInfo.imageLinks.thumbnail + '">';
    }
  });
}

document.getElementById('button').addEventListener('click', bookSearch);