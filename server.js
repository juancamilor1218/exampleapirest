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

let categoriesWM={
    responseCode: "200",
    data: [
        {
            Category_Id: 9,
            Name: "Servicios Públicos",
            Logo: "https://centroamerica.walmart.com/images/formobile/disclaimner/MC_CablerasEInternet.svg",
            Country_Code_Id: 1,
            Country_Code_Home: "CRC",
            Format_Id: 1
        },
        {
            Category_Id: 10,
            Name: "Cableras e Internet",
            Logo: "https://centroamerica.walmart.com/images/formobile/disclaimner/MC_AbonosTarjetas.svg",
            Country_Code_Id: 1,
            Country_Code_Home: "CRC",
            Format_Id: 1
        }
    ]
}


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

let countryFormat =[
	{
		id:1,
		code:'CR',
		types:[
			{
				id:1,
                name:'Cédula Nacional',
                regex:'^[1-9][0-9]{8}$'
            },
            {
				id:2,
                name:'Pasaporte',
                regex:'^[1-9][0-9]{8}$'
            },
            {
				id:3,
                name:'Cédula de Residencia',
                regex:'^[1-9][0-9]{8}$'
            }            
		]
    },
    {
		id:2,
		code:'HND',
		types:[
			{
				id:4,
                name:'Cédula Nacional',
                regex:'^[1-9][0-9]{8}$'
            },
            {
				id:5,
                name:'Pasaporte',
                regex:'^[A-Z0-9\-]+$'
            },
            {
				id:6,
                name:'Cédula de Identidad',
                regex:'^[A-Z0-9]{17}$)|([0-9]{12}$'
            }            
		]
    },
    {
		id:3,
		code:'NIC',
		types:[
			{
				id:7,
                name:'Cédula Nacional',
                regex:'^[0-9]{3}-[0-9]{6}-[0-9]{4}[A-Z]$'
            },
            {
				id:8,
                name:'Pasaporte',
                regex:'^[A-Z0-9\-]+$'
            },
            {
				id:9,
                name:'Cédula de Residencia',
                regex:'[CD]{1}\s{1}[0-9]{8})$|[0-9]{6}$|^[0-9]{12}$'
            },
            {
				id:10,
                name:'Documento Extranjero',
                regex:'^[A-Z0-9\-]+$'
            },          
		]
    },
    {
		id:4,
		code:'SVD',
		types:[
			{
				id:7,
                name:'DUI',
                regex:'^[0-9]{9,14}$'
            },
            {
				id:8,
                name:'NIT',
                regex:'^[0-9]{9,14}$'
            },
            {
				id:9,
                name:'Pasaporte',
                regex:'^[A-Z]{1}[0-9]{8}$'
            },
            {
				id:10,
                name:'Cédula de Residencia',
                regex:'^[A-Z0-9]+$'
            },          
		]
    },
    {
		id:5,
		code:'GTM',
		types:[
			{
				id:7,
                name:'DTI',
                regex:'^[0-9]{12}$'
            },       
            {
				id:9,
                name:'Pasaporte',
                regex:'^[A-Z0-9]+$'
            }                   
		]
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
	 {
        "_id": "5df2691ed0f87114c07bf1f7",
        "categoryName": "Mis planes",
        "notificationsType": [
            {
                "_id": "5df2691ed0f87114c07bf1f8",
                "name": "Estado de la asistencia",
                "description": "Promociones de planes",
                "IsActive": false
            }
        ]
    },
	 {
        "_id": "5df2691ed0f87114c07bf1f7",
        "categoryName": "Pagos",
        "notificationsType": [
            {
                "_id": "5df2691ed0f87114c07bf1f8",
                "name": "Estado de la asistencia",
                "description": "Morosidades",
                "IsActive": true
            }
        ]
    }	
   ];
let service=[
        {
            name:'120 canales',
        },
        {
            name:'internet fibra optica',
        },
        {
            name:'10 canales premium',
        },
        {
            name:'servicio de streaming',
        },
	{
            name:'datos moviles de 4gb',
        }
   ];
let interest=[
        {
            name:'Gastronomia',
	    icon:'https://img.icons8.com/material/4ac144/256/facebook.png'
        },
        {
            name:'Jardineria',
		icon:'https://img.icons8.com/material/4ac144/256/facebook.png'
        },
        {
            name:'Adrenalina',
		icon:'https://img.icons8.com/material/4ac144/256/facebook.png'
        },
        {
            name:'Futbol',
		icon:'https://img.icons8.com/material/4ac144/256/facebook.png'
        },
	{
            name:'Viajes',
		icon:'https://img.icons8.com/material/4ac144/256/facebook.png'
        }
   ];
let paymentmade=[
        {
            date: "2019-11-22T17:58:48.860Z",
            deleted: false,
            _id: "5dd8693d2103a138e8310331",
            plan: "5dc03b1f6d7f0952f917d071",
            payment_method: "5dcd7723d49d7f345eb13c2f",
            user: "5da09e1ccef6e21a71afe7d2",
            month: "noviembre",
            made_on_date: "2019-11-22T23:03:25.078Z",
            amount: 10000
         }
   ];

let stepone=[
       {
	    number_case:12321,
	    dateStart:"2020-01-16T04:00:00.000Z",
	    dateEnd:"2020-01-16T05:30:00.000Z",
	    typePlan:{
		name:"telecomunicaciones",
		_id:"5asdkjn2213b22iuh123"
	    },
	    typeFault:{
		name:"Sin conexion",
		id:"5asdkjn2213b22iuh123"
	    },
	    coordinates:{
		lat:1.21231231,
		lng:-1.092183120,
		description:"Casa amarilla"
	    }
	}
   ];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
   res.header("Access-Control-Allow-Origin", "*");
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
         email: data.email
     };
    /*
    let itemUser = {
        user: data.user,
        password: data.pass,
        name: data.name,
        email: data.email
    };
    */
    users.push(itemUser)
     res.send("usuario creado correctamente")
})
// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.post('/login', (req, res) => {
    let data = req.body;
    res.header("Access-Control-Allow-Origin", "*");
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
app.post('/update', (req, res) => {
    let data = req.body;
    let update = [{id: '0',pass: ''}];
    users.some(function (value, index, _arr) {
        if( (value.id == data.id) && (value.pass == data.pass) ){
            users[0]['pass'] = data.newpass;
            return true;
        }else{
            return false;
        }
    });
    res.send("usuario actualizado")
})
//********************************************************************
//********************************************************************
app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/stepone', (req, res) => {
    res.send(stepone)
})

app.get('/upsell', (req, res) => {
    res.send(upsell)
})
app.get('/typeNotification', (req, res) => {
    res.send(typeNotification)
})
app.get('/crossell', (req, res) => {
    res.send(crossell)
})
app.get('/benefits', (req, res) => {
    res.send(service)
})
app.get('/payments_made/plan', (req, res) => {
    res.send(paymentmade)
})
// ********************************************************************
// ********************************************************************
app.get('/company', (req, res) => {
    res.send(company)
})
app.get('/company', (req, res) => {
    res.send(company)
})
app.get('/users', (req, res) => {
    res.send(users)
})
//*****************************************************
//*************************************************************
app.get('/warehouse', (req, res) => {
    res.send(warehouse)
})

app.get('/categoriesWM', (req, res) => {
    res.send(categoriesWM)
})
app.get('/interest', (req, res) => {
    res.send(interest)
})
app.get('/countryRegex', (req, res) => {
    res.send(countryFormat)
})

app.post('/favorite', (req, res) => {
	let data = req.body;
	let id_user = data.user;
	let favoritetmp = [];	
	for(let i=0; i < favorite.length; i++){
		if(favorite[i]['id_user'] == id_user){
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
  
  app.post('/favoriteup', (req, res) => {
	 let data = req.body;
	 let consecutive = favorite.length;
     let itemFavorite = {
         id: consecutive,
         id_product: data.id_product,
         id_company: data.id_company,
         id_user: data.id_user
     };
    favorite.push(itemFavorite)
     res.send("añadido a favoritos")
 
})
app.get('/favorite', (req, res) => {
	let data = req.query;
	let id_user = data.user;
	let favoritetmp = [];	
	for(let i=0; i < favorite.length; i++){
		if(favorite[i]['id_user'] == id_user){
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
