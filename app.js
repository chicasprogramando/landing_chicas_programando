const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);

const home = require("./routes/home");
const code = require("./routes/codeOfConduct");
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(home)
app.use(code)

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(8080);
