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
