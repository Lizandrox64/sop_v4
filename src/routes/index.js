import { Router} from 'express'
const router = Router()


router.get('/', (req, res) => res.render('index', { tittle: 'test pagina'}))

router.get('/about', (req, res) => res.render('about', { tittle: 'about'}))

router.get('/contact', (req, res) => res.render('contact', {tittle: 'contactos'}))

export default router