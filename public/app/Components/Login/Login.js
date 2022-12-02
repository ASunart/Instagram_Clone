import { queryUser } from '../../Services/db.js';
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('login-form');
        login === null || login === void 0 ? void 0 : login.addEventListener('login-success', (evt) => {
            const username = evt.detail.username;
            const password = evt.detail.password;
            queryUser({ username, password }).then(value => {
                if (value) {
                    const event = new CustomEvent('go-home', {
                        composed: true
                    });
                    this.dispatchEvent(event);
                    alert('Log in succesfully');
                }
                else {
                    alert('The credentials do not match');
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
        <login-form></login-form>
        </section>
        `;
    }
}
customElements.define('ig-login', Login);
