module.exports = {
    db: {
        database: 'tasksapi',
        username: '',
        password: '',
        params: {
            dialect: 'sqlite',
            storage: 'taskapi.sqlite',
            define: {
                underscored: true
            }
        }
    }
}