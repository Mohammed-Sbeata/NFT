BEGIN;
DROP TABLE IF EXISTS users, products,carts CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    image TEXT,
    budget NUMERIC(10,2)
);
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL UNIQUE,
    image TEXT ,
    floor FLOAT,
    userId int ,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE cart(
    id SERIAL PRIMARY KEY,
    userId int ,
    productId int,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
    FOREIGN KEY (productId) REFERENCES products(id) ON DELETE CASCADE ON UPDATE CASCADE,
);

COMMIT;