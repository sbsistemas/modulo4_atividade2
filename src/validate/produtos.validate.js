import  { body, validationResult } from 'express-validator';

const validateProduto = [
    body('codigo','Código é obrigatorio').exists(),
    body('descricao','Desrição é obrigatorio').exists(),
    body('preco','O preço é obrigatorio').exists(),
    body('preco','O preço tem que ser positivo').isFloat({ min:0.0001, max: 99999999999.00})

];

function checkRules  (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json( { errors: errors.array()})
    }
    next();
}


export default {
    validateProduto,
    checkRules
};