import { Attribute } from '../PostCard/PostCard.js';

class IgStories extends HTMLElement{
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
        const atrs: Record<Attribute,null> = {
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
    }; return Object.keys(atrs);
}

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined
    ){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/Story/style.css">
            <div class="card">
                <div class="stories">
                 <img src="${this.profileimg}" alt="${this.username} story">
                 ${this.username}
            </div>
            </div>
            `;
        }
    }
}

customElements.define('ig-stories',IgStories);
export default IgStories;

