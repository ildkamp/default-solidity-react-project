var DefaultContract = artifacts.require("DefaultContract");

module.exports = function(deployer) {
  deployer.deploy(DefaultContract);
};
