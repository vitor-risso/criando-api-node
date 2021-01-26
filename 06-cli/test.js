const {
  deepEqual,
  ok
} = require('assert');

const DB = require('./database')

const DEFAULT_ITEM_CADASTRADO ={
  name: 'Flash',
  power :'Speed',
  id: 1
}

const DEFAULT_ITEM_ATUALZIAR ={ 
  name: "WW",
  power: "Criptoniana",
  id: 2
}

describe('Suite de manipulação de heróis', () =>{

  before(async () => {
    await DB.cadastrar(DEFAULT_ITEM_CADASTRADO)
    await DB.cadastrar(DEFAULT_ITEM_ATUALZIAR)
  })

  it('Deve pesquisar um herói usando os arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRADO;
    const [result] = await DB.listar(expected.id)
    console.log('resultado', result)
    deepEqual(result, expected)

  })

  it('Deve cadastrar herói, usando arquivos', async () =>{
    const expected = DEFAULT_ITEM_CADASTRADO
    const result = await DB.cadastrar(DEFAULT_ITEM_CADASTRADO);
    const [actually] = await DB.listar(DEFAULT_ITEM_CADASTRADO.id)
    deepEqual(actually, expected)
  })

  it('Deve remover o heroi por id', async () => {
    const expected = true;
    const result = await DB.remover(DEFAULT_ITEM_CADASTRADO.id);
    deepEqual(result, expected)
  })

  it('Deve atualizar o heroi pelo id', async() =>{
    const expected = {
      ...DEFAULT_ITEM_ATUALZIAR,
      name: "Bataman",
      power: "no-one",
    };

    const newData = {
      name: "Bataman",
      power: "no-one",
    }
    await DB.atualizar(DEFAULT_ITEM_ATUALZIAR.id, newData);
    const [result] = await DB.listar(DEFAULT_ITEM_ATUALZIAR.id)
    deepEqual(result, expected);
  })

})
