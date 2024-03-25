import express from "express";
import routes from "./routes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('O eduardo é insuportável')
});

app.listen(3001, () => {
    console.log('Server rodando na porta 3001');
});