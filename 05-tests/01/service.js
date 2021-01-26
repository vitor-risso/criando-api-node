const { get } = require('axios');
const URL = `https://swapi.dev/api/people`

async function getPerson(name){
  const result = await get(`${URL}/?search=${name}&format=json`)
  console.log(JSON.stringify(result.data))
  return result.data.results.map(mapPerson)
}

function mapPerson(element){
  return{
    nome: element.name,
    peso: element.height
  }
}

module.exports = { 
  getPerson
}
