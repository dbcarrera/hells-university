// Creates a custom Chatbot class that can be reused without writing a lot of boilerplate code.
class Chatbot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <button class="chatbot-toggler">
            <span class="material-symbols-outlined">mode_comment</span>
            <span class="material-symbols-outlined">close</span>
        </button>
        <div class="chatbot">
            <header>
                <h2>ChatBot</h2>
                <span class="close-btn material-symbols-outlined">close</span>
            </header>
            <ul class="chatbox">
                <li class="chat incoming">
                    <span class="material-symbols-outlined">smart_toy</span>
                    <p>Hello, how can I help you today?</p>
                </li>
            </ul>
            <div class="chat-input">
                <textarea placeholder="Please enter a message..." required></textarea>
                <span id="send-btn" class="material-symbols-outlined">send</span>
            </div>
        </div>
        `;
    }
}

// Defines this custom header as a custom element.
customElements.define('custom-chatbot', Chatbot);
