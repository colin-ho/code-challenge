import { ethers } from "ethers";

const tokenContract: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);
const holderAddresses = [
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];
const abi = ["function balanceOf(address) view returns (uint)"];

const contract = new ethers.Contract(tokenContract, abi, provider);

function formatCommas(n: number) {
    var separatedNumber = n.toString().split(".");
    separatedNumber[0] = separatedNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return separatedNumber.join(".");
}

holderAddresses.forEach(address => {
    contract
        .balanceOf(address)
        .then((amount: number) =>
            console.log(address + " " + formatCommas(amount / 100000000))
        );
})