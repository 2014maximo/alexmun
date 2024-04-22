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
                      <p class="text-light f-bebas">
                      ¡Hola! Soy un apasionado desarrollador frontend, web y mobile con más de 5 años de experiencia en constante evolución. Mi enfoque principal ha sido Angular, donde me he sumergido en su vasto ecosistema, pero no me detengo ahí. Estoy siempre listo para explorar nuevas tecnologías que complementen el mundo del frontend y, ¿por qué no?, aventurarme en el backend también.<br>
                        <br>
                        Mi viaje en el mundo de la informática comenzó a los tiernos 5 años, participando en cursos infantiles llenos de juegos que despertaron mi curiosidad por la tecnología. En aquel entonces, los ordenadores eran un lujo y, siendo parte de una familia humilde, solo podía admirarlos desde lejos mientras trabajaban con el legendario Windows 95.<br>
                        <br>
                        Con el paso del tiempo y el avance tecnológico, llegó el momento de tener mi propio equipo a los 16 años. Fue entonces cuando pude sumergirme de lleno en el fascinante mundo de los sistemas informáticos y explorar todas sus posibilidades.<br>
                        <br>
                        Ahora, aquí estoy, emocionado de seguir aprendiendo y creciendo en este apasionante campo, listo para enfrentar cualquier desafío que se presente en el camino.
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