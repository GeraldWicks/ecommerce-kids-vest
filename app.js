//FILTRO DE CATEGORIAS
// Todos-Produtos
// Bebês
// Crianças

filterSelection(categoriaProdutos)
function filterSelection(c) {
  $("#produtos-title").html(c);
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  if (c === 'Todos-Produtos')
  {
    $("#produtos-title").html('Todos Produtos');
    $('.button-category-1').css('background-color', '#ddd');
    $('.button-category-3').css('background-color', '#f1f1f1');
    $('.button-category-2').css('background-color', '#f1f1f1');

    //#f1f1f1
  }

  if (c === 'Bebês')
  {
    console.log('bebes');
    $('.button-category-3').css('background-color', '#ddd');
    $('.button-category-1').css('background-color', '#f1f1f1');
    $('.button-category-2').css('background-color', '#f1f1f1');
  }

  if (c === 'Crianças')
  {
    console.log('Crianças');
    $('.button-category-2').css('background-color', '#ddd');
    $('.button-category-3').css('background-color', '#f1f1f1');
    $('.button-category-1').css('background-color', '#f1f1f1');
  }

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

$('.pagination-2-todos').hide();
$('.pagination-3-todos').hide();
$('.pagination-4-todos').hide();
$('.todos-produtos-2').hide();
$('.todos-produtos-3').hide();
$('.todos-produtos-4').hide();


function paginationTodos(page)
{
  for (var i = 1; i <= 4; i++)
  {
    $('.pagination-' + i + '-todos').hide();
    $('.todos-produtos-' + i).hide();
  }

  $('.pagination-' + page + '-todos').show();
  $('.todos-produtos-' + page).show();
}


$('.pagination-2-bebe').hide();
$('.bebes-produtos-2').hide()


function paginationBebe(page)
{
  $('.pagination-1-bebe').hide();
  $('.pagination-2-bebe').hide();
  $('.bebes-produtos-1').hide();
  $('.bebes-produtos-2').hide();

  $('.bebes-produtos-'+ page).show();
  $('.pagination-' + page + '-bebe').show(); 
}

$('.pagination-2-crianca').hide();
$('.crianca-produtos-2').hide();

function paginationCrianca(page)
{
  $('.pagination-1-crianca').hide();
  $('.pagination-2-crianca').hide();
  $('.crianca-produtos-1').hide();
  $('.crianca-produtos-2').hide();

  $('.pagination-' + page + '-crianca').show();
  $('.crianca-produtos-' + page).show();
}

populateProdutos();

function populateProdutos()
{
  var countBebe = 0;
  var countCrianca = 0;

  for (var i = 0; i < produtoArr.length; i++)
  {

    const name = produtoArr[i]['name'];
    const  categoria = produtoArr[i]['categoria'];
    const img = produtoArr[i]['img'];
    const url = produtoArr[i]['url'];
    const preco = produtoArr[i]['preco'];


    $('.total-title-' + i).html(name);
    $('.total-url-' + i).attr('href', url);
    $('.total-img-' + i).attr('src', img);
    $('.total-categoria-' + i).html(categoria);
    $('.total-price-' + i).html(preco);
    

    if (produtoArr[i]['categoria'] === 'Para criança')
    {
      $('.crianca-title-' + countCrianca).html(name);
      $('.crianca-url-' + countCrianca).attr('href', url);
      $('.crianca-img-' + countCrianca).attr('src', img);
      $('.crianca-categoria-' + countCrianca).html(categoria);
      $('.crianca-price-' + countCrianca).html(preco);

      countCrianca++;
    }

    if (produtoArr[i]['categoria'] === 'Para bebê')
    {
      $('.bebe-title-' + countBebe).html(name);
      $('.bebe-url-' + countBebe).attr('href', url);
      $('.bebe-img-' + countBebe).attr('src', img);
      $('.bebe-categoria-' + countBebe).html(categoria);
      $('.bebe-price-' + countBebe).html(preco);

      countBebe++;
    }

  }
}

function filtroMenor(preco)
{
  $('.ordenar-button').html(preco);
  paginationTodos('1');
  paginationBebe('1');
  paginationCrianca('1');

  var countBebe = 0;
  var countCrianca = 0;

  for (var i = 0; i < produtoMenor.length; i++)
  {

    const name = produtoMenor[i]['name'];
    const  categoria = produtoMenor[i]['categoria'];
    const img = produtoMenor[i]['img'];
    const url = produtoMenor[i]['url'];
    const preco = produtoMenor[i]['preco'];


    $('.total-title-' + i).html(name);
    $('.total-url-' + i).attr('href', url);
    $('.total-img-' + i).attr('src', img);
    $('.total-categoria-' + i).html(categoria);
    $('.total-price-' + i).html(preco);
    

    if (produtoMenor[i]['categoria'] === 'Para criança')
    {
      $('.crianca-title-' + countCrianca).html(name);
      $('.crianca-url-' + countCrianca).attr('href', url);
      $('.crianca-img-' + countCrianca).attr('src', img);
      $('.crianca-categoria-' + countCrianca).html(categoria);
      $('.crianca-price-' + countCrianca).html(preco);

      countCrianca++;
    }

    if (produtoMenor[i]['categoria'] === 'Para bebê')
    {
      $('.bebe-title-' + countBebe).html(name);
      $('.bebe-url-' + countBebe).attr('href', url);
      $('.bebe-img-' + countBebe).attr('src', img);
      $('.bebe-categoria-' + countBebe).html(categoria);
      $('.bebe-price-' + countBebe).html(preco);

      countBebe++;
    }

  }

}


function filtroMaior(preco)
{
  $('.ordenar-button').html(preco);
  paginationTodos('1');
  paginationBebe('1');
  paginationCrianca('1');

  var countBebe = 0;
  var countCrianca = 0;

  for (var i = 0; i < produtoMaior.length; i++)
  {

    const name = produtoMaior[i]['name'];
    const  categoria = produtoMaior[i]['categoria'];
    const img = produtoMaior[i]['img'];
    const url = produtoMaior[i]['url'];
    const preco = produtoMaior[i]['preco'];


    $('.total-title-' + i).html(name);
    $('.total-url-' + i).attr('href', url);
    $('.total-img-' + i).attr('src', img);
    $('.total-categoria-' + i).html(categoria);
    $('.total-price-' + i).html(preco);
    

    if (produtoMaior[i]['categoria'] === 'Para criança')
    {
      $('.crianca-title-' + countCrianca).html(name);
      $('.crianca-url-' + countCrianca).attr('href', url);
      $('.crianca-img-' + countCrianca).attr('src', img);
      $('.crianca-categoria-' + countCrianca).html(categoria);
      $('.crianca-price-' + countCrianca).html(preco);

      countCrianca++;
    }

    if (produtoMaior[i]['categoria'] === 'Para bebê')
    {
      $('.bebe-title-' + countBebe).html(name);
      $('.bebe-url-' + countBebe).attr('href', url);
      $('.bebe-img-' + countBebe).attr('src', img);
      $('.bebe-categoria-' + countBebe).html(categoria);
      $('.bebe-price-' + countBebe).html(preco);

      countBebe++;
    }

  }


}


function enviarMensagem()
{
  const name = $('.input-name').val();
  const text = $('.input-text').val();
  var newText = '';

  for (var i = 0; i < text.length; i++)
  {
    if (text[i] === ' ')
    {
      newText += '%20';
    }
    else
    {
      newText += text[i];
    }
  }

  console.log(name);
  console.log(text);
  console.log(newText);

  const link = 'https://api.whatsapp.com/send?phone=5571996344481&text=Ol%C3%A1%2C%20me%20chamo%20' + name + '%20' + newText;

  window.open(link, '_blank');
}

// palavraPesquisada

proucurarProduto(palavraPesquisada);

function proucurarProduto(palavra)
{
  const length = produtoArr.length;
  var countPesquisados = 0;

  $('.pesquisados-title').html('Resultados de : ' + palavra);

  for (var i = 0; i < 12; i++)
  {
    $('.proucurar-' + i).hide();
  }

  for (var i = 0; i < length; i++)
  {
    var fullWord = produtoArr[i]['name'];
    var one_word = fullWord.split(" ");

    if (palavra.toLowerCase() === one_word[0].toLowerCase() || palavra.toLowerCase() === one_word[1].toLowerCase())
    {
      const name = produtoArr[i]['name'];
      const url = produtoArr[i]['url'];
      const img = produtoArr[i]['img'];
      const categoria = produtoArr[i]['categoria'];
      const preco = produtoArr[i]['preco'];

      $('.proucurar-' + countPesquisados).show();
      $('.proucurar-title-' + countPesquisados).html(name);
      $('.proucurar-url-' + countPesquisados).attr('href', url);
      $('.proucurar-img-' + countPesquisados).attr('src', img);
      $('.proucurar-categoria-' + countPesquisados).html(categoria);
      $('.proucurar-price-' + countPesquisados).html(preco);

      countPesquisados++;     
    }

  }

  if (countPesquisados === 0)
  {
    $('.pesquisados-title').html('Palavra não encontrada :(');
  }

}