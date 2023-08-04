const express = require('express');
const cors = require('cors');
const  categories = require('./data/categories.json');
const app = express()
const port =  process.env.PORT || 4000

app.use(cors());

app.get('/', (req,res)=>{
    res.send ('Hello Datas')
})

app.get('/categories', (req,res)=>{
    res.send (categories)
})

app.listen(port, ()=>{
    console.log(`dragon api is runnng on port: ${port}`);
})