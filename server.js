const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://exampleapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta'];

let warehouse[
{
id_company:1,
nombre:'Exito',
logo:'http://beaconstock.com/portal/wp-content/uploads/2013/09/Grupo_Exito_logo.svg_.png',
direccion:'Carrera 22B No. 2 - 56',
products2:[
			    {id: 1, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1456, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',ofert: 1},
    			{id: 2, title: 'Arroz Excelso Tradicional', precio: 12200, marca: 'Supremo' ,logo: 'http://www.tumercado.co/2845-large_default/arroz-supremo-excelso-tradicional-5000gr.jpg',ofert: 0},
    			{id: 3, title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: 'http://www.eurosupermercados.com/wp-content/uploads/2017/02/7701018007151.png',ofert: 0},
    			{id: 4, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7368, marca: 'RANCHERA' ,logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',ofert: 0},
    			{id: 5, title: 'Pan Super Hamburguesa X 4', precio: 3016, marca: 'BIMBO' ,logo: 'http://www.tumercado.co/555-large_default/pan-hamburguesa-bimbo-4-unidades-210-gr.jpg',ofert: 1},
    			{id: 6, title: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,logo: 'http://www.exito.com/images/products/981/0000354862337981/0000354863975242_lrg_a.jpg',ofert: 1},
    			{id: 7, title: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,logo: 'http://tudeliveri.com/wp-content/uploads/2017/06/huevos.jpg',ofert: 0},
    			{id: 8, title: 'Arequipe Alpina 220 Grs', precio: 4690, marca: 'Alpina' ,logo: 'http://www.alpinamarket.co/28-home_default/arequipe-220-gr.jpg',ofert: 0},
   				{id: 9, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 7990, marca: 'EXITO MARCA PROPIA' ,logo: 'http://patojolandia.com/colombia01/tenderos/1376/cafe-aguila-roja-x-500-grs.jpg',ofert: 0}
	]

}

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

app.patch('/products/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    products[params.id] = data.user_name
    res.send("products update")
})


app.delete('/productos/:id',(req, res) => {
    let params = req.params;
    products.splice(params.id, 1);
    res.send('products delete')
})

// ********************************************************************
// ********************************************************************
app.get('/company', (req, res) => {
    res.send(company)
})

app.patch('/company/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    company[params.id] = data.user_name
    res.send("company update")
})


app.delete('/company/:id',(req, res) => {
    let params = req.params;
    company.splice(params.id, 1);
    res.send('company delete')
})
//*****************************************************
//*************************************************************
app.get('/warehouse', (req, res) => {
    res.send(warehouse)
})

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})