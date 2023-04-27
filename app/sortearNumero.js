var maior = document.getElementById('maior').textContent;
var menor = document.getElementById('menor').textContent;
maior = parseInt(maior);
menor = parseInt(menor);


// function gerarNumeroAleatorio(){
//         let i = 0;
//     while(i<1){
//         var numeroAleatorio = Math.round(Math.random()*maior);
//         if(numeroAleatorio > menor){
//             i++;
//             return numeroAleatorio;
//         };
//     };
// };

    let i = 0;
    while(i<1){
        var numeroAleatorio = Math.round(Math.random()*maior);
        if(numeroAleatorio > menor){
            i++;
        };
    };