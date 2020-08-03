class Card extends HTMLElement {
    constructor() {
        super();
        const textContainer = document.createElement('div');
        const title = document.createElement('p');
        const text = document.createElement('p');
        const image = new Image(480, 360);
        textContainer.style.width = 480;

        textContainer.setAttribute("class", "textContainer");
        title.setAttribute("class", "title");
        text.setAttribute("class", "text");
        image.setAttribute("class", "image");
        
        image.src = this.getAttribute("img");
        title.textContent = this.getAttribute('title');
        text.textContent = this.getAttribute('text');

        textContainer.appendChild(title);
        textContainer.appendChild(text);

        this.appendChild(image);
        this.appendChild(textContainer);
    }
}

window.customElements.define('custom-card', Card);