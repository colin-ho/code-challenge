const { ethers } = require("ethers");
const {abi} = require("./build/contracts/TokenBalances.json");

const ADDR = "0x9fFa6Ed1d056E66FB911bF5b3403ec92cf78f199";   // your contract address
const ABI = abi;    // your contract ABI

const ADDRESS = "0x9A92B87e5e669F0fb374de430457A458ea71351B"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
    "0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108",
    "0x481B55f34Ef7839c408f35f6B57a68cd54B84eFC",
];

/*NOTE: the smart contract was deployed on Ropsten Test Network, not Ethereum Mainnet,
so only addresses on Ropsten will work. I currently don't have enough ETH for the gas fees
right now, so I hope this will suffice. 
*/
const provider = ethers.providers.getDefaultProvider("ropsten");

const test = async () => {
    const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);

    return balances;
};

test().then(console.log);