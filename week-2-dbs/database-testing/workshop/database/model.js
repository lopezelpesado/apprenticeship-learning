const db = require("./connection.js");

function getUsers() {
	return db.query("SELECT * FROM users").then((result) => result.rows);
}

function createUser(user) {
	const insert_user = /*sql*/ `
      INSERT INTO users(username, age, location) VALUES($1, $2, $3)
    `;
	const { username, age, location } = user;
	return db.query(insert_user, [username, age, location]);
}

module.exports = { getUsers, createUser };
