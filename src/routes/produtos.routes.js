import express from "express";
import produtosController  from "../controller/produtos.controller.js";
import validacao  from "../validate/produtos.validate.js";

const router = express.Router();

router.post("/", validacao.validateProduto, validacao.checkRules, produtosController.createProduto);
router.get("/", produtosController.getProdutos);
router.put("/", validacao.validateProduto, validacao.checkRules, produtosController.updateProduto);
router.delete("/", produtosController.deleteProduto);
/*

router.get("/:id", animalController.getAnimal);
router.delete("/:id", animalController.deleteAnimal);
router.put("/", animalController.updateAnimal);

*/

export default router;