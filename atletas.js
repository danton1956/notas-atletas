function calcularMediaNotas(atletas) {
    atletas.forEach(atleta => {
      let notas = atleta.notas.slice(); // Cria uma cópia das notas do atleta
      notas.sort((a, b) => a - b);      // Ordena as notas em ordem crescente
      // 
      let notasValidas = notas.slice(1, notas.length -1); // Só notas válidas!
      //
      let soma = notasValidas.reduce((acum, vlr) => acum + vlr, 0); //Soma notas
      let media = soma / notasValidas.length; // Calcula a Média Válida
      // 
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${notas}`);
      console.log(`Média Válida: ${media.toFixed(2)} <--- (${media})\n`);
    });
  }
  
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  calcularMediaNotas(atletas);
  