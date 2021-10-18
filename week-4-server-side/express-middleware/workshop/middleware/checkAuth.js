const checkAuth = (req, res, next) => {
	const user = req.session;
	if (user) {
		next();
	} else {
		res.status(401).send(/*html*/ `
    <h1>You need to <a href="/log-in">log in</a> first 🛑</h1>
    `);
	}
};

module.exports = checkAuth;
