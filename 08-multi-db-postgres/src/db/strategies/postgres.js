const ICrud = require("./interface/interface.crud")
const Sequelize = require('sequelize');

class Postgres extends ICrud{
  constructor(){
    super()
    this._driver = null
    this._herois=null
  }
  
  async isConnected(){
    try {
      this._driver.authenticate()
      return true
    } catch (error) {
      console.error("Deu errado: ", error)
      return false
    }
  }

  async defineModel(){
    this._herois = this._driver.define('herois', {
      id:{
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING,
        required: true
      },
      power:{
        type: Sequelize.STRING,
        required: true
      }
    },{ //config
      tableName: 'TB_HEROIS',
      freezeTableName: false,//nao alterar as informações
      timeStamps: false //  nao colocar createdAt nem updatedAt
    })
  
    await this._herois.sync()
  }

  async create(item){
    const { dataValues } = await this._herois.create(item)
    return dataValues
  }

  async read(query = {}){
    return this._herois.findAll({where: query, raw: true})
  }

  async update(id, item){
    return this._herois.update(id, item)
  }

  async connect(){
    this._driver = new Sequelize(
      'heros', // o nome do db
      'vitor', // user 
      'vitinho',  //senha
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIndentifiers: false,
        operatorAliases: false
      }
    ) 
    await this.defineModel()
  }
}

module.exports = Postgres
