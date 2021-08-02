require('babel-register');
require('babel-polyfill');
require('dotenv').config();
var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = ''

module.exports = {  
  networks: {
    development: {
       host: "127.0.0.1",
       port: 7545,
      network_id: "*"
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.5.16",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
