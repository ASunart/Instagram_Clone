import { addUser } from '../../Services/db.js';
export class AppRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ig-register');
        form === null || form === void 0 ? void 0 : form.addEventListener('user-registered', (evt) => {
            const username = evt.detail.username;
            const password = evt.detail.password;
            addUser({ username, password });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
            <ig-register></ig-register>
        </section>
        `;
    }
}
customElements.define('app-register', AppRegister);
