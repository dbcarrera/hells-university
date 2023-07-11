// This script allows position (top and left) of the glass morphism card to be altered from the html code
// This is done to avoid inline css in the html code
const glassCards = document.querySelectorAll('.card');

glassCards.forEach(card => {
    // Gets all the attributes given in the html code.
    const topPosition = card.getAttribute('data-top');
    const leftPosition = card.getAttribute('data-left');
    const isLong = card.getAttribute('data-isLong');

    // Sets the styles with the given data.
    card.style.top = topPosition;
    card.style.left = leftPosition;
    
    // If the card is "Long":
    if (isLong) {
        // Changes the height and width of the card.
        card.style.height = '35%';
        card.style.width = '65%';

        // Goes into the nested .card .content img style and changes width of the image.
        const nestedImg = card.querySelector('.content img');
        nestedImg.style.width = '46.25%';

        // Goes into nested .card .content h2 (and also p) style and changes position of text.
        const nestedHeaderText = card.querySelector('.content h2');
        nestedHeaderText.style.transform = "translateX(-50%)";
        nestedHeaderText.style.top = "10%"
        nestedHeaderText.style.paddingLeft = '52%';


        const nestedBodyText = card.querySelector('.content p');
        nestedBodyText.style.top = "17.5%"
        nestedBodyText.style.paddingLeft = "57%"
        nestedBodyText.style.paddingRight = "3%"


        // Goes into nested .card .content a style to allow Read more to be visible.
        const nestedHref = card.querySelector('.content a');
        nestedHref.style.transform = "translateX(0%)";
        nestedHref.style.left = "0%";
        nestedHref.style.bottom = "0%";
        nestedHref.style.padding = "1% 12.5%";
        nestedHref.style.borderRadius = "0px";  // Sets border to be 0 so can use specifically the top right border to be 20px.
        nestedHref.style.borderTopRightRadius = "20px";
        
    }
});