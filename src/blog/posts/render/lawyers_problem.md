# Lawyers problem [2737]
The manager of Mangojata Lawyers requested a report on the current lawyers.

The manager wants you to show him the name of the lawyer with the most clients, the one with the fewest and the client average considering all lawyers.

OBS: Before presenting the average, show a field called Average to make the report more readable. The average must be presented as an integer.

## Schema
| Column   	        | Type      |
| :-                | :-        | 
| register (PK)     | integer   | 
|  name 	        | varchar   |
|  customers_number |   integer |

## Tables

### Lawyers

|register   |    name 	            |  # of customers    |
|   :-      |   :-                  |   :-               |
|    1648 	|  Marty M. Harrison    |  5                 |
|    2427 	|  Jonathan J. Blevins  |  15                |
|    3365 	|  Chelsey D. Sanders   |  20                |
|    4153 	|  Dorothy W. Ford      |  16                |
|    5525 	|  Penny J. Cormier     |  6                 |

### Output Sample

|   name 	            |   # of customers   |
|   :-                  |   :-               |
|   Chelsey D. Sanders  |   20               |
|   Marty M. Harrison   |   5                |
|   Average             |   12               |


## Solution

First, I was met with several questions:

- What happens when you have several lawyers with the same maximum or minimum number of customers ?
- How to add the average row ? 
- How to keep row order ? Max, Min, Average 
- How to cast average into a int ?

I considered that any lawyer with the maximum number of customers is fine. I learned about
the UNION keyword and its features. Created an artificial column just to keep order with ORDER BY.
And cast the average with the CAST function.

At the end, my solution was:

```sql 
select name, customers_number from (
    (
        select name, customers_number, 1 as ord 
        from lawyers 
        where customers_number = (
            select MAX(customers_number) 
            from lawyers) 
            limit 1
        ) union all
    (
        select name, customers_number, 2 as ord 
        from lawyers 
        where customers_number = (
            select MIN(customers_number) 
            from lawyers) 
            limit 1
        ) union all
    (
        select name, customers_number, 3 as ord 
        from (values ('Average', (
            select CAST(AVG(customers_number) as int) 
            from lawyers
        ))) q(name, customers_number)
    )
) x order by ord;
```
