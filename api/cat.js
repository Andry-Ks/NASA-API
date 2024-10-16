import { getCatImages } from '../api/catApi.js'; 

async function displayCats() {
    const images = await getCatImages(10);
    const gallery = document.getElementById('cat-gallery');
    gallery.innerHTML = '';

    
    if (images.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Коти не знайдені.';
        gallery.appendChild(message);
        return;
    }

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = 'Cat image';
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';
        gallery.appendChild(imgElement);
    });
}

document.addEventListener('DOMContentLoaded', displayCats);