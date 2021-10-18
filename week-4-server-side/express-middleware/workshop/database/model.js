const crypto = require("crypto");

let sessions = {};

function createSession(user) {
	const sid = crypto.randomBytes(18).toString("base64");
	sessions[sid] = user;
	return sid;
}

function getSession(sid) {
	return sessions[sid];
}

function deleteSession(sid) {
	delete sessions[sid];
}

module.exports = { createSession, getSession, deleteSession };
