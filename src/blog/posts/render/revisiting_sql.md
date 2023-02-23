
# Revisiting SQL

Hi everyone, today I am going to review some SQL commands. My goal is to take a little bit of rust out :rofl:

The following post will be structured as a series of descriptions and commands. The database
being used and the ER diagram will be in the addendum, at the end of the post.

## Selecting

---

Select all columns from table film

```sql
select * from film;
```

---

Select all film released from 2004 to 2006, that have less than 60 minutes of duration.

```sql
select * from film;





select name, customers_number from (
    (select name, customers_number, 1 as ord from lawyers where customers_number = (select MAX(customers_number) from lawyers) limit 1) union
    (select name, customers_number, 2 as ord from lawyers where customers_number = (select MIN(customers_number) from lawyers) limit 1) union
    select name, customers_number, 3 as ord from (values ('Average', (select CAST(AVG(customers_number) as int) from lawyers))) q(name, customers_number)
) x order by ord;







INSERT INTO table_name (column1, column2, column3, ...)
VALUES ('Average', (select AVG(length) as Average from film)); 

```


## Addendum

The samples database in use is the dvdrental available [here](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/). Check them out if you want more details.

Here is the ER diagram:

![DVD Rental ER Diagram](https://www.postgresqltutorial.com/wp-content/uploads/2018/03/dvd-rental-sample-database-diagram.png "ER Diagram")