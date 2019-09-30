const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/userregister')(app);
require('./controllers/userlogin')(app);
require('./controllers/partnerfind')(app);

app.listen(port, () => {
   try {
       console.log('Servidor ouvindo na porta ' + port);
   } catch(err) {
       console.log('Não foi possivél conectar com o servidor erro:' + err);
   }
});
