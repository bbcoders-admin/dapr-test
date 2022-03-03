const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;
const orders = [];
app.get('/order', (_req, res) => {
    console.log('sending orders');
    res.send(orders);
});

app.post('/neworder', (req, res) => {
    const data = req.body.data;
    const orderId = data.orderId;
    console.log("Got a new order! Order ID: " + orderId);

    orders.push(orderId);

});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));