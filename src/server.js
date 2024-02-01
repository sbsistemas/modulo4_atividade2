import  app from './app.js';

import db from './repositories/db.js';

db.sequelize.sync().then(async () => {
  await console.log('Conectado ao banco de dados!');
});

app.listen(5678, () => {
  console.log('Bootcamp desenvolvedor back end - Tópicos especiais. Aplicação de exemplo ouvindo na porta 5678!');
});
