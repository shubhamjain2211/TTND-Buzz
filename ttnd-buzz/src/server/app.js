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
// app.use('/login', require('./routes/api/googleauth'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/buzz', require('./routes/api/buzz'));
app.use('/api/complaint', require('./routes/api/complaint'));
app.use('/api/upload', require('./routes/api/upload'));

const PORT = 5000;
app.listen(PORT, console.log(`Server started on PORT: ${PORT}`));
