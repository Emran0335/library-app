## to create docker and make connection of myLibrary-app with mongodb compass.
## all the commands of mac termainal
## 01. docker run --name mongodb(database's name) -p 38017:27017 -d mongodb/mongodb-community-server:latest
## 02. sudo docker exec -it mongodb(database's name) mongosh
## We have to enter the password of the commputer's user
## use libDB(document's name->put a name for the mongodb compass)
## db.createUser({user:"emran", pwd:"0335", roles:[{role:"readWrite", db.libDB}]})
## Then we open the mongodb compass
## New connection and in the URI->
## mongodb://emran:0335@localhost:38017/libDB?authMechanism=DEFAULT
## click connection


## for the library-server dependency
## npm i @types/node express @types/express cors @types/cors mongoose dotenv concurrently rimraf joi bcrypt @types/bcrypt
## for devDependency
## npm i -D nodemon

## create dist folder in the library-server to compile all typescript code into javascript

## for scripts in the package.json->
## "build": "rimraf dist && tsc"
## "prestar": "npm run build"
## "start": "node ./dist/server.js"
## "predev": "npm run build"
## "dev": "concurrently \"tsc -w\" \"nodemon ./dist/server.js\""


## for opening typescript, run below commands in the terminal
## tsc -init

## in the tsconfig.json
<!-- {
  "compilerOptions": {
    "target": "ES2016",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
  },
  "include": ["src/**/*"],
}  -->

## now create src folder in the library-server and create server.ts file and then run-> npm run dev