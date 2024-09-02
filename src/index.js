const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const mercado_controller = require("./controllers/mercado.js")
const mercado_router = require("./routes/mercado.js")
const app = express();
const port = 9900

app.use(express.json())

app.use("/mercado", mercado_router)

app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})