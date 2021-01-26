const { readFile, writeFile } = require ('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

// outra forma de obter dados do json
// const dadosJson = require('./herois.json');

// essa forma que usmamos pode ser qualqer formao

class Database {
  constructor(){
    this.NOME_DO_ARQUIVO = 'herois.json'
  }

  async obterDadosArquivo(){
    const arquivo = await readFileAsync(this.NOME_DO_ARQUIVO, 'utf8');
    return JSON.parse(arquivo.toString())
  }

  async escreverArquivo(data){
    await writeFileAsync(this.NOME_DO_ARQUIVO, JSON.stringify(data));
    return true
  }

  async cadastrar(hero){
    const data = await this.obterDadosArquivo();
    const id = (hero.id <= 2)? parseInt(hero.id) : Date.now();

    if(!hero.power){
      console.error('Escolha um poder')
      return false
    }

    if(!hero.name){
      console.error('Escolha um nome')
      return false
    }

    const herodiWithId = {
      ...hero,
      id
    };

    const finalData = [
      ...data,
      herodiWithId
    ]
    const result = await this.escreverArquivo(finalData);
    return result
  }
  
  async listar(id){
    const data = await this.obterDadosArquivo()
    const filteredData = data.filter(item => (id ? (item.id === id) :  true))
    return filteredData
  }

  async remover(id){
    if(!id){
      await this.escreverArquivo([])
    }
    
    const data = await this.obterDadosArquivo();
    const indice = data.findIndex(item => item.id === parseInt(id) )

    if(indice === -1){
      throw Error('O usuário informado não existe!')
    }

    data.splice(indice, 1);
    return await this.escreverArquivo(data)
  }

  async atualizar(id, modifications){
    const data = await this.obterDadosArquivo();
    const indice = data.findIndex(item => item.id === parseInt(id))

    if(indice === -1){
      throw Error("Herói informado não existe")
    }

    const atual = data[indice]
    const object = {
      ...atual,
      ...modifications
    }
    data.splice(indice, 1)
    return await this.escreverArquivo([
      ...data,
      object
    ])
  }
}

module.exports = new Database()
