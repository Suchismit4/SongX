//  Get the instance of the router from express
const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render("index");
})

routes.get('/connect', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;