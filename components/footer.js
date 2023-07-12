// Creates a custom footer class that can be reused without writing a lot of boilerplate code.
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="row">
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
                    <div class="social-icon">
                    <a href="https://www.facebook.com/gordonramsay" target="_blank"> 
                        <i class="fab fa-facebook"></i>
                    </a>
                    
                    <a href="https://www.instagram.com/gordongram/" target="_blank"> 
                        <i class="fab fa-instagram"></i>
                    </a>

                    <a href="https://www.youtube.com/watch?v=VZrDxD0Za9I" target="_blank"> 
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
        `;
    }
}

// Defines this custom header as a custom element.
customElements.define('footer-main', Footer);
