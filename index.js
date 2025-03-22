const express = require('express')
const app = express()
const port = 3000

app.set('views','public');
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.render("index",{
    title: 'oK',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, harum id? Recusandae facere, dolor quos voluptas voluptatibus ipsa! Officiis provident deserunt ad culpa ducimus eius earum consequuntur praesentium ipsum qui?'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})