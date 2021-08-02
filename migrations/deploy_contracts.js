const PlayToEarn = artifacts.require("PlayToEarn");  
module.exports = async function(deployer) {
  await deployer.deploy(PlayToEarn, "0x6D5C1ce968f46Fd7c2288d63C24F1810A2295b0E");
  const playToEarn = await PlayToEarn.deployed()
};
