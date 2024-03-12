const express = require('express');
const { createChat, getChat } = require('../controllers/chatControl');

const ChatRouter = express.Router();

ChatRouter.post('/create', createChat);

ChatRouter.get('/chat', getChat);

module.exports = {
    ChatRouter
}