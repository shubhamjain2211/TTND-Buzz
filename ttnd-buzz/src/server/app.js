const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false})) ;

app.get('/', (req,res) => res.send('Api Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/buzz', require('./routes/api/buzz'));
app.use('/api/complaint', require('./routes/api/complaint'));

const PORT = 5000;
app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
