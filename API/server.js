const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Serviços iniciais de teste com imagens que carregam
let servicos = [
  {
    id: 1,
    nome: "Formatação de Computadores",
    preco: 150,
    detalhes: "Limpeza e otimização completa do sistema",
    imagem: "https://www.wikihow.com/images/thumb/e/e6/Format-a-PC-Step-4-Version-4.jpg/v4-728px-Format-a-PC-Step-4-Version-4.jpg.webp"
  },
  {
    id: 2,
    nome: "Manutenção de Notebooks",
    preco: 200,
    detalhes: "Revisão completa do hardware e software",
    imagem: "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia19916/especialista-prevencao-preventiva-normalmente-elimina-os-defeitos-dos-computadores-cpt11.jpg"
  },
  {
    id: 3,
    nome: "Instalação de Software",
    preco: 100,
    detalhes: "Instalação de pacotes e programas necessários",
    imagem: "https://solution-sp.com.br/images//servicos/capa-instalacao-de-programas.jpg"
  }
];

// Rota inicial
app.get('/', (req, res) => {
  res.json({ mensagem: "API funcionando 🚀" });
});

// Listar todos os serviços
app.get('/servicos', (req, res) => {
  res.json(servicos);
});

// Buscar serviço por ID
app.get('/servicos/:id', (req, res) => {
  const { id } = req.params;
  const servico = servicos.find(s => s.id === parseInt(id));
  if (!servico) return res.status(404).json({ erro: "Serviço não encontrado" });
  res.json(servico);
});

// Criar novo serviço
app.post('/servicos', (req, res) => {
  const novoServico = {
    id: servicos.length + 1,
    nome: req.body.nome,
    preco: req.body.preco,
    detalhes: req.body.detalhes,
    imagem: req.body.imagem
  };

  servicos.push(novoServico);
  res.status(201).json(novoServico);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
