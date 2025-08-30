const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    res.send({ response: `You said: ${message}` });
});
let items = [];
app.get('/items', (req, res) => {
    res.send(items);
});

app.get('/api/items', (req, res) => {
    res.send(items);
});
app.post('/items', (req, res) => {
    const { item } = req.body;
    items.push(item);
    res.send({ message: 'Item added', items });
});

app.post('/api/items', (req, res) => {
    const { item } = req.body;
    items.push(item);
    res.send({ message: 'Item added', items });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});