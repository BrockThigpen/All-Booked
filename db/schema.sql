DROP DATABASE IF EXISTS Library_db;
CREATE database  Library_db;

USE   Library_db;

CREATE TABLE books(
  id INT  NOT NULL AUTO_INCREMENT, -- Primary Key
  title VARCHAR(50) NOT NULL, -- hold book title
  authorName VARCHAR(50) NOT NULL, -- hold book author name
  desciption VARCHAR(100) NOT NULL, -- hold book description
  ISBN INT  NULL, -- hold book ISBN
  images VARCHAR(100)  NULL, -- hold book description
  pageNumbers INT  NULL, -- hold book description
  PRIMARY KEY (id)
);
