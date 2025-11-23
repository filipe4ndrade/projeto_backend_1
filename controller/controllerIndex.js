const receitaMemoria = require('../model/receitaMemoria');

function index(req, res) {
    const receitas = receitaMemoria.listar();
    res.render('index', { title: 'Sistema de Receitas', receitas: receitas, activeHome: true });
}

function sobre(req, res) {
    res.render('sobre', { title: 'Sobre', activeSobre: true });
}

module.exports = {
    index,
    sobre
};
