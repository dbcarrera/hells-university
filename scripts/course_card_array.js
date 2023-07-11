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
        nestedHeaderText.style.paddingTop = '5%';
        nestedHeaderText.style.paddingLeft = '56%';


        const nestedBodyText = card.querySelector('.content p');
        nestedBodyText.style.paddingLeft = "56%"


        // Goes into nested .card .content a style to allow Read more to be visible.
        const nestedHref = card.querySelector('.content a');
        nestedHref.style.transform = "translateX(-65%) translateY(-30%)";
        nestedHref.style.padding = "1% 20%";
        nestedHref.style.borderRadius = "0px";  // Sets border to be 0 so can use specifically the top right border to be 20px.
        nestedHref.style.borderTopRightRadius = "20px";
        
    }
});