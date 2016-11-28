'use strict';

var Web3 = require('web3');

var config = require('./config/config');
var debug = require('debug')('eventhub-oracle');
var table = require('./azure-table');
var moment = require('moment');
var entGen = require('azure-storage').TableUtilities.entityGenerator;

var web3 = new Web3();

require('./config/web3')(web3, config);



var notificationABI = require(config.notificationService.abi);
var NotificationContract = web3.eth.contract(notificationABI);
var notificationContract = NotificationContract.at(config.notificationService.address);


function listenOn(contract) {
  contract.allEvents(function (err, result) {
    if (err) {
      debug('Error listening to contract events: ', err);
      return console.error('Error:', err);
    }

    try {
      var data = result.args;
      debug('Received event', data);

      // Do stuff

      debug('Saving event to table', task);
      table.merge(task);
    } catch  (err) {
      console.error('Could not parse event', (err));
    }
  });
};


listenOn(notificationContract);





