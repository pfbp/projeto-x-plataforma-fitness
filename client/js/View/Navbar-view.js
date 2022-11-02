import { View } from './View.js';

export class NavbarView extends View {
    template() {return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img class="brand-logo" src="./images/logo-light.svg">
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>  

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${this.helperMenuOptions}
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    `}

    get navbarList(){
        return [
            {type: "unique", name: "Profile", data:"profile.html"},
            {type: "unique", name: "Dashboard", data:"dash.html"},
            {type: "Social", name: "Connections", data:"connections.html"},
            {type: "Social", name: "Challenges", data:"challenges.html"},
            {type: "Inputs", name: "Records", data:"records.html"},
            {type: "Inputs", name: "Protocols", data:"protocols.html"},
            {type: "Inputs", name: "Media", data:"media.html"},
            {type: "unique", name: "Content", data:"content.html"}
        ]
    }

    get helperMenuOptions() {
        let options = this.navbarList;
        let menu = "";
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            const lastOption = (i==0) ? null : options[i-1];
            const nextOption = (i==options.lengh) ? null : options[i+1];
            if (option.type === "unique") {
                menu = menu + `
                <li class="nav-item"><a class="nav-link" aria-current="page" href="${option.data}">${option.name}</a></li>
                `
            } else if (option.type !== lastOption.type) {
                menu = menu + `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${option.type}</a>
                <ul class="dropdown-menu"><li><a class="dropdown-item" href="${option.data}">${option.name}</li>`
            } else if (option.type !== nextOption.type) {
                menu = menu + `<li><a class="dropdown-item" href="${option.data}">${option.name}</li></ul>`
            } else {
                menu = menu + `<li><a class="dropdown-item" href="${option.data}">${option.name}</li>`
            }
        }
        return menu;
    }
}