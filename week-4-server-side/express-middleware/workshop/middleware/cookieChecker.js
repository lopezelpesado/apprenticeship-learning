const model = require("../database/model.js");

function cookieChecker(req, res, next) {
	const sid = req.signedCookies.sid;
	const user = model.getSession(sid);
	if (user) {
		req.session = user;
	}
	next();
}

module.exports = cookieChecker;
