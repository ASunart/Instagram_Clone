class TopMenu extends HTMLElement {
    constructor() {
        super();
        this.profileimg = './assets/profile-img.webp';
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#newPost');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
            const event = new CustomEvent('change-form', {
                composed: true
            });
            this.dispatchEvent(event);
            console.log('Click new post');
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/TopMenu/style.css">
            <div class="navbar">
            <img class="logo" src="./assets/insta-tipo.png" alt="Instagram logo">
            <input class="searchbox" type="search" placeholder="Search...">
            <div class="menuimages">
                <img src="./assets/home.png" alt="Home">
                <img src="./assets/messenger.png" alt="Direct messages">
                <img src="./assets/more.png" alt="Add new post" id="newPost">
                <img src="./assets/explore.png" alt="Explore">
                <img src="./assets/heart.png" alt="Notifications">
                <img class="profile" src="${this.profileimg}" alt="Your profile">     
            </div>
            </div>
        </div>
            `;
        }
    }
}
customElements.define('top-menu', TopMenu);
export default TopMenu;
