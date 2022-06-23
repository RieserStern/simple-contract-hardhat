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
<img src="https://i.ibb.co/5vVFy4R/env.png" alt="env" border="0">


Do the test with testcase scripts whether that contract is working correctly or not
```sh
npx hardhat test
```


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

<br>
<hr />

#Video
https://www.loom.com/share/fc0e2d0e067a4475972008b4ef6d4899?width=200&height=200




