export class PostForm extends HTMLElement {
    constructor() {
        super();
        this.name = '';
        this.profileimg = '';
        this.username = '';
        this.location = '';
        this.mainimg = '';
        this.caption = '';
        this.likes = '';
        this.comments = '';
        this.time = '';
        this.status = '';
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#upload');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
            const evt = new CustomEvent('added-post', {
                detail: { name: this.name, profileimg: this.profileimg, username: this.username, location: this.location, mainimg: this.mainimg, caption: this.caption, likes: this.likes, comments: this.comments, time: this.time },
                composed: true
            });
            this.dispatchEvent(evt);
            console.log('Se creó');
        });
        const nameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#name');
        const profileInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#profImage');
        const usernameInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('#username');
        const locationInput = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('#location');
        const postInput = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('#post');
        const captionInput = (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector('#caption');
        const likesInput = (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.querySelector('#likes');
        const commentsInput = (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.querySelector('#comments');
        const timeInput = (_k = this.shadowRoot) === null || _k === void 0 ? void 0 : _k.querySelector('#time');
        const statusInput = (_l = this.shadowRoot) === null || _l === void 0 ? void 0 : _l.querySelector('#status');
        nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.name = value;
        });
        profileInput === null || profileInput === void 0 ? void 0 : profileInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.profileimg = value;
        });
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.username = value;
        });
        locationInput === null || locationInput === void 0 ? void 0 : locationInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.location = value;
        });
        postInput === null || postInput === void 0 ? void 0 : postInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.mainimg = value;
        });
        captionInput === null || captionInput === void 0 ? void 0 : captionInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.caption = value;
        });
        likesInput === null || likesInput === void 0 ? void 0 : likesInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.likes = value;
        });
        commentsInput === null || commentsInput === void 0 ? void 0 : commentsInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.comments = value;
        });
        timeInput === null || timeInput === void 0 ? void 0 : timeInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.time = value;
        });
        statusInput === null || statusInput === void 0 ? void 0 : statusInput.addEventListener('change', (evt) => {
            const value = evt.target.value || '';
            this.status = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
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
