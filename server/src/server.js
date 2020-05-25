import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

require('./config/init')(app);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default server;
