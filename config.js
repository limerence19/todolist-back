module.exports = {
  development: {
    port: 3200,
    db: 'mongodb://localhost:27017/todolist'
  },
  production: {
    port: 3200,
    db: 'mongodb://todolist_runner:F**kcherish@127.0.0.1:3200/todolist'
  }
}
