const dogListItemTemplate = document.createElement("template");
dogListItemTemplate.innerHTML = /* html */ `
        <li>
            <h2></h2>
            <img src="" alt="" />
            <button>Are they a good dog?</button>
            <p>They are!</p>
        </li>
    `;

export default dogListItemTemplate;
