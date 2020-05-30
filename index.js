
const express = require('express');
const hbs = require('hbs');


const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Miriam Yusalet Barrera Villalobos',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/Da Vinci', (req, res)=>{
    res.render('Leonardo', {
        autor : 'Miriam Yusalet Barrera Villalobos',
        year : new Date().getFullYear(),
        title : 'Leonardo da Vinci'
    });
});

app.get('/Kahlo', (req, res)=>{
    res.render('Frida', {
        autor : 'Miriam Yusalet Barrera Villalobos',
        year : new Date().getFullYear(),
        title : 'Frida Kahlo'
    });
});

app.get('/Rivera', (req, res)=>{
    res.render('Diego', {
        autor : 'Miriam Yusalet Barrera Villalobos',
        year : new Date().getFullYear(),
        title : 'Vasili Kandinski',
        algo : "Diego Rivera"
    });
});

app.get('/Botero', (req, res)=>{
    res.render('Fernando', {
        autor : 'Miriam Yusalet Barrera Villalobos',
        year : new Date().getFullYear(),
        title : 'Fernando Botero'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});