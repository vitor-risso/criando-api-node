const { getPerson } = require('./services');


Array.prototype.myReduce = function(callback, starterValue){

  let endValue = typeof starterValue !== undefined ? starterValue : this[0];
  for(let index = 0; index < this.length; index ++){
    endValue = callback(endValue, this[index], this)
  }

  return endValue

}

async function main (){
  try {

    const { results } = await getPerson('a');

    const weigth = results.map(element =>{
      return parseInt(element.height)
    })
    console.log(weigth)

    // const total = weigth.reduce((now, next)=>{
    //   return now + next
    // })

    const myList = [
      ['Erik', 'Wendel'], 
      ['Node', 'NerdZone']
    ];

    const total = myList.myReduce((anterior, proximo) => {
      return anterior.concat(proximo)
      },[])
      .join(', ');
    
    console.log(total)

  } catch (error) {
    console.error("deu ruim" + error)
  }
}

main()
 