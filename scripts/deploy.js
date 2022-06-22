require('dotenv').config();

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");

  let addr_array = [
    process.env.TOKEN_ADDRESS_1, 
    process.env.TOKEN_ADDRESS_2,
    process.env.TOKEN_ADDRESS_3,
    process.env.TOKEN_ADDRESS_4,
    process.env.TOKEN_ADDRESS_5
  ];
  let bals_array = [
    process.env.TOKEN_AMOUNT_1, 
    process.env.TOKEN_AMOUNT_2,
    process.env.TOKEN_AMOUNT_3,
    process.env.TOKEN_AMOUNT_4,
    process.env.TOKEN_AMOUNT_5
  ];

  console.log(addr_array);
  console.log(bals_array);
  const token = await Token.deploy(
    addr_array, bals_array
  );

  console.log("Token address:", token.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token);
}

function saveFrontendFiles(token) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Token");

  fs.writeFileSync(
    contractsDir + "/Token.json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
