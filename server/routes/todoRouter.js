const Router = require('koa-router');
const router = new Router({
    prefix: '/v1/todos'
});
const Ctrl = require('../controllers/todoController');

router.get('/findAll', Ctrl.findAll)
router.post('/create', Ctrl.create)
router.post('/update/:id', Ctrl.update)
router.post('/delete/:id', Ctrl.destroy)

module.exports = router;