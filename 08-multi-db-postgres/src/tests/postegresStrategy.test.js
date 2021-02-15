const assert = require('assert');
const Postegres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postegres());
const MOCK_HEROI_CADASTRAR = {name: 'Gaviao negro', power: 'Flechas'};
const MOCK_HEROI_ATUALIZAR = {name: ' Lanterna Verde', power: 'Anel de poder'};


describe('Postegress Strategy', function(){
  this.timeout(Infinity)
  this.beforeAll(async function(){
    await context.connect()
    await context.create(MOCK_HEROI_ATUALIZAR)
  })
  it('Postgres sql connection', async function(){
    const result = await context.isConnected()
    assert.equal(result, true)
  })

  it('Cadastrar', async function(){
    const result = await context.create(MOCK_HEROI_CADASTRAR)
    delete result.id
    delete result.createdAt
    delete result.updatedAt
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('Listar', async function (){
    const [result] = await context.read({name: MOCK_HEROI_CADASTRAR.name})
    delete result.id
    delete result.createdAt
    delete result.updatedAt
    assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('Dando update', async function(){
    const itemUpdate  = await context.read({name: MOCK_HEROI_ATUALIZAR.name})
    const newItem ={
      ...MOCK_HEROI_ATUALIZAR,
      name: 'Mulher maravilha'
    } 

    const result = await context.update(itemUpdate.id, newItem)
    assert.deepEqual(result.name,newItem.name)

    /*
      No javascript temos uma técnica que chama rest/spread que é um método usado para mergear objetos ou separa-lo 
    */
  })
})

