var produto_id;

const produtoArr = 
[
    {
      id: '0',
      name: 'Calça preta',
      categoria: 'Para criança',
      img: '../imagens/produtos/cc1.jpg',
      url: './produtos/produto-page-0.html',
      preco: 'R$ 35.99',
      'descrição': 'Calça leve e confortável.',
      cor: 'preto',
      peso: '110 gramas',
      material: 'Sintético'
    },
    {
      id: '1',
      name: 'Calça branca',
      categoria: 'Para criança',
      img: '../imagens/produtos/cc2.jpg',
      url: './produtos/produto-page-1.html',
      preco: 'R$ 45.99',
      'descrição': 'Calça confortável e excelente para qualquer ambiente.',
      cor: 'branco',
      peso: '110 gramas',
      material: 'Sintético'
    },
    {
      id: '2',
      name: 'Calça moletom',
      categoria: 'Para criança',
      img: '../imagens/produtos/cc3.jpg',
      url: './produtos/produto-page-2.html',
      preco: 'R$ 34.99',
      'descrição': 'A calça perfeita para dormir.',
      cor: 'azul',
      peso: '130 gramas',
      material: '100% algodão'
    },
    {
      id: '3',
      name: 'Camisa preta',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck4.jpg',
      url: './produtos/produto-page-3.html',
      preco: 'R$ 38.99',
      'descrição': 'Combina em qualquer ambiente.',
      cor: 'preto',
      peso: '112 gramas',
      material: '100% algodão'
    },
    {
      id: '4',
      name: 'Camisa branca',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck5.jpg',
      url: './produtos/produto-page-4.html',
      preco: 'R$ 46.99',
      'descrição': 'Leve, confortável e simples.',
      cor: 'branca',
      peso: '115 gramas',
      material: '100% algodão'
    },
    {
      id: '5',
      name: 'Camisa azul',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck6.jpg',
      url: './produtos/produto-page-5.html',
      preco: 'R$ 42.99',
      'descrição': 'Camisa boa e de qualidade',
      cor: 'azul',
      peso: '142 gramas',
      material: 'Polyester'
    },
    {
      id: '6',
      name: 'Sapato escolar',
      categoria: 'Para criança',
      img: '../imagens/produtos/cs7.jpg',
      url: './produtos/produto-page-6.html',
      preco: 'R$45.99',
      'descrição': 'Tênis bonito e confortável, o mais descolado entre a garotada.',
      cor: 'preto',
      peso: '210 gramas',
      material: ''
    },
    {
      id: '7',
      name: 'Sapato social',
      categoria: 'Para criança',
      img: '../imagens/produtos/cs8.jpg',
      url: './produtos/produto-page-7.html',
      preco: 'R$ 38.99',
      'descrição': 'Excelente para ambientes mais formais.',
      cor: 'branco',
      peso: '225 gramas',
      material: ''
    },
    {
      id: '8',
      name: 'Sapato esportivo',
      categoria: 'Para criança',
      img: '../imagens/produtos/cs9.jpg',
      url: './produtos/produto-page-8.html',
      preco: 'R$ 43.99',
      'descrição': 'Ideal par atividades físicas.',
      cor: 'azul',
      peso: '240 gramas',
      material: ''
    },
    {
      id: '9',
      name: 'Camisa Vermelha',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck19.jpg',
      url: './produtos/produto-page-9.html',
      preco: 'R$ 43.99',
      'descrição': 'Leve, confortável e simples.',
      cor: 'vermelha',
      peso: '190 gramas',
      material: 'Polyester'
    },
    {
      id: '10',
      name: 'Camisa Verde',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck20.jpg',
      url: './produtos/produto-page-10.html',
      preco: 'R$ 38.99',
      'descrição': 'Camisa boa e de qualidade',
      cor: 'Verde',
      peso: '180 gramas',
      material: 'Polyester'
    },
    {
      id: '11',
      name: 'Camisa Amarela',
      categoria: 'Para criança',
      img: '../imagens/produtos/ck21.jpg',
      url: './produtos/produto-page-11.html',
      preco: 'R$ 35.99',
      'descrição': 'Camisa leve e confortável.',
      cor: 'Amarela',
      peso: '210 gramas',
      material: '100% algodão'
    },
    {
      id: '12',
      name: 'Calça preta',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bc10.jpg',
      url: './produtos/produto-page-12.html',
      preco: 'R$ 35.99',
      'descrição': 'Calça leve e confortável.',
      cor: 'preto',
      peso: '105 gramas',
      material: 'Sintético'
    },
    {
      id: '13',
      name: 'Calça branca',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bc11.jpg',
      url: './produtos/produto-page-13.html',
      preco: 'R$ 45.99',
      'descrição': 'Calça confortável e excelente para qualquer ambiente.',
      cor: 'branco',
      peso: '110 gramas',
      material: 'Sintético'
    },
    {
      id: '14',
      name: 'Calça listrada',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bc12.jpg',
      url: './produtos/produto-page-14.html',
      preco: 'R$ 34.99',
      'descrição': 'A calça perfeita para dormir.',
      cor: 'amarela',
      peso: '120 gramas',
      material: '100% algodão'
    },
    {
      id: '15',
      name: 'Camisa preta',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk13.jpg',
      url: './produtos/produto-page-15.html',
      preco: 'R$ 38.99',
      'descrição': 'Combina em qualquer ambiente.',
      cor: 'preto',
      peso: '112 gramas',
      material: '100% algodão'
    },
    {
      id: '16',
      name: 'Camisa branca',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk14.jpeg',
      url: './produtos/produto-page-16.html',
      preco: 'R$ 46.99',
      'descrição': 'Leve, confortável e simples.',
      cor: 'branca',
      peso: '132 gramas',
      material: '100% algodão'
    },
    {
      id: '17',
      name: 'Camisa palmeiras',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk15.jpg',
      url: './produtos/produto-page-17.html',
      preco: 'R$ 29.99',
      'descrição': 'A camisa ideal para quem é torcedor de futebol.',
      cor: 'verde',
      peso: '123 gramas',
      material: 'Polyester'
    },
    {
      id: '18',
      name: 'Sapato social',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bs16.jpg',
      url: './produtos/produto-page-18.html',
      preco: 'R$45.99',
      'descrição': 'Excelente para ambientes mais formais.',
      cor: 'preto',
      peso: '190 gramas',
      material: ''
    },
    {
      id: '19',
      name: 'Sapato escolar',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bs17.jpg',
      url: './produtos/produto-page-19.html',
      preco: 'R$ 38.99',
      'descrição': 'Confortável e ideal para ambiente escolar.',
      cor: 'branco',
      peso: '155 gramas',
      material: ''
    },
    {
      id: '20',
      name: 'Sapatos colorido',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bs18.jpg',
      url: './produtos/produto-page-20.html',
      preco: 'R$ 28.99',
      'descrição': 'Muito confortável, perfeito para usar em casa.',
      cor: 'azul',
      peso: '190 gramas',
      material: ''
    },
    {
      id: '21',
      name: 'Camisa Vermelha',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk22.jpg',
      url: './produtos/produto-page-21.html',
      preco: 'R$ 27.99',
      'descrição': 'Leve, confortável e simples.',
      cor: 'vermelha',
      peso: '190 gramas',
      material: 'Polyester'
    },
    {
      id: '22',
      name: 'Camisa Verde',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk23.jpg',
      url: './produtos/produto-page-22.html',
      preco: 'R$ 38.99',
      'descrição': 'Camisa boa e de qualidade',
      cor: 'Verde',
      peso: '180 gramas',
      material: 'Polyester'
    },
    {
      id: '23',
      name: 'Pijama amarelo',
      categoria: 'Para bebê',
      img: '../imagens/produtos/bk24.jpeg',
      url: './produtos/produto-page-22.html',
      preco: 'R$ 34.99',
      'descrição': 'Camisa leve e confortável.',
      cor: 'Amarela',
      peso: '210 gramas',
      material: '100% algodão'
    }
]

populate_produto_page(produto_id);

function populate_produto_page(id)
{
    $('.produto-title').html(produtoArr[id]['name']);
    $('.produto-img').attr("src", produtoArr[id]['img']);
    $('.produto-description').html(produtoArr[id]['descrição']);
    $('.produto-preco').html(produtoArr[id]['preco']);
    $('.produto-name').html('Nome : ' + produtoArr[id]['name']);
    $('.produto-cor').html('Cor : ' + produtoArr[id]['cor']);
    $('.produto-peso').html('Peso : ' + produtoArr[id]['peso']);
    $('.produto-material').html('Material : ' + produtoArr[id]['material']);
    $('.produto-categoria').html('Categoria : ' + produtoArr[id]['categoria']);
}

function changeSize(tamanho)
{
  $('#text-tamanho').html(tamanho);
  $('.info4').html('Tamanho : ' + tamanho);
}

$('.alerta').hide();

function comprar()
{
    if ($('#text-tamanho').html() === 'Tamanho')
    {
        $('.alerta').show();
    }

    else
    {
        $('.alerta').hide();
        const produto_nome = produtoArr[produto_id]['name'];
        const produto_categoria = produtoArr[produto_id]['categoria'];
        const produto_preco = produtoArr[produto_id]['preco'];
        const link = 'https://api.whatsapp.com/send?phone=5571996344481&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20o%20produto%20' + produto_nome + '%2C%20categoria%20' + produto_categoria + '%2C%20de%20valor%20' + produto_preco;
    
        window.open(link, '_blank');
    }

}