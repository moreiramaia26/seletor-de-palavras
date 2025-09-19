const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click',mostraPalavrasChaves);

function mostraPalavrasChaves(){
   const texto = document.querySelector('#entrada-de-texto').value;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavraChave = processaTexto(texto);
   
   campoResultado.textContent = palavraChave.join(",");

}

function processaTexto(texto){
   let palavras = texto.split(/\P{L}+/u);

  for(let i in palavras){
   palavras[i] = palavras[i].toLowerCase();
  }

  palaras = tiraPalavrasRuins(palavras);

  const frequencias = contaFrequencias(palavras);
  let ordenadas = Object.keys(frequencias).sort(ordenaPalavras);

  function ordenaPalavras(p1,p2){
   return frequencias[p2]- frequencias[p1];

  }

  console.log(ordenadas);
  return ordenadas.slice(0,10);

}

function contaFrequencias(palavras){
   let frequencias = {};
   for (let i of palavras){
      frequencias[i] = 0;
      for (let j of palavras){
         if (i==j){
            frequencias[i]++;

         }
      }
   }
   return frequencias
}

function tiraPalavrasRuins(palaras){
const PALAVRAS_RUINS = new Set(["para","uma","nós"])
const palavrasBoas = [];
for(let palavra of palavras ){
   if(!PALAVRAS_RUINS.has(palavra)&& palavra.lenght > 2){
      palavrasBoas.push(palavra);
   }
}
return palavrasBoas;
}