const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routes/UserRoutes');
const dotenv = require('dotenv');
const {authenticateUser} = require('./Middleware/AuthMiddleware')

dotenv.config();
const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://jv8110909191:ASas12.,@cluster0.qsdf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 

app.use(cookieParser());
app.use(bodyParser())
app.use('/protected', authenticateUser, express.static('public'));
app.use(express.static('public'));
app.use('/api/users', userRoutes);

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

