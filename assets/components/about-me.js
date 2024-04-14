class SellAboutMe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="espaciado"></div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h3 class="text-center text-light f-patua-one fs-40">Acerca de mí</h3>
                    <div class="text-center p-3">
                      <p class="text-light">
                        Desarrollador frontend, web y mobile en constante formación desde hace más de 5 años, en mayor parte enfocado a Angular. Tengo mente abierta y disposición a desarrollar en otras tecnologías que hagan parte del frontend como backend de igual manera.<br>
                        <br>
                        Inicie el mundo de la computación a los 5 años en unos cursos infantiles que estaban enfocados a juegos. Debido a que los computadores eran un lujo en ese entonces, mi familia era muy humilde solo me limitaba a admirar los equipos que en esos entonces trabajaban con windows 95.<br>
                        <br>
                          Gracias al avance tecnológico, el bajo coste de equipos me permitió tener mi primer equipo a los 16 años y poder conocer de cerca los sistemas informáticos.
                      </p> 
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