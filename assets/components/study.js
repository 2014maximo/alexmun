class SellStudy extends HTMLElement {
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
                    <h3 class="text-center text-light f-patua-one fs-40">Estudios</h3>
                    <div class="row">
                        <div class="col p-4">
                            <div class="text-center text-light">
                                <b>DESARROLLO DE SOFTWARE<br>(2016-2017)<br>SENA</b>
                                <p class="text-light">
                                    Carrera técnica basada en competencias, que se desarrollan especialmente en prácticas,
                                    donde se aplicaron tecnologías como Java, Sql, Algoritmos, Javascript, Html, entre
                                    otras.
                                </p>
                            </div>
                        </div>
                        <div class="col p-4">
                            <div class="text-center text-light">
                                <b>ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN<br>(2021-2023)<br>SENA</b>
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
window.customElements.define('sell-study', SellStudy)