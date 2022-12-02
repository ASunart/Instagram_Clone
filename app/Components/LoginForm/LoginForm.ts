export class LoginForm extends HTMLElement{
    username = '';
    password = '';

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('button');
        btn?.addEventListener('click',()=>{
            const event: CustomEvent<{username:string, password: string}> = 
            new CustomEvent('login-success',{
                detail: {username: this.username, password: this.password},
                composed: true
            });

            this.dispatchEvent(event);
            console.log('Se logeó');
        });

        const usernameInput = this.shadowRoot?.querySelector('#username');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');
        
        usernameInput?.addEventListener('change',(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.username = value;
        });

        passwordInput?.addEventListener('change',(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.password = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
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