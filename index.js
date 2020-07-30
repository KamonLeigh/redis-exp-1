const express = require('express');
const app = express();
const router = require('./routes');
const session = require('./middleware/session');
const corsMW = require('./middleware/cors');

// if you run behind a proxy (e.g nginx)
// app.set('trust proxy', 1);
app.options('*', corsMW);
app.use(corsMW);

app.use(express.json());
app.use(session);

app.use(router);

app.listen(8080, () => console.log('server is running on server 8080'));