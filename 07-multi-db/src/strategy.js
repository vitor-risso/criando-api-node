class NotImplementedException extends Error {
  constructor(){
    super("Not implemented exception")
  }
}

// class ICrud{
//   create(item){
//     throw new NotImplementedException()

//   }

//   read(query){
//     throw new NotImplementedException()
//   }

//   update(id, item){
//     throw new NotImplementedException()
//   }
  
//   delet(id){
//     throw new NotImplementedException()
//   }
// }

// class MongoDB extends ICrud{
//   constructor(){
//     super()
//   }

//   create(item){
//     console.log('O item foi salvo no mongodb')
//   }
// }

// class Postgres extends ICrud{
//   constructor(){
//     super()
//   }

//   create(id){
//     console.log('O item foi salvo no postgres')
//   }

// }

// class ContextStrategy {
//   constructor(strategy){
//     this._database = strategy 
//   }

//   create(item){
//     return this._database.create(item)
//   }

//   read(item){
//     return this._database.read(item)
//   }

//   update(id, item){
//     return this._database.update(id, item)
//   }

//   delete(id){
//     return this._database.delet(id)
//   }

// }

// const contextMongo = new ContextStrategy(new MongoDB)
// contextMongo.create()

// const contentPostgres = new ContextStrategy(new Postgres)
// contentPostgres.create()
