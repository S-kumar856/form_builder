const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const responseRoutes = require('./routes/responseRoutes');
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use('/api', formRoutes);
app.use('/api', responseRoutes);

app.get('/', (req, res) => {
    console.log("hi im server");
    res.send("im server");
});

app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Connected to MongoDB')
        }).catch((err) => {
            console.log(err)
        })
    console.log(`Server is running on port ${PORT}`)
})


