// npm i sequelize pg-store pg

const Sequelize = require('sequelize');
const driver = new Sequelize(
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

async function main (){
  const Herois = driver.define('herois', {
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

  await Herois.sync()
  // await Herois.create({
  //   name: "Lanterna verde",
  //   power: "Anelzao vida loka"
  // })

  const result = await Herois.findAll({raw: true})
  console.log(result)
}

main()
