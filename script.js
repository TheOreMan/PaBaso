let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    console.log(menu.classList);
}

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Display the first image initially
showImage(currentIndex);

// Set interval for automatic sliding
setInterval(nextImage, 3000); // Change the interval time as needed (in milliseconds)
