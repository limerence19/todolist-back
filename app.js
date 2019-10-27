const Koa = require('koa');
const app = new Koa();
const config = require('./config');
const mongoose = require('mongoose');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');

const env = process.env.NODE_ENV;

mongoose.connect(config[env].db, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.error('Failed to connect to database');
    } else {
        console.log('connect successfully');
    }
})

app.use(cors())
app.use(bodyParser())

// router handle
const todo_router = require('./server/routes/todoRouter');

app.use(todo_router.routes()).use(todo_router.allowedMethods());

app.listen(config[env].port);