import { View } from './View.js';

export class NavbarView extends View {
    template() {return `
        <nav class="navbar">
            <a class="navbar--brand" href="index.html">Build Your Own Body</a>
            
            <button class="navbar--toogler" data-toggle="menu" aria-label="Toggle navigation">
                <svg class="navbar--toogler-icon">
                    <use xlink:href="./images/icons.svg#icon-menu"></use>
                </svg>
            </button>

            <div class="navbar--collapse" data-toggle="collapse">

                <ul class="navbar--list">
                ${this.navbarList.map(item => {
                    return `
                        <li>
                            <a class="navbar--link" href="${item.data}">${item.name}</a>
                        </li>
                    `})}
                </ul>

                <form class="navbar--form" role="search">
                    <input class="navbar__form--input" type="search" placeholder="Search" aria-label="Search">
                    <button class="navbar__form--button" type="submit">Search</button>
                </form>
            </div>
        </nav>
    `}

    get navbarList(){
        return [
            {name: "Profile", data:"profile.html"},
            {name: "Dashboard", data:"dash.html"},
            {name: "Records", data:"records.html"},
            {name: "Connections", data:"connections.html"},
            {name: "Configuration", data:"config.html"}
        ]
    }

    collapsible() {
        let menuToggler = document.querySelector('[data-toggle="menu"]');
        menuToggler.addEventListener('click', () => {

        let menuCollapse = document.querySelector('[data-toggle="collapse"]');
        menuCollapse.classList.toggle("collapse")});
    }
}