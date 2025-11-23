const receitaMemoria = require('../model/receitaMemoria');

function cria_get(req, res) {
    res.render('cria', { title: 'Nova Receita', activeCria: true });
}

function cria_post(req, res) {
    const { id, titulo, ingredientes, modoPreparo, tempoPreparo } = req.body;
    const novaReceita = {
        id: parseInt(id),
        titulo,
        ingredientes,
        modoPreparo,
        tempoPreparo: parseInt(tempoPreparo)
    };
    receitaMemoria.criar(novaReceita);
    res.redirect('/');
}

function consulta(req, res) {
    const id = req.params.id;
    const receita = receitaMemoria.buscarPorId(id);
    if (receita) {
        res.render('consulta', { title: 'Consulta Receita', receita: receita });
    } else {
        res.redirect('/');
    }
}

function altera_get(req, res) {
    const id = req.params.id;
    const receita = receitaMemoria.buscarPorId(id);
    if (receita) {
        res.render('altera', { title: 'Altera Receita', receita: receita });
    } else {
        res.redirect('/');
    }
}

// Process Edit Form
function altera_post(req, res) {
    const id = req.params.id;
    const { titulo, ingredientes, modoPreparo, tempoPreparo } = req.body;
    const dadosAtualizados = {
        titulo,
        ingredientes,
        modoPreparo,
        tempoPreparo: parseInt(tempoPreparo)
    };
    receitaMemoria.atualizar(id, dadosAtualizados);
    res.redirect('/');
}

// Process Delete
function exclui(req, res) {
    const id = req.params.id;
    receitaMemoria.excluir(id);
    res.redirect('/');
}

// Render Search Page
function pesquisa_get(req, res) {
    res.render('pesquisa', { title: 'Pesquisar Receitas', activePesquisa: true });
}

// Process Search
function pesquisa_post(req, res) {
    const termo = req.body.termo;
    const resultados = receitaMemoria.pesquisar(termo);
    res.render('pesquisa', { 
        title: 'Pesquisar Receitas', 
        activePesquisa: true, 
        resultados: resultados, 
        termo: termo,
        pesquisaRealizada: true 
    });
}

module.exports = {
    cria_get,
    cria_post,
    consulta,
    altera_get,
    altera_post,
    exclui,
    pesquisa_get,
    pesquisa_post
};
