const { getPerson } = require('./services');

Array.prototype.myFilter = function (callback){
  const list = []
  for(index in this){
    const item = this[index]
    const results = callback(item, index, this);
    if(!results) continue;

    list.push(item)
  }
  return list
}

async function main(){
  try {
    
    const { results } = await getPerson('a');
    
    // const isLarsFamily = results.filter((element) => {
    //   const result = element.name.toLowerCase().indexOf('lars') !== -1;
    //   return result;
    // })

    const isLarsFamily =  results.myFilter((item, index, list) => {
      return  item.name.toLowerCase().indexOf('lars') !==  -1;
    })


    let names = isLarsFamily.map((element) => element.name)

    console.log(names)

  } catch (error) {
    console.error(error)
  }
}

main()
