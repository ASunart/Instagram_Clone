import { addUser } from '../../Services/db.js';

export class AppRegister extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const form = this.shadowRoot?.querySelector('ig-register');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        form?.addEventListener('user-registered', (evt: any) => {
            const username = evt.detail.username;
            const password = evt.detail.password;
            

            addUser({username, password});
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
            <ig-register></ig-register>
        </section>
        `;
    }
}

customElements.define('app-register', AppRegister);