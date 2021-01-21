const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario.click';
meuEmissor.on(nomeEvento, (click) =>{
  console.log('um usuario clicou', click)
})

const stdin = process.openStdin();

function main(){
  return new Promise ((resolve, rejectd)=>{
    stdin.addListener('data', (value) => {
      // console.log('voce digitou ' + value)
      return resolve(value)
    })
  })
}

main().then((result)=>{
    console.log(result.toString())
})

































// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no Ok');

// let count = 0 

// setInterval(() => {
//   meuEmissor.emit(nomeEvento, 'no Ok' + (count++));

// }, 1000);
