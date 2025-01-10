const fs = require('fs');
const current = require('../payloads/original.json');
const final = [];
i = 0;
const quantityToMultiply = 40;
while(i < quantityToMultiply){
    final.push(current);
    i++;
}

// Converte o objeto JSON em uma string
const jsonString = JSON.stringify(final.flat(), null, 2);

// Salva o arquivo JSON
fs.writeFile('../payloads/full.json', jsonString, (err) => {
  if (err) {
    console.error('Erro ao salvar o arquivo:', err);
  } else {
    console.log('Arquivo salvo com sucesso!');
  }
});
