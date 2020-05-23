CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;

CREATE TABLE customer(
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(50) NOT NULL,
 address VARCHAR(100) NOT NULL,
 phone INT (10)
);

describe customer;

SHOW TABLES;

describe customer;

