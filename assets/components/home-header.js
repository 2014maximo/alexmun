class SellHeaderHome extends HTMLElement {
      constructor () {
        super();
      }
      
      connectedCallback () {
        this.innerHTML = `
        <header>
        <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn text-light fs-50" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  <button onclick="ocultarComponente()">Ocultar componente</button>
</div>
<div class="row">
<div class="col-md-1"></div>
<div class="col-md-10">
<div id="main" class="text-right">
  <span class="fs-50 cursor-p text-light" onclick="openNav()">&#9776;</span>
</div>
</div>
<div class="col-md-1"></div>
</div>
    </header>
    `;
    }
}
window.customElements.define('sell-head-home', SellHeaderHome)