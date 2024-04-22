class SellContactMe extends HTMLElement {
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
                    <h3 class="text-center text-light f-patua-one fs-40">Contáctame</h3>
                    <form action="" method="post">
                        <div class="form-group">
                            <input type="email" class="form-control bg-transparent" id="exampleFormControlInput1" placeholder="john@email.com">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control bg-transparent" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="button" class="btn btn-outline-secondary">Secondary</button>
                    </form>
                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
  `;
    }
}
window.customElements.define('sell-contact-me', SellContactMe)