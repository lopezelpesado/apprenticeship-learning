const auth = require("../auth.js");

function get(request, response) {
	response.send(`
    <h1>Create an account</h1>
    <form action="sign-up" method="POST">
      <label for="name">Name</label>
      <input type="text" id="name" name="name">
      <label for="email">Email</label>
      <input type="email" id="email" name="email">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      <button>Sign up</button>
    </form>
  `);
}

async function post(request, response) {
	const { email, password, name } = request.body;
	console.log("Signing up...");
	const user = await auth.createUser(email, password, name);
	console.log(user);
	const sid = await auth.saveUserSession(user);
	console.log(sid);
	response.cookie("sid", sid, auth.COOKIE_OPTIONS);
	console.log(auth.COOKIE_OPTIONS);
	console.log("redirecting");
	response.redirect("/");
}

// function post(request, response) {
// 	const { email, password, name } = request.body;
// 	auth
// 		.createUser(email, password, name)
// 		.then(auth.saveUserSession)
// 		.then((sid) => {
// 			response.cookie("sid", sid, auth.COOKIE_OPTIONS);
// 			response.redirect("/");
// 		});
// 	// ...
// }

module.exports = { get, post };
