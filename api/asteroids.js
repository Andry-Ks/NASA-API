const axios = require('axios');

module.exports = async (req, res) => {
    const API_KEY = process.env.API_KEY;

    try {
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from NASA API');
    }
};