const layout = require("../layout.js");

function get(request, response) {
	try {
		const html = layot(`<h1>Gonna error</h1>`);
		response.send(html);
	} catch (error) {
		console.log(error);
		response.status(500).send(/*html*/ `<h1>Server Error</h1>`);
	}
}

module.exports = { get };
