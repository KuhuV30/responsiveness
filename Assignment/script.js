const dynamicImage = document.getElementById('dynamicImage');

// Function to update the image based on window width
function updateImage() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1200) {
        dynamicImage.src = './images/image2.jpeg'; // Large screen image
    } else if (windowWidth >= 768) {
        dynamicImage.src = './images/image1.png'; // Medium screen image
    } else {
        dynamicImage.src = './images/images3.jpeg'; // Small screen image
    }
} 

// Run the function when the page loads
updateImage();

// Add an event listener to run the function when the window is resized
window.addEventListener('resize', updateImage);
