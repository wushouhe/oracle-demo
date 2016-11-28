var EventHubClient = require('azure-event-hubs').Client;
var Promise = require('bluebird');
var debug = require('debug')('eventhub-oracle');
var config = require('./config/config');

var client = EventHubClient.fromConnectionString(config.eventhub.connectionString, config.eventhub.path);

exports.getSender = function(channelID, errCallback) {
  return new Promise(function(resolve, reject) {
    client.open()
      .then(_createSender(channelID))
      .then(_configureSender(resolve, errCallback))
      .catch(_rejectWithError(reject));
  });
}

function _createSender(channelID) {
  return function() {
    debug('Creating sender with channelID:', channelID);
    return client.createSender(channelID);
  }
}

function _configureSender(resolve, errCallback) {
  errCallback = errCallback || _defaultError;

  return function (sender) {
    debug('Configuring sender');
    sender.on('errorReceived', errCallback);
    resolve(sender);
  }
}

function _rejectWithError(reject) {
  return function(err) {
    debug('Error creating sender:', err);
    reject(err);
  }
}

function _defaultError(err) {
  debug('Default error handling on received:', err);
  console.error(err)
}
