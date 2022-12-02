export enum Attribute {
    'name' = 'name',
    'username' = 'username',
    'location' = 'location',
    'caption' = 'caption',
    'mainimg' = 'mainimg',
    'profileimg' = 'profileimg',
    'likes' = 'likes',
    'time' = 'time',
    'comments' = 'comments',
    'status' = 'status',
    'uid' = 'uid'
}

class PostCard extends HTMLElement{
    uid?: string;
    name?: string;
    username?: string;
    location?: string;
    caption?: string;
    mainimg?: string;
    profileimg?: string;
    likes?: string;
    time?: string;
    comments?: string;
    status?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('.menu');
        btn?.addEventListener('click', ()=>{
            const evt: CustomEvent<{uid: string }> = new CustomEvent ('delete-post', {
                detail: {uid: this.uid},
                composed: true 
            });
            this.dispatchEvent(evt);
            console.log('delete post');
        });
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
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