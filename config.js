
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const config = {
    PORT: 3000, 
    SECRET:'INEXCELSISDEO',
    DB_URL: 'mongodb+srv://{user}:{password}@cluster0.vqyufum.mongodb.net/'
}

module.exports = config