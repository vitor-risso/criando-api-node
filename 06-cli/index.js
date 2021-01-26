const Commander = require("commander");
const DB = require('./database');
const Hero = require("./heroi");


async function main(){
  Commander
    .version('v1')
    .option('-n , --name [value]', "Nome do heroi")
    .option('-p , --power [value]', "Poder do heroi")
    .option('-i , --id [value]', "Id do heroi", Date.now())

    .option('-c , --cadastrar', "Caastrar um heroi")
    .option('-l , --listar', "listar herois")
    .option('-r , --remove [value]', "Remover heroi pelo id")
    .option('-u , --update [value]', "atualiza heroi pelo id")
    .parse(process.argv)
  
  const options = Commander.opts()

  const hero = new Hero(Commander._optionValues)
  try {
    if(options.cadastrar){
      const result = await DB.cadastrar(hero)
      if(!result){
        console.error('Heroi nao cadastrado')
        return ;
      }

      console.log('Heroi cadastrado')
    } 

    if(options.listar){
      const result = await DB.listar();
      if(!result){
        console.error("Não foi possível listar os herois")
        return 
      }
      console.log(result)
    }

    if(options.remove){
      const result = await DB.remover(hero.id);

      if(!result){
        console.log('não foi possivel remover o heroi')
        return
      }

      return console.log("Heroi removido")
    }

    if(options.update){
      const idToUpdate = parseInt(options.update);
      // remover todas as chaves que estiverem como undefined | null

      const data = JSON.stringify(hero)
      const updateHero = JSON.parse(data)
      const result = await DB.atualizar(idToUpdate, updateHero)

      if(!result){
        console.error('Aualização nao concluida, por favor revise os dados')
        return
      }

      console.log("Heroi atualizado com sucesso")
    }
    
  } catch (error) {
    console.error("Deu ruim", error)
  }
}

main()
