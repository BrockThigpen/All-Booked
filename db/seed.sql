select *
from books
where 1
and lower(book_Title) like lower('%?%')
;