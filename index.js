const app = require('./app');
const db = require('./database');
const config = require('./config');


db().then(info => {
    if (info) {
        console.log(`Connection to ${info.host}:${info.port}/${info.name}`);
    }
    app.listen(config.PORT, () => {
        console.log(`Server start on port ${config.PORT}`)
    });
}).catch((error) => {
    console.error('Unable to coonect to DB');
    console.log(error);
    process.exit(1);
});