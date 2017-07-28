const uuid = require('uuid/v4');


module.exports.iniciarChat = (application, req, res) => {
    req.assert('apelido', 'O Apelido deve ser informado!').notEmpty();
    req.assert('apelido', 'O Apelido deve conter entre 3 e 15 caracteres!').len(3, 15);

    req.getValidationResult().then((result) => {

        if (!result.isEmpty()) {
            res.render('index', { errors: result.array() });
            return;
        }

        let idUsuario = uuid();
        let dataEntrada = new Date();

        let participante = { id: idUsuario, apelido: req.body.apelido, dataEntrada: dataEntrada };
        res.cookie('participante',participante);

        application.get('io').emit('anunciarEntrada', { apelido: req.body.apelido, mensagem: 'Entrou no chat' });
        res.render('chat', {participante : participante});

    });

};