# Hardhat Project for claiming RST token

This project is intended to use Hardhat, but you can follow the project on your own by reading the README and navigating the `contracts`, `tests`, `scripts` and `frontend` directories.

## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/RieserStern/simple-contract-hardhat.git
cd simple-contract-hardhat
npm install
```

We need to setup the .env file as like below
<!-- ![image description](https://ibb.co/d6ygqM5) -->
<img src="https://ibb.co/d6ygqM5"/>


Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network rinkeby
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000) to see your Dapp. You will need to have [Metamask](https://metamask.io) installed and listening to `linkeby` in [Metamask](https://metamask.io)


## What’s Included?

Your environment will have everything you need to build a Dapp powered by Hardhat and React.

- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/v5/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
- [A sample frontend/Dapp](./frontend): A Dapp which uses [Create React App](https://github.com/facebook/create-react-app).


