"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
// Middleware para lidar com JSON no corpo da requisição
app.use(express_1.default.json());
// Rota de teste (GET)
app.get('/', (req, res) => {
    res.send('Olá, bem-vindo à minha API em TypeScript!');
});
// Rota GET para obter usuários
app.get('/api/usuarios', (req, res) => {
    const usuarios = [
        { id: 1, nome: 'João', email: 'joao@email.com' },
        { id: 2, nome: 'Maria', email: 'maria@email.com' },
    ];
    res.json(usuarios);
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
