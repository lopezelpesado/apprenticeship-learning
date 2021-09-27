const express = require("express");

const server = express();

// server.get("/", (request, response) => {
// 	const time = new Date().toLocaleTimeString();
// 	response.send(`<h1>Hello, it's ${time}</h1>`);
// });

function logger(request, response, next) {
	console.log(request.method + " " + request.url);
	next();
}

const bodyParser = express.urlencoded();

const staticHandler = express.static("public");

server.use(staticHandler);

server.use(logger);

server.get("/", (request, response) => {
	response.send("<h1>Hello</h1>");
});

server.get("/json", (request, response) => {
	response.send({ message: "Hello" });
});

server.get("/redirects", (request, response) => {
	response.redirect("/");
});

server.get("/users/:name", (request, response) => {
	const name = request.params.name;
	response.send(`<h1>Hello ${name}</h1>`);
});

server.post("/submit", bodyParser, (request, response) => {
	console.log(request.body);
	response.send("thanks for submitting");
});

server.use((request, response) => {
	response.status(404).send("<h1>Cringe not found tech joke</h1>");
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
