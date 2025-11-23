// Array to memory
const receitas = [];
let nextId = 1;

function criar(receita) {
    if (!receita.id) {
        receita.id = nextId++;
    } else {
        if (receita.id >= nextId) {
            nextId = receita.id + 1;
        }
    }
    receitas.push(receita);
    return receita;
}

function listar() {
    return receitas;
}

function buscarPorId(id) {
    return receitas.find(r => r.id === parseInt(id));
}

function atualizar(id, novosDados) {
    const index = receitas.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
        receitas[index] = { ...receitas[index], ...novosDados, id: parseInt(id) };
        return receitas[index];
    }
    return null;
}

function excluir(id) {
    const index = receitas.findIndex(r => r.id === parseInt(id));
    if (index !== -1) {
        receitas.splice(index, 1);
        return true;
    }
    return false;
}

function pesquisar(termo) {
    if (!termo) return [];
    const termoLower = termo.toLowerCase();
    return receitas.filter(r => r.titulo.toLowerCase().includes(termoLower));
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    atualizar,
    excluir,
    pesquisar
};
