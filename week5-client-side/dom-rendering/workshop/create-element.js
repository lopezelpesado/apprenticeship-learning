function createEl(tag, props, ...children) {
	const element = document.createElement(tag);
	for (const prop in props) {
		element[prop] = props[prop]; // e.g. element.id = "test"
	}
	element.append(...children);
	return element;
}

export default createEl;
