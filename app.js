
const express = require('express')
const app = express()
const port = 3009


//quand moi serveur web je reçoit une requête de type "GET" d'un client 
//sur l'url /hello, alors je renvoie "hello world"
app.get('/coucou', function(request, response) {
  
 

  response.send("Git c'est tout nul! Linus Torval, j'aurai ta peau !")
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

