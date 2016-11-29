'use strict';
var path = require('path');
var azure = require('azure-storage');
var moment = require('moment');
var debug = require('debug')('eventhub-oracle');
var config = require('./config/config');
var Promise = require('bluebird')


if (!config.azureStorage.name || !config.azureStorage.key)  {
  throw new Error('Missing ENV variables for AZURE_STORAGE_ACCOUNT, AZURE_STORAGE_ACCESS_KEY or STRATO_URL');
}


var tableService = azure.createTableService(config.azureStorage.name, config.azureStorage.key);
var tableName = config.azureStorage.tableName;

tableService.createTableIfNotExists(tableName, function (error, result, response) {
  if (error) {
    console.error("Error creating table");
  }
});

exports.insert = function (data) {
  tableService.insertEntity(tableName, data, function(error, result, response) {
    if (error) {
      console.error(error);
    }
  })
}

exports.retrieve = function (partitionKey, rowKey) {
  tableService.retrieveEntity(tableName, partitionKey, rowKey, function(error, result, response) {
    if (error) {
      console.error(error);
    }
  });
}

exports.update = function(data) {
  tableService.insertOrReplaceEntity(tableName, data, function (error, result, response) {
    if (error) {
      console.error(error);
    }
    debug('Successfully saved to table',result, response);
  });
}


exports.merge = function (data) {
  tableService.insertOrMergeEntity(tableName, data, function (error, result, response) {
    if (error) {
      console.error(error);
    }
    debug('Successfully saved to table',result, response);
  });
}

