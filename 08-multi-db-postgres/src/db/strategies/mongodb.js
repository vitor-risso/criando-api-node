const ICrud = require("./interface/interface.crud")

class MongoDB extends ICrud{
  constructor(){
    super()
  }

  create(item){
    console.log('O item foi salvo no mongodb')
  }
}

module.exports = MongoDB
