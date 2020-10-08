const app = require("./src/app")

const PORT = 8080

app.listen(PORT, function(request, respose){
    console.log(`Servidor rodando na porta ${PORT}`);
})