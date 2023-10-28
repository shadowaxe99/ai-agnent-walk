// Importing required modules
const http = require('http');
const express = require('express');
const WebSocket = require('ws');

// Function to initialize Express.js
const initExpress = () => {
  const app = express();
  app.use(express.json());
  return app;
};

// Function to initialize HTTP server
const initHttpServer = (app) => {
  const server = http.createServer(app);
  return server;
};

// Function to initialize WebSocket server
const initWebSocketServer = (server) => {
  const wss = new WebSocket.Server({ server });
  return wss;
};

module.exports = {
  initExpress,
  initHttpServer,
  initWebSocketServer,
};