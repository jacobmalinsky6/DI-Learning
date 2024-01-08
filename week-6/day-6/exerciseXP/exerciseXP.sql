insert into items (item, price) values ('large desk', 300);
insert into items (item, price) values ('fan', 80);
select * from items

insert into customers (first_name, last_name) values ('Greg', 'Jones');
insert into customers (first_name, last_name) values ('Sandra', 'Jones');
insert into customers (first_name, last_name) values ('Scott', 'Scott');
insert into customers (first_name, last_name) values ('Trevor', 'Green');
insert into customers (first_name, last_name) values ('Melanie', 'Johnson');
select * from customers

select * from items WHERE price > 80; 
select * from items WHERE price <= 300; 
select * from customers where last_name='Smith';
select * from customers where last_name='Jones';
select * from customers where first_name!='Scott';
