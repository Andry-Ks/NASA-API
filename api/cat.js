import { getCatImages } from '../api/catApi.js';

async function displayCats(breedIds = '') {
    const images = await getCatImages(10, breedIds);
    const gallery = document.getElementById('cat-gallery');
    gallery.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = 'Cat image';
        imgElement.style.width = '200px';
        imgElement.style.margin = '10px';
        gallery.appendChild(imgElement);
    });
}

async function fetchBreeds() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': process.env.CAT_API_KEY
        }
    });
    return response.json();
}

async function init() {
    const breeds = await fetchBreeds();
    const breedSelect = document.getElementById('breed-select');

    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });

    breedSelect.addEventListener('change', () => {
        const selectedBreed = breedSelect.value;
        displayCats(selectedBreed);
    });

    displayCats();
}

document.addEventListener('DOMContentLoaded', init);
