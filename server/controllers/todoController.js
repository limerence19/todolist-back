const Todo = require('../models/todo');

const findAll = async (ctx) => {
    const todos = await Todo.find({})
    ctx.body = {
        msg: 'findAll success',
        data: todos
    }
}

const create = async (ctx) => {
    const newTodo = new Todo(ctx.request.body);
    const savedTodo = await newTodo.save();
    ctx.body = {
        msg: 'create success',
        data: savedTodo
    }
}

const destroy = async (ctx) => {
    const id = ctx.params.id;
    const todo = await Todo.findById(id)

    const deletedTodo = await todo.remove();
    ctx.body = {
        msg: 'delete success',
        data: deletedTodo
    }
}

const update = async (ctx) => {
    const id = ctx.params.id;
    const todo = await Todo.findById(id)
    todo.done = !todo.done;

    const updatedTodo = await todo.save();
    ctx.body = {
        msg: 'update success',
        data: updatedTodo
    }
}

module.exports = {
    findAll,
    create,
    destroy,
    update
}