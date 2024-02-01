import  express from 'express';
import winston from 'winston';
import  produtoRouter from "./routes/produtos.routes.js";


const app = express();



import  consultaCliente from './consulta-cliente.js';

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(( { level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: "petshop-api.log"})
    ],
    format: combine(
        label( { label: "petshop-api"}),
        timestamp(),
        myFormat
    )
});


app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send('Bootcamp desenvolvedor back end - Tópicos especiais!');
});


app.use("/produto", produtoRouter);

app.use((err, req, res, next) => {

        console.log(err.message) ;
        logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
        res.status(400).send( { error: err.message } );
})

/*
app.post(
  '/consulta-credito',

  check('nome', 'Nome deve ser informado').notEmpty(),
  check('CPF', 'CPF deve ser informado').notEmpty(),
  check('valor', 'O valor deve ser um número').notEmpty().isFloat(),
  check('parcelas', 'O número de parcelas deve ser um número inteiro').notEmpty().isInt(),

  async (req, res) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erro: erros.array() });
    }

    try {
      const valores = await consultaCliente.consultar(
        req.body.nome,
        req.body.CPF,
        req.body.valor,
        req.body.parcelas,
      );
      return res.status(201).json(valores);
    } catch (erro) {
      return res.status(405).json({ erro: erro.message });
    }
  },
);

*/
export default app;
