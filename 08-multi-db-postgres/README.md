##  POSTGRES
```
  docker run \
  --name postgres \
  -e POSTGRES_USER=vitor-risso \
  -e POSTEGRES_PASSWORD=vitinho123 \
  -e POSTEGRE_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres

  docker run \
  --name adminer\ 
  -p 8080:8080 \
  --link postgres:postgres \
  -d adminer
```

## PARA LISTAR IMAGENS RODANDO E TODAS DISPONÍVEIS
```docker ps && docker ps -a ```

docker exec -it post



  ## ------- MONGO DB
  ```
    docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senha \
    -d \
    mongo:4

  docker run --name mongoclient -p 3000:3000 --link mongodebe:mongodb -d mongoclient/mongoclient

  ```

 ### Criando usuário pela linha de comando 
 ```
  docker exec -it mongodebe \
  mongo --host localhost -u admin -p senha --authenticationDatabase admin \
  --eval "db.getSiblingDB('herois').createUser({user:'vitor', pwd:'vitorsenha', roles:[{role: 'readWrite', db: 'herois'}]})"
 ```

 roles -> permissoes
