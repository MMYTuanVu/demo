const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const staticFile = require('./resources/config/staticFile');
const app = express();
const port = 1000;

//static files
// app.use(express.static(path.join(__dirname, 'src/resources/public')));
// app.use('image', express.static(path.join(__dirname, 'resources', 'public', 'images')));
// app.use('videos', express.static(path.join(__dirname, 'resources', 'public', 'videos')));

// app.use(express.static(path.join(__dirname, 'resources', 'public')));
staticFile(app)

//HTTP
app.use(morgan('combined'));
// engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/new', (req, res) => {
  res.render('new');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});










