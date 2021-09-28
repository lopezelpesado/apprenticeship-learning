const { response, request } = require("express");
const express = require("express");
const addDog = require("./routes/addDog.js");
const dogs = require("./dogs.js");

const server = express();

server.get("/", (request, response) => {
	const searchResult = request.query.search || "";
	const dogValues = Object.values(dogs);

	const dogNameHTMLArr = dogValues.map((e) => {
		const match = e.name.toLowerCase().includes(searchResult.toLowerCase());

		if (match || !searchResult) {
			return `<li>
                <span>${e.name}</span>
                <form action="/delete-dog" method="POST" style="display: inline;">
                    <button name="name" value="${e.name}" aria-label="Delete ${e.name}">
              &times;
                    </button>
                </form>
          </li>`;
		}
	});

	const dogNameListHTML = dogNameHTMLArr.join("");

	response.end(`
	<!doctype html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title>Dogs!</title>
	  </head>
	  <body>
	    <ul>${dogNameListHTML}</ul>
	    <form>
            <label id="search">Search dogs</label>
            <input id="search" type="search" name="search" placeholder="E.g. rover">
            <button>Search</button>
	    </form>
	  </body>
	</html>
	`);
});

// server.get("/add-dog", (request, response) => {
// 	const html = `
//   <!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8">
//       <title>Dogs!</title>
//     </head>
//     <body>
//       <h1>Create a dog</h1>
//       <form method="POST">
//         <label id="name">Dog name</label>
//         <input id="name" name="name">
//         <label id="breed">Dog breed</label>
//         <input id="breed" name="breed">
//         <button>Search</button>
//       </form>
//     </body>
//   </html>
//   `;
// 	response.end(html);
// });

server.get("/add-dog", addDog.get);

const bodyParser = express.urlencoded({ extended: false });

// server.post("/add-dog", bodyParser, (request, response) => {
// 	const newDog = request.body;
// 	const name = newDog.name.toLowerCase();
// 	dogs[name] = newDog;
// 	response.redirect("/");
// });

server.post("/add-dog", bodyParser, addDog.post);

server.post("/delete-dog", bodyParser, (request, response) => {
	const nameToDelete = request.body.name.toLowerCase();
	delete dogs[nameToDelete];
	response.redirect("/");
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
