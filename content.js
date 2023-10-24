const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a, input");

for (let i = 0; i < elements.length; i++) {
    let modifiedHTML = elements[i].innerHTML;

    // Replace explicit content with a more benign phrase
    modifiedHTML = modifiedHTML.replace(/porn/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/pornography/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/pornographic/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/sex/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/sexual/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/xvideos/gi, 'future things');
    modifiedHTML = modifiedHTML.replace(/xnxx/gi, 'future things');

    // Update the element's innerHTML with the modified content
    elements[i].innerHTML = modifiedHTML;
}


// Define the list of keywords to match for pornographic content
const keywordsToBlock = ["porn", "pornography", "adult", "xxx"];

// Function to replace a link with a warning message
function replaceLinkWithWarning(link) {
    link.href = "https://google.com/"; // Replace with your warning page URL
    link.textContent = "This link has been blocked for your safety.";
    link.style.color = "red";
}

// Function to check and replace links
function checkAndReplaceLinks() {
    const links = document.querySelectorAll("a"); // Find all links on the page

    links.forEach((link) => {
        const lowerCaseHref = link.href.toLowerCase();

        // Check if the link contains any of the blocked keywords
        if (keywordsToBlock.some((keyword) => lowerCaseHref.includes(keyword))) {
            replaceLinkWithWarning(link);
        }
    });
}

// Execute the link checking and replacement on page load
checkAndReplaceLinks();


// Listener to execute when the extension icon is clicke
