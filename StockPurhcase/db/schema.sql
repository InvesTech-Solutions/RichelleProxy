DROP DATABASE IF EXISTS bobbinhood;

CREATE DATABASE bobbinhood;

USE bobbinhood;

CREATE TABLE IF NOT EXISTS stockprice(
	id INT NOT NULL AUTO_INCREMENT,
	stock_name VARCHAR(100) NOT NULL,
	bid DECIMAL(5,2) NOT NULL,
	bid_volume INT NOT NULL,
	ask DECIMAL(5,2) NOT NULL,
	ask_volume INT NOT NULL,
	current_price DECIMAL(5,2) NOT NULL,
	prev_price DECIMAL(5,2) NOT NULL,
	Primary key(id)	
);


-- INSERT INTO stockprice (id, stock_name, current_price, prev_price) VALUES(1, "facebook", 23.34, 23.00)