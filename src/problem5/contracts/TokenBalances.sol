// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface IERC20_simple {
    function balanceOf(address account) external view returns (uint256);
}

contract TokenBalances {
    struct TokenAmount {
        address token;
        uint256 balance;
    }

    function getBalances(address walletAddress, address[] memory tokenAddresses)
        public
        view
        returns (TokenAmount[] memory)
    {
        TokenAmount[] memory tokenAmounts = new TokenAmount[](
            tokenAddresses.length
        );
        for (uint256 i = 0; i < tokenAddresses.length; i++) {
            address token = tokenAddresses[i];
            uint256 balance = IERC20_simple(token).balanceOf(walletAddress);
            tokenAmounts[i] = TokenAmount(token, balance);
        }
        return tokenAmounts;
    }
}
