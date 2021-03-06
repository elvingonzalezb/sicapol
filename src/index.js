import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

import { conectar } from './database';

const app = express();
conectar();

app.get('/', (req, res) => {
    res.json({
        mensaje: 'Pagina principal'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => console.log('Server en port 3000'));