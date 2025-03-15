require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Routes import
const userRoutes = require('./api/routes/user');
const eventRoutes = require('./api/routes/event');
const paymentRoutes = require('./api/routes/payment'); // Import payment routes
const cors = require('./cors');
const error = require('./error');

// Database connection
var connectDatabase = require('./databaseConnect');
const DATABASE_KEY = process.env.DATABASE_URL;

connectDatabase(DATABASE_KEY);

mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connection successful');
}).catch((err) => console.log('Error connecting to database:', err));

mongoose.Promise = global.Promise;

// Body Parser middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static URL
app.use('/Uploads', express.static('Uploads'));

// Handling CORS error
app.use(cors);
app.use('/user', userRoutes);
app.use('/event', eventRoutes);
app.use('/payment', paymentRoutes); // Use the payment routes

// Error handling middleware
app.use(error);

module.exports = app;



// require('dotenv').config();
// // Create Express App
// const express = require('express');
// const app = express();
// const mongoose=require('mongoose')

// // Body Parser
// const morgan = require('morgan');
// const bodyParser = require('body-parser');

// //Routes import
// const userRoutes = require('./api/routes/user');
// const eventRoutes=require('./api/routes/event');
// const cors = require('./cors');
// const error = require('./error');

// connectDatabase
// var connectDatabase = require('./databaseConnect')
// const DATABASE_KEY = process.env.DATABASE_URL

// connectDatabase(DATABASE_KEY);


// const db = process.env.DATABASE_URL
// mongoose.set('strictQuery', false)
// mongoose.connect(db).then(() => {
//     console.log('connection successful');
// }).catch((err) => console.log('Error connecting to database'))
// mongoose.Promise = global.Promise;


// //Body Parser
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// //Static Url
// app.use('/Uploads',express.static('Uploads'))

// //Handeling cors error
// app.use(cors);
// app.use('/user', userRoutes);
// app.use('/event',eventRoutes)
// app.use(error);

// module.exports = app;