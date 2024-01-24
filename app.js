const express = require('express')
const app = express()
const port = 3000
const {engine} = require('express-handlebars')

app.engine('.hbs',engine({extname:'.hbs'}))
app.set('view engine','.hbs')
app.set('views','./views')

/*建立隨機5個字母的字串*/
function makeString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
let urls = makeString(5)

/*根目錄*/
app.get('/', (req, res)=>{
  res.render('index')
})

/*產生新短網址*/
app.get('/short-url', (req, res)=>{
  res.render('newurl', {urls})
})

/*點擊短網址後重導向原網址*/
app.get('/new-url',(req, res)=>{
  res.redirect(`${urls}`)
})


app.listen(port,()=>{
  console.log(`express server is running on http://localhost:${port}`)
})
