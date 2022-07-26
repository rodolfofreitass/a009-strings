//Crie a const para a frase aqui
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"'
console.log(frase)

const fraseUm = frase.replace('verde','rosa')
const fraseDois = fraseUm.replace('azul','laranja')
console.log(fraseDois)

console.log('A frase possui a palavra verde? '+fraseDois.includes("verde"))
console.log('A frase possui a palavra laranja? '+fraseDois.includes("laranja"))

const fraseParteUm = 'Jorge tem uma casa rosa e com portão laranja, com os dizeres: '
const fraseParteDois = '\"BOAS VINDAS, mas não deixe o gato sair\"'
console.log(fraseParteUm + fraseParteDois.toUpperCase())




