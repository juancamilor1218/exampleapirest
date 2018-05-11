const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://exampleapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta'];
let products = [
    {title: 'Leche Entera En Bolsa X 1 Litro', precio: 1456, marca: 'Colanta', logo: '',idCompany: 1, ofert: 1},
    {title: 'Arroz Excelso Tradicional', precio: 12200, marca: 'Supremo' ,logo: '',idCompany: 1, ofert: 0},
    {title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: '',idCompany: 1, ofert: 0},
    {title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7368, marca: 'RANCHERA' ,logo: '',idCompany: 1, ofert: 0},
    {title: 'Pan Super Hamburguesa X 4', precio: 3016, marca: 'BIMBO' ,logo: '',idCompany: 1, ofert: 1},
    {title: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,logo: '',idCompany: 1, ofert: 1},
    {title: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,logo: '',idCompany: 1, ofert: 0},
    {title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: '',idCompany: 1, ofert: 0},

];
let company=[{id: 1,name: 'Exito',logo: '',direccion:''},];

];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users
app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})

// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})