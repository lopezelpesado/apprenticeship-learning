const model = require("../database/db");
const bcrypt = require("bcryptjs");

const crypto = require("crypto");

function get(request, response) {
	response.send(/*html*/ `
    <h1>Create an account</h1>
    <form action="sign-up" method="POST">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Sign up</button>
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

	// bcrypt
	// 	.hash(password, 10)
	// 	.then((hash) => model.createUser({ email, password: hash }))
	// 	.then(() => {
	// 		response.send(/*html*/ `<h1>Thanks for signing up, ${email}!</h1>`);
	// 	});

	console.log("processing");

	const hash = await bcrypt.hash(password, 10);

	await model.createUser({ email, password: hash });

	console.log("complete");

	response.send(/*html*/ `<h1>Thanks for signing up, ${email}!</h1>`);

	// model
	// 	.createUser({ email, password: hashedPassword })
	// 	.then(() => {
	// 		response.send(`<h1>Welcome ${email}</h1>`);
	// 	})
	// 	.catch((error) => {
	// 		console.error(error);
	// 		response.send(`<h1>Something went wrong, sorry</h1>`);
	// 	});
}

module.exports = { get, post };
