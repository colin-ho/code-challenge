const { ethers } = require("ethers");
const {abi} = require("./build/contracts/TokenBalances.json");

const ADDR = "0x9fFa6Ed1d056E66FB911bF5b3403ec92cf78f199";   // your contract address
const ABI = abi;    // your contract ABI

const ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
    "0xff67881f8d12f372d91baae9752eb3631ff0ed00",
    "0x0531ca5a97db8e6b4b9a5ed78d7b52991b6b24d9",
];

const provider = ethers.providers.getDefaultProvider("ropsten");

const test = async () => {
    const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);

    return balances;
};

test().then(console.log);