const express = require('express');
const app = express();
app.use(express.json());

// In-memory array to store items
let items = [];

// GET /items endpoint - returns all items
app.get('/items', (req, res) => {
    res.send(items);
});

// POST /items endpoint - adds a new item
app.post('/items', (req, res) => {
    const { item } = req.body;
    items.push(item);
    res.send({ message: 'Item added', items });
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});