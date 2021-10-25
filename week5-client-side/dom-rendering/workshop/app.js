import createEl from "./create-element.js";
import dogData from "./dogs.js";

const dogListItems = dogData.map((dog) => {
	// const dogName = document.createElement("h2");
	// dogName.textContent = dog.name;

	const dogName = createEl("h2", { textContent: dog.name });

	// const dogPic = document.createElement("img");
	// dogPic.src = dog.image;
	// dogPic.alt = `Picture of ${dog.name}`;

	const dogPic = createEl("img", {
		src: dog.image,
		alt: `Picture of ${dog.name}`,
	});

	// const dogListItem = document.createElement("li");
	// dogListItem.append(dogName, dogPic);

	const dogListItem = createEl("li", {}, dogName, dogPic);

	return dogListItem;
});

// const title = document.createElement("h1");
// title.textContent = "All the dogs";

const title = createEl("h1", { textContent: "All the dogs" });

// const dogList = document.createElement("ul");
// dogList.append(...dogListItems);

const dogList = createEl("ul", {}, ...dogListItems);

document.getElementById("app").append(title, dogList);
