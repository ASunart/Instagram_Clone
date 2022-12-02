/* eslint-disable quotes */
/* eslint-disable no-case-declarations */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './Components/Export.js';
import { listenPosts, deletePost } from './Services/db.js';

enum Screens {
    login,
    register,
    home,
    newPost
}

class AppContainer extends HTMLElement{
    
    screen: Screens = Screens.register;
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        
    }

  async connectedCallback(){

        listenPosts((users) =>{
        
        this.render();
        
            const register = this.shadowRoot?.querySelector('app-register');
            register?.addEventListener('user-registered', ()=>{
                this.screen = Screens.login;
                this.render();
                
            const login = this.shadowRoot?.querySelector('ig-login');
            login?.addEventListener('go-home', ()=>{
                this.screen = Screens.home;
                this.render(users);
                this.render();

            const addPost = this.shadowRoot?.querySelector('top-menu');
            addPost?.addEventListener('new-post', ()=>{
                this.screen = Screens.newPost;
                this.render(); 
            
      
            const card = this.shadowRoot?.querySelectorAll('post-card');
            card?.forEach((cardE) =>{
            cardE.addEventListener('delete-post', async (evt: any) =>{
                deletePost(evt.detail.id);
                })
            });
        }); 
            });
        });
    });    
            
            // const PostForm = this.shadowRoot?.querySelector('new-post');
            // PostForm?.addEventListener('added-post', ()=>{
            // this.screen = Screens.home;
            // this.render();
            //             });
            // const addPost = this.shadowRoot?.querySelector('top-menu');
            // addPost?.addEventListener('new-post', ()=>{
            //     this.screen = Screens.newPost;
            //     this.render(); });  
            
           
    }
    


    render(data?: any){
        if(!this.shadowRoot) return;
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
                
                this.shadowRoot.innerHTML += `<top-menu></top-menu>`

                this.shadowRoot.innerHTML += `<prof-switch></prof-switch>`

                const stories = data.slice(0,5).map((e: any) => {
                    return `<ig-stories profileimg="${e.data.profileimg}" username="${e.data.username}"></ig-stories>`
                });
                this.shadowRoot.innerHTML = stories.join('');

                const suggest = data.slice(0,5).map((e: any) => {
                    return `<suggest-profiles profileimg="${e.data.profileimg}" username="${e.data.username}" status="${e.data.status}"></suggest-profiles>`
                });
                this.shadowRoot.innerHTML += suggest.join('');

                const posts = data.map((e: any) => {
                    return `<post-card uid="${e.id}" profileimg="${e.data.profileimg}" username="${e.data.username}" location="${e.data.location}" mainimg="${e.data.mainimg}" username="${e.data.username}" likes="${e.data.likes}" caption="${e.data.caption}" comments="${e.data.comments}" time="${e.data.time}"></post-card>`
                });
                this.shadowRoot.innerHTML += posts.join('');


                break;


            default:
                break;
        }
    }
}

customElements.define('app-container', AppContainer);