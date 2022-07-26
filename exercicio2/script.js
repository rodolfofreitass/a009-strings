const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log('Quantidade de caracteres antes: '+minhaString.length)

const minhaStringAtual = minhaString.trim()
console.log('Quantidade de caracteres depois: '+minhaStringAtual.length)

const minhaStringNova = minhaStringAtual.replace('________','sticioso')
console.log(minhaStringNova)