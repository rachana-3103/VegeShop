require('dotenv').config();

const https = require('https');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');
const chalk = require('chalk');

const conn = require('./config/sequelize-connect');

conn.dbConnect();
const app = require('./app');
require('./clusteredApp');

// const key = fs.existsSync('/etc/letsencrypt/live/backend.ourteamland.com/privkey.pem') && fs.readFileSync('/etc/letsencrypt/live/backend.ourteamland.com/privkey.pem');
// const cert = fs.existsSync('/etc/letsencrypt/live/backend.ourteamland.com/fullchain.pem') && fs.readFileSync('/etc/letsencrypt/live/backend.ourteamland.com/fullchain.pem');
let server;

// if (key && cert) {
//   server = https.createServer({ key, cert }, app);
// } else {
  server = http.createServer(app);
// }

const io = socketIO(server, {
  origin: [`${process.env.FRONT_END_URL}:*`, 'https://localhost:*'],
});

io.on('connection', (socket) => {
  socket.on('CLIENT_JOINED', async (data) => {
    const userData = await users.findOne({ where: { id: data.id } });
    if (userData) {
      socket.join(data.id);
    }
  });

  socket.on('disconnect', async () => {
    console.warn(socket.id, 'Got disconnect');
  });
});

process.on('message', (message, connection) => {
  if (message !== 'sticky-session:connection') return;
  server.emit('connection', connection);
  connection.resume();
});

process.on('uncaughtException', (uncaughtExc) => {
  console.error(chalk.bgRed('UNCAUGHT EXCEPTION! 💥 Shutting down...'));
  console.error('uncaughtException Err::', uncaughtExc);
  console.error('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error(chalk.bgRed('UNHANDLED PROMISE REJECTION! 💥 Shutting down...'));
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.info('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.info('💥 Process terminated!');
  });
});

module.exports = server;
