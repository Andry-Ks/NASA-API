const axios = require('axios');

module.exports = async (req, res) => {
    const API_KEY = process.env.CAT_API_KEY;

    try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from Cat API');
    }
};