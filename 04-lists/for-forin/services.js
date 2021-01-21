const axios = require('axios');
const URL = `https://swapi.dev/api/people`;

async function getPerson(name){
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data
}

// getPerson('r2')
//   .then((result) => {
//     return console.log(result)
//   })
//   .catch((err) => {
//     return console.error("Deu ruim" + err)
// })

module.exports ={
  getPerson
}
