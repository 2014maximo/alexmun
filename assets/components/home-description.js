class SellDescriptionHome extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div id="description" class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="espaciado"></div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h3 class="text-center text-light f-patua-one fs-40">Hola, soy Alex Muñoz pero puedes llamarme
                        Alexmun.<br>
                        Soy desarrollador front-end.</h3>
                    <div class="text-center">
                        <a href="">Mira mis proyectos '>'</a>
                        <a href="">Contactame '>'</a>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
  `;
  }
}
window.customElements.define('sell-description-home', SellDescriptionHome)