module.exports.index = (application, req, res) => {

    let dados = req.body;

    req.assert('apelido', 'O Apelido deve ser informado!').notEmpty();
    req.assert('apelido', 'O Apelido deve conter entre 3 e 15 caracteres!').len(3, 15);

    req.getValidationResult().then((result) => {

        if (!result.isEmpty()) {
            res.render('index',{ errors : result.array()});
            return;
        } 
        res.render('chat');

    });


};