const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


// Rutas

const perfumeRoutes = require("./routes/perfume.routes");
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
});


// Habilitar las rutas - Middleware

app.use('/api/perfumes',perfumeRoutes);
app.use('/api/users',userRoutes);

// app.use("*", error404);
// app.use(error404);

  
app.listen(port, () => {

  console.log('serverrunning');
});

module.exports = app; 
