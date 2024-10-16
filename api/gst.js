const axios = require('axios');

// Основна функція для отримання даних про геомагнітні бурі
module.exports = async (req, res) => {
    const API_KEY = process.env.API_KEY;
    const currentDate = new Date().toISOString().split('T')[0]; // Поточна дата у форматі yyyy-MM-dd
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // Дата 30 днів тому

    try {
        // Виконуємо запит до NASA GST API
        const response = await axios.get(`https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${currentDate}&api_key=${API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from NASA GST API');
    }
};
