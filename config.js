module.exports = {
  development: {
    port: 8081,
    db: 'mongodb://localhost:27017/todolist'
  },
  production: {
    port: 3300, // node application port
    db: 'mongodb://todolist_runner:F**kcherish@101.132.68.200:18955/todolist'
  }
}