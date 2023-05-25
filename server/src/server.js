const http = require('http');
// mongoose = require('mongoose');

require('dotenv').config();

const {mongoConnect} = require('./services/mongo');
const app = require('./app');
const {loadPlanetsData} = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');


const PORT = process.env.PORT || 8000;


const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`listening on ${PORT}....`);
    });
}

startServer();

