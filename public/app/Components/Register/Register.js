export class Register extends HTMLElement {
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
            const event = new CustomEvent('user-registered', {
                detail: { username: this.username, password: this.password },
                composed: true
            });
            this.dispatchEvent(event);
            alert('User created');
            console.log('Se registró');
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
        <link rel="stylesheet" href="./app/Components/Register/styles.css">

        <div class="container">
        <div class="register">
            <img src="./assets/insta-logo.webp" alt="Instagram logo">
            <img class="facebook" src="./assets/facebook-info.png" alt="Facebook sign up">
            <div class="input">
                <input class="field" type="email" placeholder="Mobile number or Email">
                <input class="field" type="text" placeholder="Full name">
                <input class="field" id="username" type="text" placeholder="Username">
                <input class="field" type="password" placeholder="Password">
                
            </div>
            
            <p class="warning">People who use our service may have uploaded your contact information to Instagram. <strong>Learn More</strong> 
                <br><br>
                By signing up, you agree to our <strong>Terms , Privacy Policy</strong>  and <strong>Cookies Policy </strong> .</p>
    
            <button class="login" id="register" type="submit">Sign up</button>
    
    
        </div>
        <div class="signup">
            <h4>Have an account? <a href="#">Log in</a></h4>
        </div>
        <div class="apps">
            <h4>Get the app.</h4>
            <img src="./assets/app-store.png" alt="App store">
            <img src="./assets/google.png" alt="Google play">
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
                Contact Uploading & Non-Users
                <br><br>

                English
                © 2022 Instagram from Meta
            </p> 
        </div>
    </div>
        `;
    }
}
customElements.define('ig-register', Register);
