require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");

// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 31337
    },
    rinkeby: {
      chainId: 4,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.API_KEY}`,
      accounts: [
        `${process.env.RINKEBY_PRIVATEKEY_0}`,
        `${process.env.RINKEBY_PRIVATEKEY_1}`,
        `${process.env.RINKEBY_PRIVATEKEY_2}`,
        `${process.env.RINKEBY_PRIVATEKEY_3}`,
        `${process.env.RINKEBY_PRIVATEKEY_4}`,
        `${process.env.RINKEBY_PRIVATEKEY_5}`
      ]
    }
  }
};
