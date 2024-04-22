class SellHeaderHome extends HTMLElement {
      constructor () {
        super();
      }
      
      connectedCallback () {
        this.innerHTML = `
        <header class="fixed-top">
            <div class="fixed-top p-5">
                <div class="d-flex justify-content-between">
                    <p class="text-light f-bebas tc-blue-six fs-25">A U M P</p>
                </div>
            </div>
            <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn text-light fs-70" onclick="closeNav()">&times;</a>
                <div class="espaciado"></div>
                <ul class="list-group text-center">
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('aboutMe')">Acerca de mi</button>
                    </li>
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('study')">Estudios</button>
                    </li>
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('skills')">Habilidades</button>
                    </li>
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('works')">Trabajos</button>
                    </li>
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('projects')">Proyectos</button>
                    </li>
                    <li>
                        <button class="bg-transparent text-light" onclick="openComponent('contactMe')">Contáctame</button>
                    </li>
                </ul>
            </div>
            <div id="main" class="cursor-p" onclick="openNav()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </header>
    `;
    }
}
window.customElements.define('sell-head-home', SellHeaderHome)