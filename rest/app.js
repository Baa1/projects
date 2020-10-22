// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

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