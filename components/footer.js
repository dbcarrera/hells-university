// Creates a custom header class that can be reused without writing a lot of boilerplate code.
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <p class="copyright">Copyright ©2023 Hell's University
            <br><br>
            Massachusetts Hall, Cambridge, MA 02138, USA
            <br>
            (702) 731-7373
            <br>
            <br>
            DISCLAIMER: Hell's University shall not be liable for any loss or damage caused by the usage of any
            information obtained from this site or representatives.
        </p>
        </footer>
        `;
    }
}

// Defines this custom header as a custom element.
customElements.define('footer-main', Footer);
