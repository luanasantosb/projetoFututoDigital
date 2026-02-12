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

export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    if (req.query.id) {
      const servico = servicos.find(s => s.id === parseInt(req.query.id));
      if (!servico) return res.status(404).json({ erro: "Serviço não encontrado" });
      return res.status(200).json(servico);
    }
    return res.status(200).json(servicos);
  }

  if (method === 'POST') {
    const { nome, preco, detalhes, imagem } = req.body;
    const novoServico = {
      id: servicos.length + 1,
      nome,
      preco,
      detalhes,
      imagem
    };
    servicos.push(novoServico);
    return res.status(201).json(novoServico);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Método ${method} não permitido`);
}
