class ProfSwitch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/ProfSwitch/style.css">
            <div class="box">
            <div class="profile">
            <img src="./assets/profile-img.webp" alt="Your profile image">
            </div>
            <div class="profileinfo">
                <h4>a.solarte1</h4>
                <h4 class="name">Alejandro Solarte</h4>
                <a href="#"><h4>Switch</h4></a>
                </div>
                <div class="suggestions">
                <h3 class="sugg">Suggestions for you</h3>
                <a href="#"><h4>See all</h4></a>
                </div>
        <div class="info">
        <a href="#"><p>About - Help - Press - API - Jobs - Privacy
             - Terms - Locations - Language
        </p></a> <br>
        <p>© 2022 INSTAGRAM FROM META</p>
    </div>
    </div>
            `;
        }
    }
}
customElements.define('prof-switch', ProfSwitch);
export default ProfSwitch;
