const PORT = 3001;


const app = require('express')();
const db = require('./config/db')
const bodyParser = require('body-parser');
var cors = require('cors');

const routes = require('./routes/route')

require('dotenv/config');




app.use(bodyParser.json());
app.use(routes)
app.db = db
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}));



app.listen(PORT, function () {
    console.log(`Server is running on por ${PORT}`)

})