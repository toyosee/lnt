const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all origins (or specify allowed origins)
app.use(cors(
  {
    origin: ['http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:5173',
      'http://127.0.0.1:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }
));

// Parse JSON request bodies
// app.use(bodyParser.json());

// using express json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount user routes
app.use('/api/users', userRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});