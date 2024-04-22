class SellWorks extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="espaciado"></div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h3 class="text-center text-light f-patua-one fs-40">Trabajos</h3>
                    <div class="row">
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>SMARTSOFTLABS</b>
                                <p class="text-light">
                                    Carrera técnica basada en competencias, que se desarrollan especialmente en prácticas,
                                    donde se aplicaron tecnologías como Java, Sql, Algoritmos, Javascript, Html, entre
                                    otras.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>COTRAFA</b>
                                <p class="text-light">
                                    Carrera técnica basada en competencias, que se desarrollan especialmente en prácticas,
                                    donde se aplicaron tecnologías como Java, Sql, Algoritmos, Javascript, Html, entre
                                    otras.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>SIMBOLO</b>
                                <p class="text-light">
                                    Carrera técnica basada en competencias, que se desarrollan especialmente en prácticas,
                                    donde se aplicaron tecnologías como Java, Sql, Algoritmos, Javascript, Html, entre
                                    otras.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>ESTRATEGICO</b>
                                <p class="text-light">
                                    Carrera técnica basada en competencias, que se desarrollan especialmente en prácticas,
                                    donde se aplicaron tecnologías como Java, Sql, Algoritmos, Javascript, Html, entre
                                    otras.
                                </p>
                            </div>
                        </div>
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
window.customElements.define('sell-works', SellWorks)