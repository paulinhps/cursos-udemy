const app = require('./config/server');
const socket = require('./config/socket')

const server = app.listen(1447, () => {

    console.log('Servidor Escultando na porta 1447');
}
);

socket(app,server);
