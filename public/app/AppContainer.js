var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import './Components/Export.js';
import { listenPosts, deletePost } from './Services/db.js';
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["newPost"] = 3] = "newPost";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            listenPosts((users) => {
                var _a;
                this.render();
                const register = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('app-register');
                register === null || register === void 0 ? void 0 : register.addEventListener('user-registered', () => {
                    var _a;
                    this.screen = Screens.login;
                    this.render();
                    const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ig-login');
                    login === null || login === void 0 ? void 0 : login.addEventListener('go-home', () => {
                        var _a;
                        this.screen = Screens.home;
                        this.render(users);
                        this.render();
                        const addPost = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('top-menu');
                        addPost === null || addPost === void 0 ? void 0 : addPost.addEventListener('new-post', () => {
                            var _a;
                            this.screen = Screens.newPost;
                            this.render();
                            const card = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('post-card');
                            card === null || card === void 0 ? void 0 : card.forEach((cardE) => {
                                cardE.addEventListener('delete-post', (evt) => __awaiter(this, void 0, void 0, function* () {
                                    deletePost(evt.detail.id);
                                }));
                            });
                        });
                    });
                });
            });
        });
    }
    render(data) {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.register:
                this.shadowRoot.innerHTML = '<app-register></app-register>';
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = '<ig-login></ig-login>';
                break;
            case Screens.newPost:
                this.shadowRoot.innerHTML = '<new-post></new-post>';
                break;
            case Screens.home:
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
                break;
            default:
                break;
        }
    }
}
customElements.define('app-container', AppContainer);
