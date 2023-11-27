//IMPORTO EXPRESS Y SU MODULO DE RUTAS//
////////////////////////////////////////
import { Router } from "express"
const router = Router()

//CREACIÒN DE RUTAS//
////////////////////////////////////////////////////

router.get('/', (req, res) => res.render('index.ejs',{title:'Web-App'})) //envio objeto//
router.get('/About', (req, res) => res.render('About.ejs',{title:'About'}))
router.get('/Contact', (req, res) => res.render('Contact.ejs',{title:'Contact'}))

export default router;