const service = require('./services');

Array.prototype.myMap = function(callback){
  const newMapArray = [];
  for(let i = 0; i < this.length; i++){
    const result = callback(this[i], i);

    newMapArray.push(result);
  }

  return newMapArray
}

async function main(){
  try {
    
    const results = await service.getPerson('a');

    // const names = []

    // results.results.forEach((element) => {
    //   names.push(element.name)
    // });
    
    // const names = results.results.map((element) => {
    //   return element.name
    // });

    const names = results.results.myMap(function (element, i){
      return element.name
    })

    console.log(names)

  } catch (error) {
    console.error(error)
  }
}

main()
