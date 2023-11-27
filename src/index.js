//IMPORTAR LIBRERIAS PARA CREACION DE SERVIDOR//
//IMPORTAR LIBRERIAS PARA CONFIGURACION DE RUTAS//

import express  from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routers/index.js'


//USO DE LIBRERIAS GUARDADAS EN CONSTANTES//
//////////////////////////////////////////

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))


//CREACION DEL SERVIDOR EN EL PUERTO 30000//
/////////////////////////////////////////////////

app.listen(3000)
    console.log("Servidor Corriendo en el Puerto 3000")
