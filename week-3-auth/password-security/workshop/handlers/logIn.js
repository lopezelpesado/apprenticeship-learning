const model = require("../database/db");
const bcrypt = require("bcryptjs");

const crypto = require("crypto");

function get(request, response) {
	response.send(`
    <h1>Log in</h1>
    <form action="log-in" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Log in</button>
    </form>
  `);
}

async function post(request, response) {
	const { email, password } = request.body;

	// const SALT = "theMatrixIsAllAroundUs";

	// const hashedPassword = crypto
	// 	.createHash("sha256")
	// 	.update(password + SALT)
	// 	.digest("hex");

	// model
	// 	.getUser(email)
	// 	.then((dbUser) => bcrypt.compare(password, dbUser.password))
	// 	.then((match) => {
	// 		if (!match) throw new Error("ACCESS DENIED");
	// 		response.send(/*html*/ `<h1>Welcome back, ${email}</h1>`);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		response.send(`<h1>${error}</h1>`);
	// 	});

	const dbUser = await model.getUser(email);

	const match = await bcrypt.compare(password, dbUser.password);

	console.log(match);

	try {
		if (!match) throw new Error("ACCESS DENIED");
		response.send(/*html*/ `<h1>Welcome back, ${email}</h1>`);
	} catch (error) {
		console.error(error);
		response.send(`<h1>${error}</h1>`);
	}
}

module.exports = { get, post };
