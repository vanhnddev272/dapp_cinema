require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { ALCHEMY_API_URL, METAMASK_PRIVATE_KEY, ETHERSCAN_API_KEY } =
  process.env;

module.exports = {
  networks: {
    sepolia: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
