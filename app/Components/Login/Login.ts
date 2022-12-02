/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryUser } from '../../Services/db.js';

export class Login extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

     connectedCallback(){
        this.render();

        const login = this.shadowRoot?.querySelector('login-form');
        login?.addEventListener('login-success', (evt: any)=>{
            const username = evt.detail.username;
            const password = evt.detail.password;

              queryUser({username, password }).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent('go-home',{
                        composed: true
                    });
                    this.dispatchEvent(event);
                    alert('Log in succesfully');
                } else{
                    alert('The credentials do not match');
                }
            });
        });
    
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <login-form></login-form>
        </section>
        `
        ;
    
    }
}

customElements.define('ig-login', Login);
