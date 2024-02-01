import ProdutosService from "../service/produtos.service.js";

async function createProduto(req, res, next) {

    try {
        let produto = req.body;
        let newProd = await ProdutosService.getProduto(produto.codigo);
        if (newProd.length>0) {
            produto = await ProdutosService.updateProduto(produto);
            res.status(201).send(produto);
        } else {
            produto = await ProdutosService.createProduto(produto);
            res.status(200).send(produto);
        }
        logger.info( `POST /produto - ${JSON.stringify(produto)}`);

    } catch (err) {
        next(err);
    }

}


async function updateProduto(req, res, next) {

    try {
        let produto = req.body;
        let newProd = await ProdutosService.getProduto(produto.codigo);
        console.log(newProd.length);
        if (newProd.length>0) {
            produto = await ProdutosService.updateProduto(produto);
            res.status(200).send(produto);
            
        } else {
            res.status(405).send(produto);
        }
        logger.info( `POST /update - ${JSON.stringify(produto)}`);

    } catch (err) {
        next(err);
    }

}
async function getProdutos(req, res, next) {
    try {
        res.status(200).send(await ProdutosService.getProdutos());
        logger.info( `GET /produto `);

    } catch (err) {
        next(err);
    }    
}

async function deleteProduto(req, res, next) {

    try {
        let produto = req.body;
        let newProd = await ProdutosService.getProduto(produto.codigo);
        console.log(newProd.length);
        if (newProd.length>0) {
            produto = await ProdutosService.deleteProduto(produto);
            res.status(200).send(produto);
            
        } else {
            res.status(405).send(produto);
        }
        logger.info( `POST /delete - ${req.body.codigo}`);

    } catch (err) {
        next(err);
    }

}
export default {
    createProduto,
    getProdutos,
    updateProduto,
    deleteProduto
}