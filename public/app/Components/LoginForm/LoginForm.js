export class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.password = '';
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
            const event = new CustomEvent('login-success', {
                detail: { username: this.username, password: this.password },
                composed: true
            });
            this.dispatchEvent(event);
            console.log('Se logeó');
        });
        const usernameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#username');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.username = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.password = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/Components/LoginForm/styles.css">

        <div class="mockup">
            <img src="./assets/telefono.webp" alt="Instagram example images">
        </div>
        <div class="register">
            <img src="./assets/insta-logo.webp" alt="Instagram logo">
            <div class="input">
                <input class="field" id="username" type="text" placeholder="Phone number, username, or email">
                <input class="field" type="password" placeholder="Password">
            </div>
            
            <button class="login" type="submit">Log in</button>
    
            <img class="facebook" src="./assets/facebook.webp" alt="Facebook sign up">
    
        </div>
        <div class="signup">
            <h4>Don't have an account? <a href="#">Sign Up</a></h4>
        </div>
        <div class="apps">
            <h4>Get the app.</h4>
            <img src="./assets/app-store.png" alt="App store">
            <img src="./assets/google.png" alt="Google Play">
        </div>
        <div class="help">
            <p>Meta
                About
                Blog
                Jobs
                Help
                API
                Privacy
                Terms
                Top Accounts
                Hashtags
                Locations
                Instagram Lite
                Contact Uploading & Non-Users <br>
                Dance
                Food & Drink
                Home & Garden
                Music
                Visual Arts
            </p> 
        </div>
        
        `;
    }
}
customElements.define('login-form', LoginForm);
