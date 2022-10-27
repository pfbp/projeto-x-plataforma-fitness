import { View } from './View.js';

export class NavbarView extends View {
    template() {return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Build Your Own Body</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>  

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${this.navbarList.map(item => {
                        return `
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="${item.data}">${item.name}</a>
                            </li>
                        `})}
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
            {name: "Profile", data:"profile.html"},
            {name: "Dashboard", data:"dash.html"},
            {name: "Records", data:"records.html"},
            {name: "Connections", data:"connections.html"},
            {name: "Configuration", data:"config.html"}
        ]
    }
}