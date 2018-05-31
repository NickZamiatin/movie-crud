require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const movieRoutes = require('./routes/movies')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.bodyParser({extended : true}));




app.get('/', (request, response) => {
    response.send('menu-knex')
})

app.use('/movies', movieRoutes);


app.listen(process.env.PORT, () => {
    console.log(`library-express: Express application is listening on port ${process.env.PORT}...`);
});