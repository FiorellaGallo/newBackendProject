import express from 'express'
import config from './config/config.js'
import DataBase from './data/db.js'
import router from './routes/product.routes.js'




const app = express()
const db = new DataBase();
const port = 3007

app.use(express.json());
app.use(express.urlencoded({extended:true}));

db.init(config.dbUri);

app.use(router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})