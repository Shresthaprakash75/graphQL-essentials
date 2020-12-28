import express from 'express';
 
const app = express();
 
app.get('/', (req, res) => {res.send('GraphQL is amazing')});
app.listen(2080, () => {console.log('Running server on port localhost:8080/graphQL')});
