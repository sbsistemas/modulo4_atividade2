import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  //host: 'localhost',
  //ip adquirido pelo container... docker network inspedct id_net_brigde
  //host: '172.17.0.2',
  //ajuste do DB no docker-compose.yml dando um nome ao postgres
  host: 'db',
  //port: 32769,
  port: 5432,
  database: 'consulta_credito',
  username: 'postgres',
  password: 'mysecretpassword',
  //storage: "./src/database.sqlite",
  logging: false,
});

const clienteModel = (sequelizeCliente, DataTypes) => {
  const Cliente = sequelizeCliente.define('Clientes', {
    CPF: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    Nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Cliente;
};

const consultaModel = (sequelizeConsulta, DataTypes) => {
  const Consulta = sequelizeConsulta.define('Consultas', {
    Valor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    NumPrestacoes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Juros: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Montante: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Prestacoes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Consulta;
};


const produtoModel = (sequelizeProduto, DataTypes) => {
  const Produto = sequelizeProduto.define('produtos', {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
   },
   preco: {
      type: DataTypes.DOUBLE,
      allowNull: false
   },
  });

  return Produto;
};



const cliente = clienteModel(sequelize, Sequelize.DataTypes);
const consulta = consultaModel(sequelize, Sequelize.DataTypes);
const Produto = produtoModel(sequelize, Sequelize.DataTypes);

cliente.hasMany(consulta, { as: 'Consultas' });
consulta.belongsTo(cliente);

export default  {
  cliente,
  consulta,
  Produto,
  sequelize
}
