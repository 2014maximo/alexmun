class SellSkills extends HTMLElement {
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
                    <h3 class="text-center text-light f-patua-one fs-40">Habilidades</h3>
                    <div class="row">
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>LA ADAPTABILIDAD</b>
                                <p class="text-light">
                                Como desarrollador de software con una sólida experiencia en frontend, siempre estoy abierto a explorar nuevas áreas y ampliar mis horizontes. Mi mentalidad adaptable me permite sumergirme en nuevos desafíos, ya sea en el mundo del backend, la arquitectura de sistemas o cualquier otra rama de la tecnología. Estoy constantemente buscando oportunidades para aprender y crecer, aprovechando mi experiencia previa para adaptarme rápidamente a cualquier entorno y contribuir de manera significativa al equipo y al proyecto.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>FLUIDEZ VERBAL Y COMUNICACIÓN ASERTIVA</b>
                                <p class="text-light">
                                Además de mi sólida experiencia en frontend y mi capacidad para adaptarme a diferentes entornos, destaco por mi fluidez verbal y mi habilidad para comunicarme de manera clara y asertiva. Estas habilidades me permiten colaborar eficazmente con colegas de diferentes áreas, expresar ideas de forma coherente y persuasiva, y contribuir al éxito del equipo en cualquier proyecto que emprendamos.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>HABILIDAD SOBRESALIENTE PARA EL TRABAJO EN EQUIPO Y PROACTIVIDAD</b>
                                <p class="text-light">
                                Mi capacidad para adaptarme a nuevos desafíos se combina con una habilidad sobresaliente para el trabajo en equipo y una actitud proactiva en cada proyecto en el que participo. Disfruto colaborando con colegas de diferentes disciplinas y aportando ideas innovadoras para encontrar soluciones creativas a los problemas. Siempre estoy listo para asumir responsabilidades adicionales, anticipar necesidades y tomar medidas para impulsar el éxito del equipo y alcanzar nuestros objetivos comunes.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>ESCUCHA ACTIVA CON UN ENFOQUE EN LA MEJORA CONTINUA</b>
                                <p class="text-light">
                                Además de mi habilidad sobresaliente para el trabajo en equipo y mi proactividad, me distingo por mi enfoque en la mejora continua, impulsado por una escucha activa y una mentalidad receptiva. Valorando las opiniones y perspectivas de mis colegas, estoy siempre dispuesto a aprender y a evolucionar tanto a nivel personal como profesional. Esta dedicación a la mejora continua me impulsa a buscar constantemente nuevas formas de optimizar procesos, resolver problemas y alcanzar resultados excepcionales en cada proyecto en el que participo.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>ORIENTACIÓN AL LOGRO Y ADMINISTRACIÓN EFICAZ DEL TIEMPO</b>
                                <p class="text-light">
                                Además de mi enfoque en la mejora continua, demuestro una fuerte orientación al logro y una habilidad destacada para administrar eficazmente el tiempo. Establezco metas claras y me comprometo a alcanzarlas con determinación y perseverancia. Utilizo de manera eficiente cada minuto de mi día, priorizando tareas y gestionando mi agenda de manera efectiva para cumplir con los plazos y objetivos establecidos. Esta combinación de orientación al logro y administración del tiempo me permite mantenerme enfocado en resultados y alcanzar niveles excepcionales de productividad en cada proyecto en el que me embarco.
                                </p>
                            </div>
                        </div>
                        <div class="col-6 p-4">
                            <div class="text-center text-light">
                                <b>FLEXIBILIDAD Y CAPACIDAD DE INNOVACIÓN</b>
                                <p class="text-light">
                                Mi enfoque en la mejora continua se complementa con una notable flexibilidad y una capacidad innata de innovación. Ante los desafíos cambiantes del entorno tecnológico, estoy preparado para adaptarme rápidamente y encontrar soluciones creativas y eficaces. Encuentro inspiración en la innovación y estoy constantemente explorando nuevas ideas y tecnologías para mejorar los procesos y elevar el nivel de excelencia en cada proyecto en el que participo. Esta combinación de flexibilidad y capacidad de innovación me permite abordar cualquier situación con confianza y alcanzar resultados excepcionales de manera consistente.
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
window.customElements.define('sell-skills', SellSkills)