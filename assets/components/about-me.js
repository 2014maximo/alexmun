class SellAboutMe extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 border">
            <div class="espaciado"></div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 border">
                    <h3 class="text-center text-light f-patua-one fs-40">Acerca de mí</h3>
                    <div class="text-center">
                      <p class="text-light">
                      Desarrollador frontend, web y mobile en constante formación desde hace más de 5 años, en mayor parte enfocado a Angular. Tengo mente abierta y disposición a desarrollar en otras tecnologías que hagan parte del frontend como backend de igual manera.
                      </p> 
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
window.customElements.define('sell-about-me', SellAboutMe)