const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello from Express' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'This is Contact page.' })
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'This is about page.' });
});

app.get((req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
