DROP DATABASE IF EXISTS some_db

CREATE DATABASE some_db

USE some_db

CREATE TABLE worker (
    worker_id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    salary INT(256),
    workplace_id INT,
    PRIMARY KEY(worker_id)
);

CREATE TABLE workplace (
    workplace_id INT NOT NULL,
    name VARCHAR(300),
    PRIMARY KEY(workplace_id)
)

INSERT INTO worker (some_data_id, first_name, last_name, salary, workplace_id)
VALUES (1, "Nick", "Adams", 25000, 1),
       (2, "John", "Doe", 125000, 2),
       (3, "Mike", "Smith", 3000, 2),
       (4, "Jane", "Doe", 2500000, 3),
       (5, "Walter", "Zimmerman", 123456, 1);

INSERT INTO workplace (workplace_id, name)
VALUES (1, "Texas"),
       (2, "California"),
       (3, "Nevada"),
       (4, "Illinois")

SELECT *
FROM workplace INNER JOIN worker
ON worker.worker_id = workplace.workplace_id;

SELECT first_name from workers
WHERE id = 1;

SELECT * 
FROM workers ORDER BY last_name DESC;

SELECT * 
FROM workers ORDER BY last_name ASC;

SELECT * 
FROM workers where salary > 10000;



UPDATE worker
SET salary = 8000000
WHERE id = 2;

DELETE FROM workplace
WHERE id = 4;

ALTER TABLE workplace
add testCol VARCHAR(250);

ALTER TABLE workplace
DROP COLUMN testCol;








