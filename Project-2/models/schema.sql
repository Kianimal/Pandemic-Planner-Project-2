DROP DATABASE IF EXISTS prepDB;
CREATE database prepDB;

USE prepDB;

CREATE TABLE users(
  user_id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(255),
  user_pass VARCHAR(255),
  score_val INT(10) NOT NULL,
  self_scored_1 INT(10),
  self_scored_2 INT(10),
  self_scored_3 INT(10),
  self_scored_4 INT(10),
  self_scored_5 INT(10),
  inventory_1 INT(10),
  inventory_2 INT(10),
  inventory_3 INT(10),
  inventory_4 INT(10),
  inventory_5 INT(10),
  evac_plan BOOLEAN NOT NULL,
  trade_status BOOLEAN NOT NULL,
  PRIMARY KEY (user_id)
);

INSERT INTO users (username, user_pass, score_val, self_scored_1, self_scored_2,
self_scored_3, self_scored_4, self_scored_5, inventory_1, inventory_2, inventory_3,
inventory_4, inventory_5, evac_plan, trade_status)VALUES("Test","TESTPW",1,1,1,1,1,1,1,1,1,1,1,FALSE,FALSE);

INSERT INTO users (username, user_pass, score_val, self_scored_1, self_scored_2,
self_scored_3, self_scored_4, self_scored_5, inventory_1, inventory_2, inventory_3,
inventory_4, inventory_5, evac_plan, trade_status)VALUES("Test2","TESTPW",3,4,2,2,1,5,1,3,4,2,5,TRUE,FALSE);

INSERT INTO users (username, user_pass, score_val, self_scored_1, self_scored_2,
self_scored_3, self_scored_4, self_scored_5, inventory_1, inventory_2, inventory_3,
inventory_4, inventory_5, evac_plan, trade_status)VALUES("Test3","TESTPW",5,5,5,5,5,5,5,5,5,5,5,TRUE,TRUE);

SELECT * FROM users;