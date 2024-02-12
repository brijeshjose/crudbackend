const JSONServer = require('json-server')
const CrudServer = JSONServer.create()
const router = JSONServer.router("db.json")
const middleware= JSONServer.defaults()
const PORT = 3000 || process.env.PORT
CrudServer.use(middleware)
CrudServer.use(router)

CrudServer.listen(PORT,()=>{
    console.log(`CRUD Server started at port:${PORT} and waiting for client request`);
})