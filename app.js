const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const {connectMongoDb} = require('./connection')
const contactForm = require('./models/contact');
dotenv.config();
const db = process.env.MONGODB_URI;
console.log(db);
connectMongoDb(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/form', async (req, res) => 
{
    await contactForm.create({
        name: req.body.name,
        email: req.body.email,
        description: req.body.message
    });
    res.send('Form Submitted Successfully');
    // res.redirect('/');
});

app.listen(port, () => { 
    console.log(`App listening at http://localhost:${port}`); 
});