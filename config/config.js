'use strict';

var path      = require('path'),
    rootPath  = path.normalize(__dirname + '/..'),
    env       = process.env.NODE_ENV || 'development';

var config = {
  development: {
    env: 'development',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    notificationService: {
      address: process.env.CONTRACT_ADDRESS,
      abi: process.env.CONTRACT_ABI_PATH || path.join(rootPath, 'contracts/notification-service-abi.json')
    },
    eventhub : {
      connectionString: process.env.EVENT_HUB_CONNECTION_STRING,
      path: process.env.EVENTHUB_PATH || 'dev'
    },
    azureStorage : {
      name : process.env.AZURE_STORAGE_ACCOUNT,
      key: process.env.AZURE_STORAGE_ACCESS_KEY,
      tableName:  process.env.AZURE_STORAGE_TABLE_NAME  ||'development'
    }
  },

  test: {
    env: 'test',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    notificationService: {
      address: process.env.CONTRACT_ADDRESS,
      abi: process.env.CONTRACT_ABI_PATH || path.join(rootPath, 'contracts/notification-service-abi.json')
    },
    eventhub : {
      connectionString: process.env.EVENT_HUB_CONNECTION_STRING,
      path: process.env.EVENTHUB_PATH || 'test'
    },
    azureStorage : {
      name : process.env.AZURE_STORAGE_ACCOUNT,
      key: process.env.AZURE_STORAGE_ACCESS_KEY,
      tableName: process.env.AZURE_STORAGE_TABLE_NAME || 'test'
    }
  },

  production: {
    env: 'production',
    root: rootPath,
    IpcProvider: process.env.IPC_PROVIDER,
    rpc: {
      host: process.env.RPC_HOST || 'http://localhost',
      port: process.env.RPC_PORT || '8545'
    },
    notificationService: {
      address: process.env.CONTRACT_ADDRESS,
      abi: process.env.CONTRACT_ABI_PATH || path.join(rootPath, 'contracts/notification-service-abi.json')
    },
    eventhub : {
      connectionString: process.env.EVENT_HUB_CONNECTION_STRING,
      path: process.env.EVENTHUB_PATH
    },
    azureStorage : {
      name : process.env.AZURE_STORAGE_ACCOUNT,
      key: process.env.AZURE_STORAGE_ACCESS_KEY,
      tableName: process.env.AZURE_STORAGE_TABLE_NAME || 'production'
    }
  }
};

module.exports = config[env];
