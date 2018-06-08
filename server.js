const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = 'https://exampleapirest.herokuapp.com';
const PORT = process.env.PORT || 5000

let users = [
	{
		id:0,
		username:'Esteban96' ,
		pass: 'arepasconcaviar',
		name: 'Esteban Jojoa',
		email: 'estebanjojoa96@gmail.com',

	},
	{	
		id:1,
		username:'Juanr1218',
		pass: 'juancarva',
		name: 'Juan Riascos',
		email: 'juancamilo971218@gmail.com',

	}	
];

let products = [
    {id: 1, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1456, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',idCompany: 1, ofert: 1},
    {id: 2, title: 'Arroz Excelso Tradicional', precio: 12200, marca: 'Supremo' ,logo: 'http://www.tumercado.co/2845-large_default/arroz-supremo-excelso-tradicional-5000gr.jpg',idCompany: 1, ofert: 0},
    {id: 3, title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: 'http://www.eurosupermercados.com/wp-content/uploads/2017/02/7701018007151.png',idCompany: 1, ofert: 0},
    {id: 4, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7368, marca: 'RANCHERA' ,logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',idCompany: 1, ofert: 0},
    {id: 5, title: 'Pan Super Hamburguesa X 4', precio: 3016, marca: 'BIMBO' ,logo: 'http://www.tumercado.co/555-large_default/pan-hamburguesa-bimbo-4-unidades-210-gr.jpg',idCompany: 1, ofert: 1},
    {id: 6, title: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,logo: 'http://www.exito.com/images/products/981/0000354862337981/0000354863975242_lrg_a.jpg',idCompany: 1, ofert: 1},
    {id: 7, title: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,logo: 'http://tudeliveri.com/wp-content/uploads/2017/06/huevos.jpg',idCompany: 1, ofert: 0},
    {id: 8, title: 'Arequipe Alpina 220 Grs', precio: 4690, marca: 'Alpina' ,logo: 'http://www.alpinamarket.co/28-home_default/arequipe-220-gr.jpg',idCompany: 1, ofert: 0},
   	{id: 9, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 7990, marca: 'EXITO MARCA PROPIA' ,logo: 'http://patojolandia.com/colombia01/tenderos/1376/cafe-aguila-roja-x-500-grs.jpg',idCompany: 1, ofert: 0},
   	{id: 10, title: 'Crema Dental Total 12 Clean Mint X 75 ml', precio: 7819, marca: 'Colgate' ,logo: 'http://www.fahorro.com/media/catalog/product/cache/1/image/1280x1280/9df78eab33525d08d6e5fb8d27136e95/7/5/7501035911369_1.jpg',idCompany: 1, ofert: 0},
   	{id: 11, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1320, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',idCompany: 2, ofert: 1},
   	{id: 12, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7300, marca: 'RANCHERA', logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',idCompany: 2, ofert: 0},
   	{id: 13, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 8050, marca: 'EXITO MARCA PROPIA' ,logo: 'http://patojolandia.com/colombia01/tenderos/1376/cafe-aguila-roja-x-500-grs.jpg',idCompany: 2, ofert: 0},
   	{id: 14, title: 'Chocolate Corona x 500gr', precio: 4990, marca: 'Corona' ,logo: 'http://assalam-market.com/shop/image/cache/data/productos/Latinos/Colombia/Chocolate%20de%20mesa%20con%20az%C3%BAcar%20Corona%20500%20gr-500x500.jpg',idCompany: 4, ofert: 1},
   	{id: 15, title: 'Salchicha Viena Zenu x150 gr', precio: 2590, marca: 'Zenu' ,logo: 'http://www.carulla.com/images/products/964/0000046361049964/0000046362013298_lrg_a.jpg',idCompany: 4, ofert: 1},
   	{id: 16, title: 'Aceite Premier 3000 ml', precio: 27990, marca: 'Premier' ,logo: 'http://rapimercar.adsipyme.com/329252-large_default/aceite-de-girasol-premier-3000ml.jpg',idCompany: 4, ofert: 0},
   	{id: 17, title: 'Aceite Girasol Metro 5000 ml', precio: 28990, marca: 'Girasol' ,logo: 'https://s3-sa-east-1.amazonaws.com/bunting-product-images-sa-east-1/grupoexito/42405/image-s.jpg',idCompany: 4, ofert: 1},
   	{id: 18, title: 'Salsa de Tomate San jorge x1000gr', precio: 5550, marca: 'San Jorge' ,logo:'',idCompany: 4, ofert: 1},
   	{id: 19, title: 'Arroz FlorHuila x5000gr', precio: 12990, marca: 'FlorHuila' ,logo: '',idCompany: 4, ofert: 0},
   	{id: 20, title: 'SixPack de Cerveza Poker', precio: 9990, marca: 'Poker' ,logo: '',idCompany: 4, ofert: 1},
   	{id: 21, title: 'SixPack de Cerveza Poker', precio: 9760, marca: 'Poker' ,logo: '',idCompany: 1, ofert: 0},
   
   	{id: 21, title: 'SixPack de Cerveza Poker', precio: 9760, marca: 'Poker' ,logo: '',idCompany: 1, ofert: 0},
   	{id: 23, title: 'Maquina de afeitar Prestobarba Ultragrip Gillette x 3 unidades', precio: 9863, marca: 'Gillette' ,logo: '',idCompany: 1, ofert: 0}
];
let warehouse=[
{
id_company: 1,
name: 'Exito',
logo: 'http://beaconstock.com/portal/wp-content/uploads/2013/09/Grupo_Exito_logo.svg_.png',
address: 'Carrera 22B No. 2 - 56',
products:[
			    {id: 1, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1456, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',ofert: 1},
    			{id: 2, title: 'Arroz Excelso Tradicional', precio: 12200, marca: 'Supremo' ,logo: 'http://www.tumercado.co/2845-large_default/arroz-supremo-excelso-tradicional-5000gr.jpg',ofert: 0},
    			{id: 3, title: 'Aceite Premier 1000 ml', precio: 9960, marca: 'Premier' ,logo: 'http://www.eurosupermercados.com/wp-content/uploads/2017/02/7701018007151.png',ofert: 0},
    			{id: 4, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7368, marca: 'RANCHERA' ,logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',ofert: 0},
    			{id: 5, title: 'Pan Super Hamburguesa X 4', precio: 3016, marca: 'BIMBO' ,logo: 'http://www.tumercado.co/555-large_default/pan-hamburguesa-bimbo-4-unidades-210-gr.jpg',ofert: 1},
    			{id: 6, title: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,logo: 'http://www.exito.com/images/products/981/0000354862337981/0000354863975242_lrg_a.jpg',ofert: 1},
    			{id: 7, title: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,logo: 'http://tudeliveri.com/wp-content/uploads/2017/06/huevos.jpg',ofert: 0},
    			{id: 8, title: 'Arequipe Alpina 220 Grs', precio: 4690, marca: 'Alpina' ,logo: 'http://www.alpinamarket.co/28-home_default/arequipe-220-gr.jpg',ofert: 0},
   				{id: 9, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 7990, marca: 'EXITO MARCA PROPIA' ,logo:'http://patojolandia.com/colombia01/tenderos/1376/cafe-aguila-roja-x-500-grs.jpg',ofert: 0},
   				{id: 10, title: 'Crema Dental Total 12 Clean Mint X 75 ml', precio: 7819, marca: 'Colgate' ,logo: 'http://www.fahorro.com/media/catalog/product/cache/1/image/1280x1280/9df78eab33525d08d6e5fb8d27136e95/7/5/7501035911369_1.jpg',idCompany: 1, ofert: 0}
	]

},
{
id_company: 2,
name: 'Alkosto',
logo: 'http://www.alkosto.com/media/ALKOSTO/Especiales/plan0es3ac2.png',
adrress: 'Carrera. 22 #628',
products:[
			     {id: 11, title: 'Leche Entera En Bolsa X 1 Litro', precio: 1320, marca: 'Colanta', logo: 'http://demos.pymesonline.co/panaderia/pasopan/images/stories/virtuemart/product/leche-colanta.jpg',idCompany: 2, ofert: 1},
   				{id: 12, title: 'Salchicha Mini Ranchera Premium X 300g', precio: 7300, marca: 'RANCHERA', logo: 'http://www.la14.com/Tiendala14/Images/product_images/136780.jpg',idCompany: 2, ofert: 0},
   				{id: 13, title: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 8050, marca: 'EXITO MARCA PROPIA' ,logo: 'http://patojolandia.com/colombia01/tenderos/1376/cafe-aguila-roja-x-500-grs.jpg',idCompany: 2, ofert: 0},
	]
},
{

id_company: 3,
name: 'Maximo',
logo: 'http://pro2-bar-s3-cdn-cf.myportfolio.com/50baa4b829af2b7c87850739f2c0533b/151fea33a4ec2a8194e33f8e_rw_1920.jpg',
adrress: 'calle 20 con, Av. de los Estudiantes #35',
products:[
		
	]

},
{

id_company: 4,
name: 'Metro',
logo: 'http://teconec.com/img/cliente03.png',
adrress: 'Calle 11 No. 34 - 78 ',
products:[
	{id: 14, title: 'Chocolate Corona x 500gr', precio: 4990, marca: 'Corona' ,logo: 'http://assalam-market.com/shop/image/cache/data/productos/Latinos/Colombia/Chocolate%20de%20mesa%20con%20az%C3%BAcar%20Corona%20500%20gr-500x500.jpg',idCompany: 4, ofert: 1},
	{id: 15, title: 'Salchicha Viena Zenu x150 gr', precio: 2590, marca: 'Zenu' ,logo: 'http://www.carulla.com/images/products/964/0000046361049964/0000046362013298_lrg_a.jpg',idCompany: 4, ofert: 1},
   	{id: 16, title: 'Aceite Premier 3000 ml', precio: 27990, marca: 'Premier' ,logo: 'http://rapimercar.adsipyme.com/329252-large_default/aceite-de-girasol-premier-3000ml.jpg',idCompany: 4, ofert: 0},
   	{id: 17, title: 'Aceite Girasol Metro 5000 ml', precio: 28990, marca: 'Girasol' ,logo: 'https://s3-sa-east-1.amazonaws.com/bunting-product-images-sa-east-1/grupoexito/42405/image-s.jpg',idCompany: 4, ofert: 1},
   	{id: 18, title: 'Salsa de Tomate San jorge x1000gr', precio: 5550, marca: 'San Jorge' ,logo:'', ofert: 1},
   	{id: 19, title: 'Arroz FlorHuila x5000gr', precio: 12990, marca: 'FlorHuila' ,logo: '', ofert: 0},
   	{id: 20, title: 'SixPack de Cerveza Poker', precio: 9990, marca: 'Poker' ,logo: '', ofert: 1},
   	{id: 22, title: 'Maquina de afeitar Prestobarba Ultragrip Gillette x 3 unidades', precio: 7990, marca: 'Gillette' ,logo: '',idCompany: 4, ofert: 1}
		
	]

}
];

let company=[
{id: 1,name: 'Exito',logo: 'http://beaconstock.com/portal/wp-content/uploads/2013/09/Grupo_Exito_logo.svg_.png',adrress:'Carrera 22B No. 2 - 56'},
{id: 2,name: 'Alkosto',logo: 'http://www.alkosto.com/media/ALKOSTO/Especiales/plan0es3ac2.png',adrress:'Carrera. 22 #628'},
{id: 3,name: 'Maximo',logo: 'http://pro2-bar-s3-cdn-cf.myportfolio.com/50baa4b829af2b7c87850739f2c0533b/151fea33a4ec2a8194e33f8e_rw_1920.jpg?h=59a4ccd524716052b39b619dc20cda56',adrress:'Carera. 22 #628'},
{id: 4,name: 'Metro',logo: 'http://teconec.com/img/cliente03.png',adrress:'Calle 11 No. 34 - 78 '}

];

var favorites =[

{
	id:1,
	id_product:1,
	id_company:1,
	id_user:1
},
{

	id:2,
	id_product:2,
	id_company:1,
	id_user:2
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



// URL para eliminar un usuario
// http://127.0.0.1:5000/users
app.post('/signup', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
     let itemUser = {
         id: consecutive,
         username: data.username,
         pass: data.pass,
         name: data.name,
         email: data.email,
     };
    /*
    let itemUser = {
        user: data.user,
        password: data.pass,
        name: data.name,
        email: data.email,
        repassword: '123'
    };
    */
    users.push(itemUser)
    res.send(itemUser)
    // res.send("usuario creado correctamente")
})


// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1





app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',username: '',pass: '',name: '',email: ''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.pass == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['username'] = value.username;
            login[0]['pass'] = value.pass;
            login[0]['name'] = value.name;
            login[0]['email'] = value.email;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

//********************************************************************
//********************************************************************

app.get('/products', (req, res) => {
    res.send(products)
})




// ********************************************************************
// ********************************************************************
app.get('/company', (req, res) => {
    res.send(company)
})

//*****************************************************
//*************************************************************
app.get('/warehouse', (req, res) => {
    res.send(warehouse)
})
  

app.post('/favorite', (req, res) => {
	let data = req.query;
	let id_user = data.user;
	let favoritetmp = [];	

    res.send(id_user)
})
  
app.get('/favorite', (req, res) => {
	let data = req.query;
	let id_user = data.user;
	let favoritetmp = [];	
	for(let i=0; i < favorite.length; i++){
		if(favorite[i]['id_user'] == id_user){
			console.log('entro al ciclo '+i)
			let itemUser = {
				name_product: products[favorite[i]['id_product']]['title'],
				cost_product: products[favorite[i]['id_product']]['precio'],
				img_product: products[favorite[i]['id_product']]['logo'],
				name_company: company[favorite[i]['id_company']]['name'],
				img_company: company[favorite[i]['id_company']]['logo']
			};			
			favoritetmp.push(itemUser);
		}
	}	
    res.send(favoritetmp)
})
// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})

//*********************************************************************
//Favoritos



