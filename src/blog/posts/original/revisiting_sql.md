---
title: Revisiting SQL
description: Hello! In this post I am going to revisit SQL. In the lenses of PostgreSQL.
tags: sql
---

Hi everyone, today I am going to review some SQL commands. My goal is to take a little bit of rust out :rofl:

The following post will be structured as a series of descriptions and commands. The database
being used and the ER diagram will be in the addendum, at the end of the post.

## Selecting

---

Select all columns from table film

```sql
-- Plain and simple select all

select * from film;
```

---

Select any 3 films released from 2004 to 2006, that have less than 60 minutes of duration.

```sql
-- Simple use of logical operators and LIMIT() function

select title
from film
where release_year >= 2004 and release_year <= 2006 and length < 60 limit 3;

------------------
      title       
------------------
 Grosse Wonderful
 Airport Pollock
 Ace Goldfinger
 ------------------
```

---

Select 10 random films in which 5 of them are short films (less than 60 minutes in our case) and
the rest are feature films.

```sql
-- Here, we are going to perform two selections and unify them. Each one will 
-- get 5 random short or feature films, respectively, using the order by random(). 

-- I used UNION ALL, instead of UNION, because there is no risk of duplications, 
-- so the performance is improved.

(select title,
       case when length < 60 then 'SHORT FILM'
       end as class
from film
where length < 60
order by random() limit 5) union all
(select title,
       case when length >= 60 then 'FEATURE FILM'
       end as class
from film
where length >= 60
order by random() limit 5);

---------------------+--------------
        title        |    class     
---------------------+--------------
 Destiny Saturday    | SHORT FILM
 Blues Instinct      | SHORT FILM
 Stepmom Dream       | SHORT FILM
 Oklahoma Jumanji    | SHORT FILM
 Airport Pollock     | SHORT FILM
 Bill Others         | FEATURE FILM
 Christmas Moonshine | FEATURE FILM
 Jacket Frisco       | FEATURE FILM
 Lost Bird           | FEATURE FILM
 Bunch Minds         | FEATURE FILM
---------------------+--------------
```

---

Select average film length after 2005. In case of length being null, then consider it 0.
Round to 2 decimal cases.

```sql
-- Applying coalesce to turn null into 0, averaging the length and rounding it up to 2 
-- decimal cases.

select ROUND(AVG(COALESCE(length, 0)), 2) as "Film Length Average"
from film
where release_year >= 2005;

---------------------
 Film Length Average 
---------------------
              115.27
---------------------
```


## Addendum

The samples database in use is the dvdrental available [here](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/). Check them out if you want more details.

Here is the ER diagram: [DVD Rental ER Diagram](https://www.postgresqltutorial.com/wp-content/uploads/2018/03/dvd-rental-sample-database-diagram.png "ER Diagram")