const axios = require('axios');

module.exports = async (req, res) => {
    const API_KEY = process.env.API_KEY;
    const currentDate = new Date().toISOString().split('T')[0]; //The current date in the format yyyy-MM-dd
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; //Date 30 days ago

    try {
        const response = await axios.get(`https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${currentDate}&api_key=${API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from NASA GST API');
    }
};