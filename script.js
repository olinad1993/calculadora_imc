function calcular() {
  const altura = document.getElementById('txtaltura').value
  const peso = document.getElementById('txtpeso').value
  const result = document.getElementById('result')

  if (peso !== '' && altura !== '') {} else {
    alert('Preencha todos os campos')
    return;
  }

  const valorIMC = (peso / (altura * altura)).toFixed(2);
  let classif = '';

  if (valorIMC < 18.5) {
    classif = '<p>Você está abaixo do peso.</p>'
  } else if (valorIMC < 25) {
    classif = '<p>Você está com peso ideal. Parabéns!!</p>'
  } else if (valorIMC < 30) {
    classif = '<p>Você está levemente acima do peso.</p>'
  } else if (valorIMC < 35) {
    classif = '<p>Você está com obesidade GRAU I.</p>'
  } else if (valorIMC < 40) {
    classif = '<p>Você está com obesidade GRAU II.</p>'
  } else {
    classif = '<p>Você está com obesidade GRAU III. Cuidado!!</p>'
  }

  result.innerHTML = `<p>Seu IMC é <strong>${valorIMC}</strong>.</p> <p>${classif}</p>`;
}