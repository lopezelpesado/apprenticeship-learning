# Execute Program Learnings

## 1/10/21

### SQL: Foreign keys

- SQL dbs are correct
- they can be set up with constraints to prevent erroneous data being written
- can't insert into columns that aren't there
- can't insert or update nulls into `NOT NULL` columns
- can't insert or update duplicate values in `UNIQUE` columns
- can't insert incorrect data types into columns
- tables can reference other tables
- we can use foreign keys which must be equal to a value in another table
- we use `REFERENCES` to do this
- dbs won't let you violate a foreign key
- enables referential integrity
- guarantees correct references between tables
- "leaked" records are ones which contain rows which reference another row that doesn't exist

### SQL: SQL injection

- never concatenate SQL strings
- use bind parameters to insert dynamic data into your SQL
- treat user inputs with care
- never execute user input as code

### SQL: Constraint analysis

- by default, a foreign key column can be null
- we might want to actually do this
- 1 to 1 relationship is where 1 thing relates to 0 or 1 of another thing and that other thing relates back to 0 or 1 of the first thing
- 1 to many relationship is where 1 thing relates to many of another thing and one of the other thing only relates bact to 1 of the first thing
- questions to ask:
- should a column be a foreign key? `REFERENCES`
- can a column be null? `NULL/NOT NULL`
- can multiple rows have the same value for this thing? `UNIQUE`

## 2/10/21

### Regular Expressions: Basic character sets

- or expressions can be used to recognize a whole set of characters
- however `|` over and over is tiresome
- can use a character set instead `[abc]`
- can specify a range of characters with `[a-z]`
- can escape to match literal ]s with `\]`
- can negate to match stuff not in the set
- use `^` but inside `[]`
- negation applies to the whole set
- also works with ranges
- sets match only 1 character in a string
- use `+` and `*` for more

### Regular Expressions: Maybe

- `?` matches a char 0 or 1 times but no more
- matches what is immediately before it only
- it binds tightly
- combine with parens to match more characters
- good for phone numbers

### Regular Expressions: Basic character classes

- `\d` recognises digits 0-9
- `\s` whitespaces, space newline tabs etc
- they are called character classes
- uppercase negates them
- again, can use `+` and `*` to match multiples

### SQL: On conflict do nothing

- SQL let's us specify what to do when there is a conflict, when a constraint is violated
- after our potentially conflicted instruction can add `ON CONFLICT (COLUMN_NAME) DO NOTHING` to do nothing if there is a conflict
- this is useful if you want to make sure a row exists and to do nothing if it does already exist

## 4/10/21

### SQL: Simple joins

- foreign keys guarantee that rows in different tables can reference each other correctly
- just `JOIN`ing 2 tables will give you a row for each combination rows in one table with the rows of the other table
- we can use `ON` like `WHERE` to "join on" a certain pair of rows from the tables that are related, `SELECT * FROM people JOIN cats ON people.id = cats.owner_id`
- `JOIN` is like 2 nested loops with a filter, `forEach(row in table 1 => {forEach(row in table 2) => {if (ON condition true for these 2 rows) {push(row with columns from this pair)}}})`
- can `SELECT` just the columns you want but you have to specify the `table.column`
- sometimes join order doesn't matter
- sometimes it does when the db engine optomizes it badly, reordering might help
- sometimes when there are duplicate column names
- with duplicated column names, the last table in the `JOIN` wins
- columns often have duplicate names across tables so best to alias every joined column with `AS`, best to write them on their own lines indented in the `SELECT`
- `JOIN`s return a "relation" which has rows and columns that can be operated on
- you can `JOIN` a relation to make another relation
- SQL dbs are relational dbs
- a table is a relation stored on the disk
- a join creates a temporary relation
- `SELECT 1` creates a relation
- when we `WHERE` with joins, it filters the rows like it does normally and can see columns from both tables
- if a row matches multiple rows in the other table, the join will return multiple rows for them
- these `JOIN`s are also called `INNER JOIN`s
- there are `OUTER JOIN`s

### SQL: On conflict update

- using js control flow to update rows if an entry already exists can work but not if those 2 requests come in quickly to 2 different servers and there can be a delay between 1 servers `SELECT` and another's `INSERT`
- bugs from these sorts of problems are called race conditions
- unlikely problems become more likely at scale
- we can use `ON CONFLICT (column_name) DO UPDATE [...]` to tell the db to do something if there is a conflict
- can replace the js logic with `ON CONFLICT`
- the `ON CONFLICT` solution is more efficient as it requires less db queries

### SQL: Join performance

- `JOIN` is more efficient than trying to use js
- trying to use js results in the "N+1 problem"
- `JOIN` only needs 1 query to accomplish what can take js logic 1000s of iterations and lots of db queries
- you can think of a `JOIN` like a nested loop but they don't work like that
- the db optimises the query
- dbs can optimise very complex queries
