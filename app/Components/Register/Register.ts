export class Register extends HTMLElement {
    username = '';
    password = '';
    
    

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('button');
        btn?.addEventListener('click',()=>{
            const event: CustomEvent<{username: string, password: string }> = 
            new CustomEvent('user-registered',{
                detail: {username: this.username, password: this.password },
                composed: true
            });

            this.dispatchEvent(event);
            alert('User created');
            console.log('Se registró');
        });


        const usernameInput = this.shadowRoot?.querySelector('#username');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');

        usernameInput?.addEventListener('change' ,(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.username = value;
        });

        passwordInput?.addEventListener('change' ,(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.password = value;
        });

    }

    render(){
        if(!this.shadowRoot) return;
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