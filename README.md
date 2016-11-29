# Oracle-demo
## Installation
```bash
$ git clone https://github.com/EthereumEx/oracle-demo
$ cd oracle-demo
$ npm install --production
```
## Environment Variables
```bash
export CONTRACT_ADDRESS=0x42Bba4A8D2db61117F6e7c30FE061BC76D0EBEa5 (or the address of the deployed notification contract)
export AZURE_STORAGE_ACCOUNT=<Azure storage account name>
export AZURE_STORAGE_ACCESS_KEY=<azure storage key>
export AZURE_STORAGE_TABLE_NAME=<name of the table (optional - default value is environment's name>
```

### To run with IPC
```bash
export IPC_PROVIDER=<path to IPC>
```

### To run with RPC
Make sure the `IPC_PROVIDER` is **not** set.

```bash
export RPC_HOST=<RPC URL (default http://localhost)>
export RPC_PORT=<RCP port (default 8545)>
```

## Development
You need to download the development dependencies first.

```bash
$ npm install --global gulp-cli
$ npm install
```

Then:

```bash
$ gulp
```

## Execution
```bash
export NODE_ENV=production
$ node app.js
or
$ npm start
```