function handleErrors(error, req, res, next) {
	console.log(error);
	const status = error.status || 500;
	res.status(status).send(/*html*/ `<h1>Oh god, you broke it</h1>`);
}

module.exports = handleErrors;
