const TokenBalances = artifacts.require("TokenBalances");

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(TokenBalances);
};
