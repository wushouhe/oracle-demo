'use strict';

var Web3 = require('web3');

var config = require('./config/config');
var debug = require('debug')('eventhub-oracle');
var table = require('./azure-table');
var moment = require('moment');
var _ = require('underscore')
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
      var data = _.mapObject(result.args, String);
      debug('Received event', data);

      var task = {
        PartitionKey: entGen.String(data.buyer + '_' + data.seller),
        RowKey: entGen.String(data.referenceId + '_' + data.buyer + '_' + data.seller),
        CommonReferenceId: data.referenceId,
        ContractState: data.contractState,
        Buyer: data.buyer,
        Seller: data.seller
      };

      var lastUploadDate = moment.unix(data.lastUpdated);

      if (data.who.toUpperCase() === 'S') {
        task.SellerPrice = data.price;
        task.SellerBookingState = data.bookingState;
        task.SellerLastUploadDate = entGen.DateTime(lastUploadDate.toDate());
      } else if (data.who.toUpperCase() === 'B') {
        task.BuyerPrice = data.price;
        task.BuyerBookingState = data.bookingState;
        task.BuyerLastUploadDate = entGen.DateTime(lastUploadDate.toDate());
      }

      debug('Saving event to table', task);
      table.merge(task);
    } catch  (err) {
      console.error('Could not parse event', (err));
    }
  });
};


listenOn(notificationContract);





