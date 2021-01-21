const service = require('./services');

async function main (){
  try {
    const result = await service.getPerson('a') ;
    const names = []
    
    console.time('list-time')
    for(let i = 0; i < result.results.length; i++ ){
      const person = result.results[i];
      names.push(person.name)
    }
    console.timeEnd('list-time')
    console.log(names)

  } catch (error) {
    console.error("deu erro" + error)
  }
}

main()
