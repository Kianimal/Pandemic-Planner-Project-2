DROP DATABASE IF EXISTS prepDB;
CREATE database prepDB;

USE prepDB;

CREATE TABLE users(
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(255),
  userpass VARCHAR(255),
  email VARCHAR(255),
  scoreVal INT(10),
  -- shelter INT(10),
  -- evac INT(10),
  -- vehicle INT(10),
  -- cash INT(10),
  -- food INT(10),
  -- medication INT(10),
  -- sanitizer INT(10),
  -- toiletries INT(10),
  -- masks INT(10),
  -- water INT(10),
  PRIMARY KEY (id)
);

INSERT INTO users (username, userpass, scoreVal, shelter, evac,
vehicle, cash, food, medication, sanitizer, toiletries,
masks, water)VALUES("Test","testpw",1,1,1,1,1,1,1,1,1,1,1,FALSE,FALSE);

SELECT * FROM users;