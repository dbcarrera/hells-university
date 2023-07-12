// Creates a custom CourseModal class that can be reused without writing a lot of boilerplate code.
class CourseModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <img class="modal-background" src="assets/course_modal_background.png"
            alt="Modal Background Image">
        <header class="modal-header">
            <button class="material-symbols-outlined dark" data-close-modal>arrow_back_ios_new</button>
            <h3>Saucier</h3>
        </header>

        <div>
            <h4 class="modal-text">Duration</h4>
            <h4 class="modal-medium-text">3 years</h4>

            <h4 class="modal-text">Intakes</h4>
            <h4 class="modal-medium-text">Jan, Feb, May, Aug, Nov</h4>

            <h4 class="modal-text">Entry Requirements</h4>
            <h4 class="modal-medium-text">Applications must meet at least one of the following</h4>

            <ul>
                <li>
                    Completion of a high school diploma
                    <h4 class="modal-li-small-text">Minimum GPA of 2.0 out of 4.0</h4>
                </li>

                <li>Completion of an accredited culinary course</li>
            </ul>

            <h4 class="modal-text">Other Requirements</h4>
            <h4 class="modal-medium-text">Since all courses are conducted in English, an applicant is
                expected to capable of communicating in English effectively.</h4>

            <a href="contact.html" class="modal-button">Contact Us</a>

            <h4 class="modal-button-small-text">Contact us to find out more or to enroll.<br>
                Exceptions may occur for some requirements.</h4>
            </div>
        `;

        // Gathers all the buttons that are meant to open modals.
        const openButton = document.querySelector("[data-open-modal]");
        const closeButton = document.querySelector("[data-close-modal]");
        const modal = document.querySelector("[data-modal]");

        // Whenever user clicks on the Read More button, it opens the modal.
        openButton.addEventListener("click", () => {
            modal.showModal();
            modal.style.opacity = "1"
            modal.style.transform = "translateY(0%)"
        });

        // Closes modal.
        closeButton.addEventListener("click", () => {
            modal.close();
            modal.style.opacity = "0"
            modal.style.transform = "translateY(25%)"
        });

        // Whenever user clicks off the modal it will close it.
        modal.addEventListener("click", e => {
            const dialogDimensions = modal.getBoundingClientRect()
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
                modal.style.opacity = "0"
                modal.style.transform = "translateY(25%)"
            };
        });
    }
}

// Defines this custom header as a custom element.
customElements.define('course-modal', CourseModal);
