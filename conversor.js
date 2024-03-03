const button = document.getElementById('container-button')
const select = document.getElementById('container-select')

//cotação do dia 02/03/2024
const bitcoin=306681.07;
const dolar=4.95;
const euro=5.38;
const libra = 6.27;
const yuan = 0.7; 
const iene = 0.033;
const peso = 0.0059;

const conversaoValores = ()=>{
  const inputValor = parseFloat(document.getElementById('input-valor').value)
  const inputTexto = document.getElementById('input-texto')
  const resultadoValor = document.getElementById('resultado-valor')

  if(inputValor < 0){
    alert('Por favor, insira um valor válido')
    return;
  }

  inputTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL', 
  }).format(inputValor)

  resultadoValor.innerHTML = new Intl.NumberFormat("es-AR", {
    style: 'currency',
    currency: 'ARS', 
  }).format(inputValor/peso)

  if(select.value === 'Iene'){
    resultadoValor.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: 'currency',
      currency: 'JPY',
    }).format(inputValor/iene)
  }

  if(select.value === 'Libra'){
    resultadoValor.innerHTML = new Intl.NumberFormat("en-GB", {
      style: 'currency',
      currency: 'GBP',
    }).format(inputValor/libra)
  }

  if(select.value === 'Yuan'){
    resultadoValor.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: 'currency',
      currency: 'CNY',
    }).format(inputValor/yuan)
  }

  if(select.value === 'Bitcoin'){
    resultadoValor.innerHTML=(inputValor/bitcoin).toFixed(7)
  }

  if(select.value === 'Dólar Americano'){
    resultadoValor.innerHTML = new Intl.NumberFormat("en-EU", {
      style: 'currency',
      currency: 'USD',
    }).format(inputValor/dolar)
  }
  

  if(select.value === 'Euro'){
    resultadoValor.innerHTML = new Intl.NumberFormat("de-DE", {
      style: 'currency',
      currency: 'EUR',
    }).format(inputValor/euro)
  }
}


const quandoMudar = ()=>{
  const mudarNome = document.getElementById('mudar-nome')
  const mudarImg = document.getElementById('mudar-img')

  if(select.value === 'Iene'){
    mudarNome.innerHTML = 'Iene'
    mudarImg.src='./img/jp.png'
  }

  if(select.value === 'Peso Argentino'){
    mudarNome.innerHTML = 'Peso Argentino'
    mudarImg.src='./img/argentina.png'
  }

  if(select.value === 'Libra'){
    mudarNome.innerHTML = 'Libra'
    mudarImg.src='./img/uk.png'
  }

  if(select.value === 'Yuan'){
    mudarNome.innerHTML = 'Yuan'
    mudarImg.src='./img/china.png'
  }

  if(select.value === 'Bitcoin'){
    mudarNome.innerHTML = 'Bitcoin'
    mudarImg.src='./img/bitcoin.svg'
  }

  if(select.value === 'Euro'){
    mudarNome.innerHTML = 'Euro'
    mudarImg.src='./img/euro.svg'
  }

  if(select.value === 'Dólar Americano'){
    mudarNome.innerHTML = 'Dólar Americano'
    mudarImg.src='./img/eua.svg'
  }

conversaoValores()
}

button.addEventListener('click', conversaoValores)
select.addEventListener('change', quandoMudar)