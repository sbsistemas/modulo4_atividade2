import  db from '../repositories/db.js';


async function insertProduto(produto) {
    try {
        return await db.Produto.create(produto);
    } catch (err) {
        throw err;
    }
}


async function getProduto(codigo) {
    try {
        return await db.Produto.findAll({
            where: {
                codigo: codigo}});
                
    } catch (err) {
        throw err;
    }

}

async function updateProduto(produto) {
    try {
        await db.Produto.update(produto, {
            where: {
                codigo: produto.codigo
            }
        })
        return await getProduto(produto.codigo);
    } catch (err) {
        throw err;
    }
    
}

async function getProdutos() {
    try{ 
        return await db.Produto.findAll();

    } catch (err) {
        throw err;
    }

}

async function deleteProduto(produto) {
    try {
        await db.Produto.destroy({
            where: {
                codigo: produto.codigo
            }
        })
    } catch (err) {
        throw err;
    }

}
export default {
    insertProduto,
    getProduto,
    getProdutos,
    updateProduto,
    deleteProduto

}
