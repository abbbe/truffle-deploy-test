require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },

    ropsten: {
      host: "127.0.0.1",
      port: 28545,
      gas: 4700000,
      network_id: "3"
    },

    ropsten_infura: {
      provider: function() {
        //return new HDWalletProvider(process.env.TESTNET_MNEMONIC, "https://ropsten.infura.io/" + process.env.INFURA_TOKEN)
        return new HDWalletProvider(process.env.TESTNET_MNEMONIC, "http://localhost:28545/")
      },
      gas: 4000000,
      network_id: 3
    },

    kovan: {
      host: "127.0.0.1",
      port: 48545,
      network_id: 42
    },

    kovan_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.TESTNET_MNEMONIC, "https://kovan.infura.io/" + process.env.INFURA_TOKEN)
      },
      network_id: 42
    },

    mainnet: {
      host: "127.0.0.1",
      port: 18545,
      network_id: "1"
    }
  }
};
