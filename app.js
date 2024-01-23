const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')

app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')

app.get('/', (req, res)=>{
 res.render('index')
})
app.get('/short-url', (req, res)=>{
 res.send('Here is result page.')
})
app.get('/new-url',(req, res)=>{
  res.send('This rout should redirect to originally web')
})


app.listen(port,()=>{
  console.log(`express server is running on http://localhost:${port}`)
})
