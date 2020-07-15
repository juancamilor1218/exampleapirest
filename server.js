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
   	{id: 17, title: 'Aceite Girasol Metro 5000 ml', precio: 28990, marca: 'Girasol' ,logo: 'https://s3-sa-east-1.amazonaws.com/bunting-product-images-sa-east-1/grupoexito/42405/image-s.jpg',idCompany: 4, ofert: 1}
   	
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
let favorite =[
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
let upsell=[
        {
            description:'Movistar',
            image:'https://cdn.clubestudiantes.com/wp-content/uploads/2019/01/gameday-1.jpg'
        },
        {
            description:'Movistar',
            image:'https://cdn.clubestudiantes.com/wp-content/uploads/2019/01/gameday-1.jpg'
        },
        {
            description:'Tigo',
            image:'https://lh3.googleusercontent.com/Q6Ipdc3eVOWXTz6e1LQae_Uox3YfiR28_m97gR2A5R9dSYTIIRnsGif18QUnM1jtKO0MIuLleg=w600-h0'
        },
        {
            description:'Hbo',
            image:'https://media.biobiochile.cl/wp-content/uploads/2019/03/hbo.jpg'
        }
   ];
let crossell=[
        {
            name:'CROSSELL 1',
            image:'https://i.blogs.es/9c0e9b/modo-retrato/450_1000.jpg',
	    price:200.3
        },
       {
            name:'CROSSELL 2',
            image:'https://i2.wp.com/juancarlosvelez.com/wp-content/uploads/2019/04/Hamburguesa-1.jpg?fit=1024%2C640&ssl=1',
	    price:303.2
        }        
   ];
let typeNotification=[
        {
        "_id": "5df2691ed0f87114c07bf1f7",
        "categoryName": "Asistencias",
        "notificationsType": [
            {
                "_id": "5df2691ed0f87114c07bf1f8",
                "name": "Estado de la asistencia",
                "description": "Estado de la asistencia",
                "IsActive": true
            },
		 {
                "_id": "5df2691ed0f87114c07bf1f8",
                "name": "Estado de la asistencia",
                "description": "Estado de la asistencia",
                "IsActive": false
            }
        ]
    },
