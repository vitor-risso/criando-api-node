/* 
  0- obter usuario 
  1- Obter o numero de telefone de 1 usuario de acorod com o id
  2- ibter endereço do usuario pelo id

  import um modulo interno do node
*/

const util = require('util');
const requireAsyncAdress = util.promisify(getAdress)

function  getUser(){
  return new Promise( function solvePromisse( resolve, rejected){

    setTimeout( () => {
     return resolve(  {
       id: 1,
       user: 'Aladin',
       dataNascimento: new Date()
     })
   },100)
  })
}

function getPhone(userId){
  return new Promise((resolve, rejected)=>{

    setTimeout(() => {
      return resolve(  {
        phone: '4546546564',
        ddd: 19
      })
    }, 2000)
  })
}

function getAdress(userId, callback){
    setTimeout(() => {
      return callback( null,  {
        street: 'rua rua rua',
        neighborhood: 'jd das rua'
      })
    }, 3000)
}

async function main(){
    try {
      let user = await getUser();
      // const phone = await getPhone(user.id);
      // const adress = await requireAsyncAdress(user.id);

      const result = await Promise.all([
        getPhone(user.id),
        requireAsyncAdress(user.id)
      ])

      let phone = result[0];
      let adress = result[1];

      user = JSON.stringify(user);
      phone = JSON.stringify(phone);
      adress = JSON.stringify(adress)

      console.log(user + phone + adress)

    } catch (error) {
      console.error(error);
    }
}

main()



































































































/* const user = getUser();

user   
  .then((user) =>{
    return getPhone(user.id)
      .then((result) => {
        return {
          usuario:{
          user: user.user,
          id: user.id
          }, 
          telefone: result
       }
      })
  })
  .then((resultado) =>{
    const adress = requireAsyncAdress(resultado.usuario.id)
    return adress.then((result) =>{
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        adress: result
      }
    })
  })
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((err)=>{
    console.log(err)
  }) */

/* function resolveUser(err, user){
  console.log(user)
}

getUser(resolveUser) */
/* 
getUser(function solveUser(err, user){
  if(err){
    console.log('deu erro' + err);
    return;
  }
  getPhone(user.id, function solvePhone(err, phone ){
    if(err){
      console.log('telefone deu ruim');
      return;
    }

    console.log(phone)
  })

  getAdress(user.id, function solveAdress(err, adress){
    if(err){
      console.log('erro no endereço' + err)
    }
    console.log(adress)
  })
  console.log(user)
}) */
