const service = require('./services');

async function main (){
  try {
    const result = await service.getPerson('a') ;
    const names = []
    
    // console.time('list-time')
    // for(let i = 0; i < result.results.length; i++ ){
    //   const person = result.results[i];
    //   names.push(person.name)
    // }
    // console.timeEnd('list-time')

    // for(let i in result.results){
    //   const person = result.results[i];
    //   names.push(person.name)
    // }

    for(person of result.results){
      names.push(person.name)
    }
    console.log(names)

  } catch (error) {
    console.error("deu erro" + error)
  }
}

main()
