// Creates a custom header class that can be reused without writing a lot of boilerplate code.
class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Gets the path name of the window.
        const windowPathName = window.location.pathname;
        // Bool whether you are currently on the welcome page or not.
        const isWelcomePage = windowPathName.includes('index.html') || windowPathName == '/hells-university/';

        this.innerHTML = `
        <header class="header-main">
        <!--If you are on the welcome page, there is no logo.-->
        <img class="default-logo" src="assets/default_logo.png" alt="default_logo">
        <nav>
            <ul class="nav-link">
                <li>
                    <a href="index.html">Welcome</a>
                </li>
                <li>
                    <a href="courses.html">Courses</a>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="campus.html">Campus</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
        </nav>
    </header>
    `;

        // Gets all html elements using .nav-link a.
        const navLinkElems = document.querySelectorAll('.nav-link a');

        navLinkElems.forEach(navLinkElem => {
            // Checks all of the elements on the navbar, and if it matches the name of the page it will be highlighted with the active-nav class.
            if (navLinkElem.href.includes(windowPathName)) {

                navLinkElem.classList.add('active-nav');
            }
        });

        if (isWelcomePage) {
            // If if you are on the welcome page, adds the welcome-page class to decrease size of the navbar.
            this.querySelector('header').classList.add('welcome-page');
            // Removes the logo element from the navbar.
            const logoElem = this.querySelector('.default-logo');
            logoElem.remove();
        }

    }
}

// Defines this custom header as a custom element.
customElements.define('header-main', Header);