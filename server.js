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

let companyFanero=[
   {id: 1,nombre: 'Abraham Delgado',imagen: 'https://scontent.fpso2-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p320x320/17309228_1612358722112239_6585266355204393792_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=AmFpU_WsnrsAX-IHDJd&_nc_ht=scontent.fpso2-1.fna&_nc_tp=3&oh=fccd8c57069bc5ef8d22e04a24e5629d&oe=5E94436A'},
    {id: 2,nombre: 'Alkosto',imagen: 'http://www.alkosto.com/media/ALKOSTO/Especiales/plan0es3ac2.png'},
    {id: 3,nombre: 'Maximo',imagen: 'http://pro2-bar-s3-cdn-cf.myportfolio.com/50baa4b829af2b7c87850739f2c0533b/151fea33a4ec2a8194e33f8e_rw_1920.jpg?h=59a4ccd524716052b39b619dc20cda56'},
    {id: 4,nombre: 'Metro',imagen: 'http://teconec.com/img/cliente03.png'}

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
let bancos=
{
    "success": true,
    "title_response": "SUCCESS",
    "text_response": "Bancos Consultados Exitosamente",
    "last_action": "Query Bancos",
    "data": [
        {
            "bankCode": "0",
            "bankName": "A continuación seleccione su banco"
        },
        {
            "bankCode": "1040",
            "bankName": "BANCO AGRARIO"
        },
        {
            "bankCode": "1052",
            "bankName": "BANCO AV VILLAS"
        },
        {
            "bankCode": "1013",
            "bankName": "BANCO BBVA COLOMBIA S.A."
        },
        {
            "bankCode": "1032",
            "bankName": "BANCO CAJA SOCIAL"
        },
        {
            "bankCode": "1066",
            "bankName": "BANCO COOPERATIVO COOPCENTRAL"
        },
        {
            "bankCode": "1051",
            "bankName": "BANCO DAVIVIENDA"
        },
        {
            "bankCode": "1001",
            "bankName": "BANCO DE BOGOTA"
        },
        {
            "bankCode": "1023",
            "bankName": "BANCO DE OCCIDENTE"
        },
        {
            "bankCode": "1062",
            "bankName": "BANCO FALABELLA "
        },
        {
            "bankCode": "1012",
            "bankName": "BANCO GNB SUDAMERIS"
        },
        {
            "bankCode": "1006",
            "bankName": "BANCO ITAU"
        },
        {
            "bankCode": "1060",
            "bankName": "BANCO PICHINCHA S.A."
        },
        {
            "bankCode": "1002",
            "bankName": "BANCO POPULAR"
        },
        {
            "bankCode": "1058",
            "bankName": "BANCO PROCREDIT"
        },
        {
            "bankCode": "1065",
            "bankName": "BANCO SANTANDER COLOMBIA"
        },
        {
            "bankCode": "1007",
            "bankName": "BANCOLOMBIA"
        },
        {
            "bankCode": "1061",
            "bankName": "BANCOOMEVA S.A."
        },
        {
            "bankCode": "1009",
            "bankName": "CITIBANK "
        },
        {
            "bankCode": "1292",
            "bankName": "CONFIAR COOPERATIVA FINANCIERA"
        },
        {
            "bankCode": "1551",
            "bankName": "DAVIPLATA"
        },
        {
            "bankCode": "1507",
            "bankName": "NEQUI"
        },
        {
            "bankCode": "1019",
            "bankName": "SCOTIABANK COLPATRIA"
        }
    ],
    "enpruebas": 2
};


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

let productsFanero=[
    {
        nombre:'Nuevos Catalogos',
        productos:[
            {id: 14, nombre: 'Chocolate Corona x 500gr', precio: 4990, marca: 'Corona' ,imagen: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/177423-750-750/7702007043402-1.jpg',descuento: 0.3},
	        {id: 15, nombre: 'Salchicha Viena Zenu x150 gr', precio: 2590, marca: 'Zenu' ,imagen: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/225648-750-750/7701101245903.jpg',descuento: 0.3},
   	        {id: 16, nombre: 'Aceite Premier 3000 ml', precio: 27990, marca: 'Premier' ,imagen: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/196257-750-750/7701018007267.jpg',descuento: 0.1},
            {id: 9, nombre: 'Frijol Cargamanto Blanco Bolsa X 1000 G', precio: 7990, marca: 'EXITO MARCA PROPIA' ,imagen:'https://mercalo.co/wp-content/uploads/2017/04/Fr%C3%ADjol-cargamanto-blanco-Aburr%C3%A1-460gr.jpg',descuento: 0}
        ]
    },
    {
        nombre:'Mas solicitados',
        productos:[
            	{id: 17, nombre: 'Aceite Girasol Metro 5000 ml', precio: 28990, marca: 'Girasol' ,imagen: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/196257-750-750/7701018007267.jpg',descuento: 0.1},
		{id: 6, nombre: 'Tortilla Blanca X 8 Unidades', precio: 7544 , marca: 'BIMBO' ,imagen: 'https://cdn.totalcode.com/la14/product-zoom/es/tortilla-blanca-bimbo-tradicional-x-8-undx240g-1.jpg',descuento: 0.1},
		{id: 7, nombre: 'Huevo Rojo A X 30 Insuperable', precio: 7980, marca: 'SMN' ,imagen: 'https://avinal.com.co/wp-content/uploads/2017/10/huevo-rojo-extra-x-30-unidades.png',descuento: 0},
	        {id: 8, nombre: 'Arequipe Alpina 220 Grs', precio: 4690, marca: 'Alpina' ,imagen: 'https://cdn.shopify.com/s/files/1/0272/6730/1424/products/arequipe-alpina-10-unidades-D_NQ_NP_683070-MLV31977981878_082019-F_637x.jpg',descuento: 0},
        ]
    }   
];		

let bluetooth=[
	{
		
            id:1,
            mac:"DC:0D:30:48:46:A2",
            nombre:"Tienda 1",
 	    rssi:0,
	    uuid:1	
	},
	{
	    id:2,
            mac:"DC:0D:30:48:46:09",
            nombre:"Tienda 1",
	    rssi:0,
	    uuid:1
	}
	  
];

let direcciones=[

    {
        "id": 24,
        "tipoIdetificacion": "CE",
        "numeroDocumento": "9999999",
        "nombres": "Weimar",
        "apellidos": "Gomez Cordoba",
        "telefonoContacto": "123456789",
        "nomenclatura": "Cl. 21a #4e05",
        "barrio": "Santa Bárbara",
        "telefonoDireccion": "3128720023",
        "nombreRecibe": "WEIMAR GOMEZ",
        "latitud": "1.201074",
        "longitud": "-77.259363",
        "esPrincipal": "Si"
    },
    {
        "id": 24,
        "tipoIdetificacion": "CE",
        "numeroDocumento": "9999999",
        "nombres": "Weimar",
        "apellidos": "Gomez Cordoba",
        "telefonoContacto": "123456789",
        "nomenclatura": "Cl. 21j #9a Este-1 a 9a Este-183",
        "barrio": "Condominio santa monica",
        "telefonoDireccion": "3148336485",
        "nombreRecibe": "NATALIA CERON",
        "latitud": "1.205089",
        "longitud": "-77.254318",
        "esPrincipal": "No"
    },
    {
        "id": 24,
        "tipoIdetificacion": "CE",
        "numeroDocumento": "9999999",
        "nombres": "Weimar",
        "apellidos": "Gomez Cordoba",
        "telefonoContacto": "123456789",
        "nomenclatura": "Cll 57",
        "barrio": "Chapinero",
        "telefonoDireccion": "78910",
        "nombreRecibe": "Pepito Perez",
        "latitud": "1.509876",
        "longitud": "-74.4657855",
        "esPrincipal": "Si"
    }


]

let productsBluetooth=[
    {
        id: 20,
        nombre: 'Huawei P20 2019',
        precio: 350000,
    	marca: 'Huawei',
        imagen: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/h/w/hw_p20_pro_twilight_6901443236817_01.jpg',
        descuento: 0.1
       
     },
     {
        id: 21,
        nombre: 'Audifonos Diadema Trust Ziva', precio: 230422 ,
        marca: 'JBL' ,
        imagen: 'https://teknopolis.vteximg.com.br/arquivos/ids/177036-1000-1000/Audifonos-Diadema-Trust-Ziva-Bluetooth_01.jpg',
        descuento: 0.2,
    },
    {
        id: 22,
        nombre: 'parlante portable jbl flip',
        precio: 392802,
        marca: 'JBL',
        imagen: 'https://http2.mlstatic.com/parlante-portable-jbl-flip-4-bluetooth-12-horas-sumergible-D_NQ_NP_725732-MCO40384756593_012020-F.jpg',
        descuento: 0,
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

app.get('/categories', (req, res) => {
    res.send(productsFanero)
})

app.post('/productsBluetooth', (req, res) => {
    res.send(productsBluetooth)
})

app.get('/bluetooth', (req, res) => {
    res.send(bluetooth)
})

app.get('/bancos' (req, res) => {
    res.send(bancos)
})

app.get('/direccionPersona/DireccionesAsociadas', (req, res) => {
    res.send(direcciones)
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
    res.send(companyFanero)
})
app.get('/users', (req, res) => {
    res.send(users)
})
//*****************************************************
//*************************************************************
app.get('/warehouse', (req, res) => {
    res.send(warehouse)
})
app.get('/interest', (req, res) => {
    res.send(interest)
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



