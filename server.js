const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://exampleapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta'];
let products = [
    {id: 1, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1456, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',idCompany: 1, ofert: 1},
    {id: 2, title: 'Arroz Excelso Tradicional', precio: 12200, marca: 'Supremo' ,logo: 'http://www.tumercado.co/2845-large_default/arroz-supremo-excelso-tradicional-5000gr.jpg',idCompany: 1, ofert: 0},
    {id: 3, title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: 'http://www.eurosupermercados.com/wp-content/uploads/2017/02/7701018007151.png',idCompany: 1, ofert: 0},
    {id: 4, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7368, marca: 'RANCHERA' ,logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',idCompany: 1, ofert: 0},
    {id: 5, title: 'Pan Super Hamburguesa X 4', precio: 3016, marca: 'BIMBO' ,logo: 'http://www.exito.com/images/products/981/0000354862337981/0000354863975242_lrg_a.jpg',idCompany: 1, ofert: 1},
    {id: 6, title: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,logo: '',idCompany: 1, ofert: 1},
    {id: 7, title: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,logo: '',idCompany: 1, ofert: 0},
    {id: 8, title: 'Arequipe Alpina 220 Grs', precio: 4690, marca: 'Alpina' ,logo: '',idCompany: 1, ofert: 0},
   	{id: 9, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 7990, marca: 'EXITO MARCA PROPIA' ,logo: '',idCompany: 1, ofert: 0},
   	{id: 10, title: 'Crema Dental Total 12 Clean Mint X 75 ml', precio: 7819, marca: 'Colgate' ,logo: '',idCompany: 1, ofert: 0},
   	{id: 11, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1320, marca: 'Colanta', logo: '',idCompany: 2, ofert: 1},
   	{id: 12, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7300, marca: 'Colanta', logo: '',idCompany: 2, ofert: 0},
   	{id: 13, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 8050, marca: 'EXITO MARCA PROPIA' ,logo: '',idCompany: 2, ofert: 0},
   	{id: 14, title: 'Chocolate Corona x 500gr', precio: 4990, marca: 'Corona' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 15, title: 'Salchicha Viena Zenu x150 gr', precio: 2590, marca: 'Zenu' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 16, title: 'Aceite Premier 3000 ml', precio: 27990, marca: 'Premier' ,logo: '',idCompany: 4, ofert: 0},
   	{id: 17, title: 'Aceite Girasol Metro 5000 ml', precio: 28990, marca: 'Girasol' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 18, title: 'Salsa de Tomate San jorge x1000gr', precio: 5550, marca: 'San Jorge' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 19, title: 'Arroz FlorHuila x5000gr', precio: 12990, marca: 'FlorHuila' ,logo: '',idCompany: 4, ofert: 0},
   	{id: 20, title: 'SixPack de Cerveza Poker', precio: 9990, marca: 'Poker' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 21, title: 'SixPack de Cerveza Poker', precio: 9760, marca: 'Poker' ,logo: '',idCompany: 1, ofert: 0},
   	{id: 22, title: 'Maquina de afeitar Prestobarba Ultragrip Gillette x 3 unidades', precio: 7990, marca: 'Gillette' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 23, title: 'Maquina de afeitar Prestobarba Ultragrip Gillette x 3 unidades', precio: 9863, marca: 'Gillette' ,logo: '',idCompany: 1, ofert: 0}





];
let company=[
{id: 1,name: 'Exito',logo: 'http://beaconstock.com/portal/wp-content/uploads/2013/09/Grupo_Exito_logo.svg_.png',direccion:'Carrera 22B No. 2 - 56'},
{id: 2,name: 'Alkosto',logo: 'http://www.alkosto.com/media/ALKOSTO/Especiales/plan0es3ac2.png',direccion:'Carrera. 22 #628'},
{id: 3,name: 'Maximo',logo: 'http://pro2-bar-s3-cdn-cf.myportfolio.com/50baa4b829af2b7c87850739f2c0533b/151fea33a4ec2a8194e33f8e_rw_1920.jpg?h=59a4ccd524716052b39b619dc20cda56',direccion:'Carera. 22 #628'},
{id: 4,name: 'Metro',logo: 'http://teconec.com/img/cliente03.png',direccion:'Calle 11 No. 34 - 78 '},

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

//********************************************************************
//********************************************************************

app.get('/products', (req, res) => {
    res.send(products)
})


// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})