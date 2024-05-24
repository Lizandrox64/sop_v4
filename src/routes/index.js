import { Router} from 'express'
const router = Router()


router.get('/', (req, res) => res.render('index', { tittle: 'test pagina'}))

router.get('/about', (req, res) => res.render('about', { tittle: 'about'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'contactos'}))

router.get('/Miintranet', (req, res) => res.render('Miintranet', {title: 'Intranet de soporte'}))

router.get('/personas', (req, res) => res.render('personas', {title: 'ingreso de presonas'}))

export default router