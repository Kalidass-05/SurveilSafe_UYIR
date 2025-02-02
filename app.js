const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routes/UserRoutes');
const dotenv = require('dotenv');
const {authenticateUser, authenticateEmergencyUser, authenticateHazardsUser, checkForTocken} = require('./Middleware/AuthMiddleware')

dotenv.config();
const app = express();
const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI; 

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/protected', authenticateUser, express.static('public'));
app.use('/emergency', authenticateEmergencyUser, express.static('public'));
app.use('/hazards', authenticateHazardsUser, express.static('public'));
app.use(express.static('public'));

app.use('/api/users', userRoutes);

app.get('/', (req,res) => {
    let userType = checkForTocken(req);
    switch(userType){
        case 'Emergency':
            res.redirect('/emergency');
            break;
        case 'Hazards':
            res.redirect('/hazards');
            break;
        default:
            res.redirect('/home.html');
            break;
    }
});

mongoose.connect(MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log(err));

