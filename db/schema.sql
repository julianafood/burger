CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	enjoyed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
