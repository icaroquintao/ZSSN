module.exports = {
    host: '127.0.0.1',
    username: 'root',
    password: '',
    database: 'zssn',
    dialect: 'sqlite',
    storage: "./src/database/zssn.sqlite",
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};