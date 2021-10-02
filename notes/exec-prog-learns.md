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
