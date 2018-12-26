const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const app = express.Router();

app.get('/', shopController.getIndex);

app.get('/products', shopController.getProducts);

app.get('/products/:productId', shopController.getProduct);

app.get('/cart', shopController.getCart);

app.post('/cart', shopController.postCart);

app.post('/cart-delete-item', shopController.postCartDeleteProduct);

app.post('/create-order', shopController.postOrder);

app.get('/orders', shopController.getOrders);

module.exports = app;
