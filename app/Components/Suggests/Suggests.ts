import { Attribute } from '../PostCard/PostCard';

class SuggestProfiles extends HTMLElement{
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
    uid?: string;


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
            <link rel="stylesheet" href="./app/Components/Suggests/style.css">
            <div class="box">
                <div class="profSugg" id="${this.uid}">
                    <img src="${this.profileimg}" alt="${this.username} profile image">
                    <h4>${this.username}</h4>
                    <h4 class="status">${this.status}</h4>
                    <a href="#">Follow</a>
            </div>
            </div>
            `;
        }
    }
}

customElements.define('suggest-profiles',SuggestProfiles);
export default SuggestProfiles;