const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render('index', { layout : 'layout', title : 'Home Page', username : 'Manvinderjit', date : new Date() });
});

app.get("/menu", (req, res) => {
    res.render('menu', { layout : 'layout', title : 'Menu Page', username : 'Manvinderjit' });
});

app.get("*", (req, res) => {
    res.render('404', { layout : 'layout', title : 'Not Found' });
});

app.listen(3000, () => {
    console.log('Server is up at http://localhost:3000');
});
