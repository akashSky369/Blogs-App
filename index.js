const express = require('express');
const blog = require('./modals/modal')
const app = express();
const mongoose = require('mongoose');


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://akash1:4be9ff1268ff@signuplogin.hke7zwn.mongodb.net/")
    .then((result) => {
        app.listen(3000, () => {
            console.log("started...")
        })

    })
    .catch((err) => {
        console.log(err)
    })
app.get('/', (req, res) => {
    res.redirect('/all')
})

app.get('/all', (req, res) => {
    blog.find()
        .then((result) => {
            res.render('all', { result })
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/create', (req, res) => {
    res.render('create')
})


app.post('/createForm', (req, res) => {

    const obj = new blog(req.body);
    obj.save()
        .then((result) => {

            res.redirect('/all');
        })
        .catch((err) => {
            console.log(err)
        })


})


app.use('/', (req, res) => {
    res.send('Not Found!')
})
