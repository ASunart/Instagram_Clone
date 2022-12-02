var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listenPosts } from "../../Services/db";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            listenPosts((posts) => {
                this.render(posts);
            });
        });
    }
    render(data) {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML += `<top-menu></top-menu>`;
        this.shadowRoot.innerHTML += `<prof-switch></prof-switch>`;
        const stories = data.slice(0, 5).map((e) => {
            return `<ig-stories profileimg="${e.data.profileimg}" username="${e.data.username}"></ig-stories>`;
        });
        this.shadowRoot.innerHTML = stories.join('');
        const suggest = data.slice(0, 5).map((e) => {
            return `<suggest-profiles profileimg="${e.data.profileimg}" username="${e.data.username}" status="${e.data.status}"></suggest-profiles>`;
        });
        this.shadowRoot.innerHTML += suggest.join('');
        const posts = data.map((e) => {
            return `<post-card uid="${e.id}" profileimg="${e.data.profileimg}" username="${e.data.username}" location="${e.data.location}" mainimg="${e.data.mainimg}" username="${e.data.username}" likes="${e.data.likes}" caption="${e.data.caption}" comments="${e.data.comments}" time="${e.data.time}"></post-card>`;
        });
        this.shadowRoot.innerHTML += posts.join('');
    }
}
customElements.define('home-page', Home);
