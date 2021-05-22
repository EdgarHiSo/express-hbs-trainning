const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(express.static('public'))
const dataEpisodes = require('./data/got.json')


/**
 * View setup
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get("/home", (request, response) => {
    response.render("home" , {
        data: dataEpisodes
    })
})



const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
