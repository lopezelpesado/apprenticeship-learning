const db = require("../database/connection.js");

function get(request, response) {
	response.send(/*html*/ `
    <form action="create-user" method="POST">
      <p>
        <label for="username">Username</label>
        <input id="username" name="username">
      </p>
      <p>
        <label for="age">Age</label>
        <input id="age" name="age" type="number">
      </p>
      <p>
        <button type="submit">Create user</button>
      </p>
    </form>
  `);
}

function post(request, response) {
	console.log(request.body); // e.g. { username: "oli", ... }
	db.query(/*sql*/ `INSERT INTO users (username, age) VALUES ($1, $2)`, [
		request.body.username,
		request.body.age,
	]);
	response.redirect("/");
}

module.exports = { get, post };
