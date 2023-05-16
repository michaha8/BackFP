import server from './server'
import io from './socket_server'
io(server)

const port = parseInt(process.env.PORT, 10); // Parse the port as a number
server.listen(port, '0.0.0.0', () => {
  console.log('Server started');
});


export = server

