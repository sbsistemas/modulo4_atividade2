import ProdutosRepository from '../repositories/produtos.repository.js';

async function createProduto(produto) {
    return await ProdutosRepository.insertProduto(produto);
}

async function updateProduto(produto) {
    return await ProdutosRepository.updateProduto(produto);
}

async function getProduto(codigo) {
    return await ProdutosRepository.getProduto(codigo);
}


async function getProdutos() {
    return await ProdutosRepository.getProdutos();
}

async function deleteProduto(produto) {
    return await ProdutosRepository.deleteProduto(produto);
}

export default {
    createProduto,
    getProduto,
    getProdutos,
    updateProduto,
    deleteProduto
}