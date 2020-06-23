const fs = require('fs');
const Owned = artifacts.require('./Owned.sol');

module.exports = function (deployer) {
  deployer
    .deploy(Owned)
    .then(() => console.log(Owned.address))
    .then(() => Owned.deployed())
    .then((_instance) => {
      console.log(_instance);
      const Owned = {
        address: _instance.address,
      };
      const jsonString = JSON.stringify(Owned);
      fs.writeFile('./blockChainconfig.json', jsonString, (err) => {
        if (err) {
          console.log('Error writing file', err);
        } else {
          console.log('Successfully wrote file');
        }
      });
    });
};
