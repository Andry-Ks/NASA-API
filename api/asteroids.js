const axios = require('axios');

// Основна функція, яка виконує запит до NASA API
module.exports = async (req, res) => {
    const API_KEY = process.env.API_KEY;

    try {
        // Виконуємо запит до NASA API
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
        res.status(200).json(response.data); // Відправляємо отримані дані як JSON
    } catch (error) {
        res.status(500).send('Error fetching data from NASA API');
    }
};
