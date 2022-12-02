class IgStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const atrs = {
            uid: null,
            name: null,
            username: null,
            location: null,
            caption: null,
            mainimg: null,
            profileimg: null,
            likes: null,
            time: null,
            comments: null,
            status: null
        };
        return Object.keys(atrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/Story/style.css">
            <div class="card">
                <div class="stories">
                 <img src="${this.profileimg}" alt="${this.username} story">
                 ${this.username}
            </div>
            </div>
            `;
        }
    }
}
customElements.define('ig-stories', IgStories);
export default IgStories;
