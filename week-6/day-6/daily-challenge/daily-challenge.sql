--1. Count how many students are in the table.
SELECT COUNT(*) FROM STUDENTS 
--2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO students (first_name, last_name, birth_date) 
VALUES
(' ', ' ', ' ');
--YOU GET A SYNTAX ERROR