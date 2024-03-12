dotenv = require('dotenv');

dotenv.config({path:'./.env'});

const port = 3333;
const DB_URL = `mongodb+srv://pnarukaosw:${process.env.DB_PASSWORD}@broadcastchat.npy3f8w.mongodb.net/?retryWrites=true&w=majority&appName=broadcastChat`

module.exports = {
    port,
    DB_URL
}