/* eslint-disable @typescript-eslint/no-explicit-any */
import { addPost } from '../../Services/db.js';

export class NewPost extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const form = this.shadowRoot?.querySelector('post-form');
        form?.addEventListener('added-post', (evt: any)=>{
            const name = evt.detail.name;
            const profileimg = evt.detail.profileimg;
            const username = evt.detail.username;
            const location = evt.detail.location;
            const mainimg = evt.detail.mainimg;
            const caption = evt.detail.caption;
            const likes = evt.detail.likes;
            const comments = evt.detail.comments;
            const time = evt.detail.time;
            

            addPost({name, profileimg, username, location, mainimg, caption, likes, comments, time});
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
        <post-form></post-form>
        </section>
        `;
    }
}

customElements.define('new-post', NewPost);