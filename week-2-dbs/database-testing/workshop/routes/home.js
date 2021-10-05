const db = require("../database/connection.js");
const layout = require("../layout.js");
const model = require("../database/model.js");

function get(request, response) {
	model.getUsers().then((users) => {
		const userList = users.map((user) => {
			return /*html*/ `
      <li>
        <span>${user.username}</span>
        <form action="/users/delete/" method="POST" class="inline">
          <button name="id" value="${user.id}" aria-label="Delete ${user.username}">
            &times;
          </button>
        </form>
      </li>
    `;
		});
		const html = layout(
			"Users",
			/*html*/ `
      <h2>Users</h2>
      <ul>${userList.join("")}</ul>
      <a href="/users/create">New user +</a>
    `
		);
		response.send(html);
	});
}

module.exports = { get };
