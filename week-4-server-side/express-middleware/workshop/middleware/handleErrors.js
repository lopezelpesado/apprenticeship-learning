const { STATUS_CODES } = require("http");

function handleErrors(error, req, res, next) {
	console.log(error);
	const status = error.status || 500;
	if (process.env.NODE_ENV === "production") {
		// if (true) {
		res.status(status).send(/*html*/ `<h1>${STATUS_CODES[status]}</h1>`);
	} else {
		res.status(status).send(/*html*/ `<pre>${error.stack}</pre>`);
	}
}

module.exports = handleErrors;
