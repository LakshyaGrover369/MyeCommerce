const express = require('express');
const dotenv = require('dotenv'); // Correct import statement
const cors = require('cors');
const app = express();
const { mongoose } = require('mongoose');

dotenv.config(); // Load environment variables from .env file


mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('momgo db connected successfully');
    })
    .catch((err) => {
        console.log('mongodb not connected due to : ', err);
    })

app.use(express.json());

app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET" , "POST"],
    credentials: true,
}));

app.get('/', (req, res) => {
    res.send("hello server");
});
app.use('/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
