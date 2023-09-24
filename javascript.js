    let currentIndex = 0;
    const images = document.querySelectorAll('.slideshow-image');
function showImage(index) {
        images[currentIndex].style.opacity = 0;
        currentIndex = (index + images.length) % images.length;
        images[currentIndex].style.opacity = 1;
        setTimeout(() => showImage(currentIndex + 1), 5000); // Change image every 5 seconds
    }
    showImage(currentIndex);