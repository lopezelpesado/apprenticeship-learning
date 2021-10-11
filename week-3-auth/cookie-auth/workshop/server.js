const crypto = require("crypto");

const express = require("express");

const server = express();

const cookieParser = require("cookie-parser");

server.use(cookieParser("jhfihafuiahfuiasfhusafh"));

let sessions = {};

server.get("/", (request, response) => {
	const sid = request.signedCookies.sid;
	if (sid) {
		console.log("Sessions", sessions);
		const userInfo = sessions[sid];
		console.log("user", userInfo);
	}
	console.log("Cookies");
	console.log("signed", request.signedCookies, "unsigned", request.cookies);
	response.send("<h1>Hello</h1>");
});

server.get("/exampleSigned", (request, response) => {
	response.cookie("helloSigned", "this is my signed cookie", { signed: true });
	response.redirect("/");
});

server.get("/removeSigned", (request, response) => {
	response.clearCookie("helloSigned");
	response.redirect("/");
});

server.get("/exampleUnsigned", (request, response) => {
	response.cookie("helloUnsigned", "this is my signed cookie", {});
	response.redirect("/");
});

server.get("/removeUnsigned", (request, response) => {
	response.clearCookie("helloUnsigned");
	response.redirect("/");
});

server.get("/login", (request, response) => {
	const sid = crypto.randomBytes(18).toString("base64");
	const userInfo = {
		id: 1,
		username: "lopezelpesado",
		admin: true,
	};
	sessions[sid] = userInfo;
	response.cookie("sid", sid, {
		httpOnly: true,
		// maxAge: 6000,
		signed: true,
	});
	response.redirect("/");
});

server.get("/logout", (request, response) => {
	const sid = request.signedCookies.sid;
	delete sessions[sid];
	response.clearCookie("sid");
	response.redirect("/");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
