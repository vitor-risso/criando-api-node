const ICrud = require("./interface/interface.crud")

class Postgres extends ICrud{
  constructor(){
    super()
  }

  create(id){
    console.log('O item foi salvo no postgres')
  }

}

module.exports = Postgres
