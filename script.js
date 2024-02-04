

// function moveNoButton() {
//     const noButton = document.getElementById('noButton');

//     // Get random position only when the cursor hovers over the 'No' button
//     const maxX = window.innerWidth - noButton.clientWidth;
//     const maxY = window.innerHeight - noButton.clientHeight;
//     const randomX = Math.random() * maxX;
//     const randomY = Math.random() * maxY;

//     // Apply smooth slide to the new position
//     noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
// }

// // Initialize the No button position
// document.getElementById('noButton').style.transform = 'translate(0, 0)';
function redirectToThankYouPage() {
    window.location.href = 'thankyou.html';
}
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Get the dimensions of the buttons
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Get the dimensions of the viewport
    const viewportWidth = 1000;
    const viewportHeight = 400;

    // Calculate the maximum allowed positions
    const maxX = viewportWidth - buttonWidth;
    const maxY = viewportHeight - buttonHeight;

    // Calculate random positions within the visible frame
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply smooth slide to the new position
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
    function changeVideo(newVideoSrc) {
        const backgroundVideo = document.getElementById('backgroundVideo');
        backgroundVideo.src = newVideoSrc;
        backgroundVideo.load(); 
        backgroundVideo.play(); 
}
// Initialize the No button position next to the Yes button
document.getElementById('noButton').style.transform = `translate(0,0))`;





