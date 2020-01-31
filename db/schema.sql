DROP DATABASE IF EXISTS Library_db;
CREATE database  Library_db;

USE   Library_db;

CREATE TABLE books(
  book_id INT  NOT NULL AUTO_INCREMENT, -- Primary Key
  book_Title VARCHAR(50) NOT NULL, -- hold book title
  author_name VARCHAR(50) NOT NULL, -- hold book author name
  desciption VARCHAR(100) NOT NULL, -- hold book description
  ISBN INT  NULL, -- hold book ISBN
  book_image VARCHAR(100)  NULL, -- hold book description
  page_numbers INT  NULL, -- hold book description
  PRIMARY KEY (book_id)
);

CREATE TABLE book_copies(
no_of_copies VARCHAR(50) NOT NULL, -- hold b ook title    
book_id INT  NOT NULL, -- foreign Key
-- CONSTRAINT  book_fk__
CONSTRAINT  book_copies_fk_ FOREIGN KEY(book_id) REFERENCES books(book_id)   -- hold role title
ON UPDATE CASCADE ON DELETE CASCADE  
 );

CREATE TABLE all_users(
card_no INT NOT NULL PRIMARY KEY,
fname VARCHAR(50) NOT NULL, -- hold borrower first name 
lname VARCHAR(50) NOT NULL, -- hold borrower last name 
address_ VARCHAR(50)  NULL, -- hold borrower address
phone INT  NULL, -- hold borrower phone name 
user_name VARCHAR (30)  NOT NULL, -- hold borrower user name 
password_ VARCHAR (30)  NOT NULL, -- hold borrower password
isStaff BOOLEAN  NOT NULL default false, -- hold borrower password 
book_id INT  NOT NULL, -- foreign Key
-- CONSTRAINT  book_fk__
CONSTRAINT  all_users_fk FOREIGN KEY(book_id) REFERENCES books(book_id)   -- hold book id
ON UPDATE CASCADE ON DELETE CASCADE 
);

CREATE TABLE book_loan(
loan_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- Primary Key       
book_id INT  NOT NULL, -- foreign Key
-- CONSTRAINT  book_fk__
CONSTRAINT  book_loan_fk_ FOREIGN KEY(book_id) REFERENCES books(book_id)    
ON UPDATE CASCADE ON DELETE CASCADE,  
card_no  INT  NOT NULL, -- foreign Key
-- CONSTRAINT  book_fk__
CONSTRAINT  all_users_fk_ FOREIGN KEY(card_no) REFERENCES all_users(card_no) ,  
date_out DATE NOT NULL, -- hold book checkout date 
due_date DATE NOT NULL, -- hold book due date 
date_in DATE NOT NULL -- hold book checkout date 
 );
