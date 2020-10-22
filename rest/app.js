// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })



fastify.register(require('fastify-cors'), {
  "origin": '',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 201
  })
  fastify.addHook('onSend', (request, reply, payload, next) => {
  reply.header("Access-Control-Allow-Origin", "http://localhost:8080");
  reply.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Cache-Control");
  next()
});

fastify.require(('./routes/users'), { 
  prefix: '/users' 
});

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.get('/users', async (request, reply) => {
    console.log(request.params);
    console.log(request.body);
    return { userId: 1 }
})

fastify.post('/users/authorization', async (request, reply) => {
    console.log(request.params);
    console.log(request.body);
    return { userId: 1 }
})  

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()