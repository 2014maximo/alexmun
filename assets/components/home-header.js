class SellHeaderHome extends HTMLElement {
      constructor () {
        super();
      }
      
      connectedCallback () {
        this.innerHTML = `
        <header>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn text-light fs-70" onclick="closeNav()">&times;</a>
        <div class="espaciado"></div>
        <ul class="list-group text-center">
            <li>
                <button onclick="openComponent('aboutMe')">Acerca de mi</button>
            </li>
            <li>
                <button onclick="openComponent('study')">Estudios</button>
            </li>
            <li>
                <button onclick="openComponent('skills')">Habilidades</button>
            </li>
            <li>
                <button onclick="openComponent('works')">Trabajos</button>
            </li>
            <li>
                <button onclick="openComponent('projects')">Proyectos</button>
            </li>
            <li>
                <button onclick="openComponent('contactMe')">Contáctame</button>
            </li>
        </ul>
    </div>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="row">
                <div id="main" class="text-right w-100">

                    <div class="contain" onclick="myFunction(this)">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</header>
    `;
    }
}
window.customElements.define('sell-head-home', SellHeaderHome)