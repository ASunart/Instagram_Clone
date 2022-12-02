export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["username"] = "username";
    Attribute["location"] = "location";
    Attribute["caption"] = "caption";
    Attribute["mainimg"] = "mainimg";
    Attribute["profileimg"] = "profileimg";
    Attribute["likes"] = "likes";
    Attribute["time"] = "time";
    Attribute["comments"] = "comments";
    Attribute["status"] = "status";
    Attribute["uid"] = "uid";
})(Attribute || (Attribute = {}));
class PostCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            uid: null,
            name: null,
            username: null,
            location: null,
            caption: null,
            mainimg: null,
            profileimg: null,
            likes: null,
            time: null,
            comments: null,
            status: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        var _a;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.menu');
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', () => {
            const evt = new CustomEvent('delete-post', {
                detail: { uid: this.uid },
                composed: true
            });
            this.dispatchEvent(evt);
            console.log('delete post');
        });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/PostCard/style.css">
            <section>
                <div class="page" id="${this.uid}">
                <div class="above">
                    <div class="userInform">
                    <div class="userImg">
                    <img src="${this.profileimg}" alt="Your profile image" class="cover">
                    </div>
                    <h3>${this.username}<br><span>${this.location}</span></h3>
                </div>
                <div>
                <img src="../assets/more-dots.png" alt="Dots menu" class="menu">
                </div>
            </div>
            <div class="mainPics">
                <img class="cover" src="${this.mainimg}" alt="${this.username} post"/>
            </div>
            <div class="theButton">
                <div class="left">
                    <img src="./assets/heart.png" alt="Like button" class="btnLike">
                    <img src="./assets/chat-bubble.png" alt="Comment button" class="btnComment">
                    <img src="./assets/send.png" alt="Share button">
                </div>
                <div class="rigth">
                    <img src="./assets/save-instagram.png" alt="Save post button" class="btnSave">
                </div>
            </div>
            <h4 class="likes">${this.likes} likes</h4>
            <h4 class="captions"><b>${this.username} </b>${this.caption}</h4>
            <h4 class="comments">View all ${this.comments} comments</h4>
            <div class="addComment">
                <div class="userImg">
                    <img src="${this.profileimg}" alt="Your profile image on comment section">
                </div>
                <input type="text" class="theComment" placeholder="Add a comment..."></input>
            </div>
            <h5 class="time">${this.time} ago</h5>
            </div>
                </section>
            `;
        }
    }
}
customElements.define('post-card', PostCard);
export default PostCard;
