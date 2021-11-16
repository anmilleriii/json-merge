//  Start json-server on port 5000 watching db.json

const jsonServer = require("json-server");
const path = require("path");

 const server = jsonServer.create();
 const middlewares = jsonServer.defaults();
 
 const pathToDatabase =  "./data/db.json";
 
 const router = jsonServer.router(pathToDatabase);
 
 server.use(jsonServer.bodyParser);
 server.use(middlewares);
 server.use(router);

 server.listen(5000, () => {
   console.log("JSON Server is running on localhost:5000");
 });
 