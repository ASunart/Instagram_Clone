
export class PostForm extends HTMLElement {

    name = '';
    profileimg = '';
    username = '';
    location= '';
    mainimg = '';
    caption = '';
    likes = '';
    comments = '';
    time = '';
    status = '';


    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('#upload');
        btn?.addEventListener('click', ()=>{
            const evt: CustomEvent<{name: string, profileimg: string, username: string, location: string, mainimg: string, caption: string, likes: string, comments: string, time: string}> = new CustomEvent ('added-post', {
                detail: {name: this.name, profileimg: this.profileimg, username: this.username, location: this.location, mainimg: this.mainimg, caption: this.caption, likes: this.likes, comments: this.comments, time: this.time },
                composed: true
            });
            this.dispatchEvent(evt);
            console.log('Se creó');
        });

        const nameInput = this.shadowRoot?.querySelector('#name');
        const profileInput = this.shadowRoot?.querySelector('#profImage');
        const usernameInput = this.shadowRoot?.querySelector('#username');
        const locationInput = this.shadowRoot?.querySelector('#location');
        const postInput = this.shadowRoot?.querySelector('#post');
        const captionInput = this.shadowRoot?.querySelector('#caption');
        const likesInput = this.shadowRoot?.querySelector('#likes');
        const commentsInput = this.shadowRoot?.querySelector('#comments');
        const timeInput = this.shadowRoot?.querySelector('#time');
        const statusInput = this.shadowRoot?.querySelector('#status');

        nameInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.name = value;
        });
        profileInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.profileimg = value;
        });
        usernameInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.username = value;
        });
        locationInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.location = value;
        });
        postInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.mainimg = value;
        });
        captionInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.caption = value;
        });
        likesInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.likes = value;
        });
        commentsInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.comments = value;
        });
        timeInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.time = value;
        });
        statusInput?.addEventListener('change', (evt)=>{
            const value: string = (evt.target as HTMLInputElement).value || '';
            this.status = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../app/Components/NewPost/styles.css">
        <div class="container">
        <h1>Add new post</h1>
        <label>Name:</label>
        <input type=text id="name"/>
        <label>Username:</label>
        <input type=text id="username"/>
        <label>Profile image url:</label>
        <input type=url id="profImage"/>
        <label>Location:</label>
        <input type=text id="location"/>
        <label>Main post url:</label>
        <input type=url id="post"/>
        <label>Caption:</label>
        <input type=text id="caption"/>
        <label>Number of Likes:</label>
        <input type=number id="likes"/>
        <label>Number of Comments:</label>
        <input type=text id="comments"/>
        <label>Time:</label>
        <input type=text id="time"/>
        <label>Status:</label>
        <input type=text id="status"/>
        <button type=submit id="upload">Add post</button>
        </div>
        `;
    }
}

customElements.define('post-form', PostForm);