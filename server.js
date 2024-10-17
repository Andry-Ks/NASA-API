require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/apod', require('./api/apod'));
app.use('/api/apod10', require('./api/apod10'));
app.use('/api/cats', require('./api/cats'));
app.use('/api/asteroids', require('./api/asteroids'));
app.use('/api/gst', require('./api/gst'));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});