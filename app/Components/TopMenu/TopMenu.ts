class TopMenu extends HTMLElement{
    profileimg = './assets/profile-img.webp';


    constructor(){
        super();
        this.attachShadow({mode: 'open'});

    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector('#newPost');
        btn?.addEventListener('click', ()=>{
            const event: CustomEvent = new CustomEvent ('change-form', {
                composed: true
            });
            this.dispatchEvent(event);
            console.log('Click new post');
        });
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/TopMenu/style.css">
            <div class="navbar">
            <img class="logo" src="./assets/insta-tipo.png" alt="Instagram logo">
            <input class="searchbox" type="search" placeholder="Search...">
            <div class="menuimages">
                <img src="./assets/home.png" alt="Home">
                <img src="./assets/messenger.png" alt="Direct messages">
                <img src="./assets/more.png" alt="Add new post" id="newPost">
                <img src="./assets/explore.png" alt="Explore">
                <img src="./assets/heart.png" alt="Notifications">
                <img class="profile" src="${this.profileimg}" alt="Your profile">     
            </div>
            </div>
        </div>
            `;
        }
    }
}

customElements.define('top-menu',TopMenu);
export default TopMenu;