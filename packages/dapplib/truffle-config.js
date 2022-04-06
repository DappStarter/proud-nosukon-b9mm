require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign street dash soccer pulp hunt immense army genius'; 
let testAccounts = [
"0x46cf14ee37501433a776dd4a722c84e5f1e7ba6ac6b83e9d208ed56bd7ef715a",
"0x8202f20dc78f93368dcd13fa2d3734375948d031c2f3a03fdb5c40db6f1bfdcd",
"0x261f23a550ff99f4b2152f7f543087769c06dce90acc6bfc338ddb09adc8dfc3",
"0x827d37a826c746e4db0872932e684b63aa81b171dda4a22b4e9e63fdf46c45e3",
"0x72f7a29c6c8f1b6480f0d9a6704ee9abd903ee014856b55149e4a39b413b9c65",
"0xfa36f428d1a96960c854ad6e18865c1b764d47ae0289b60310f932354a3b4586",
"0xd52765427083e3297c1cfa23b5531df01bb8e76489e7062b208a307bf986a6ec",
"0x49a9c45da54744816410bbf0d7ee5fd2e7a6b117b7cd16570cac44c4b3b31238",
"0x81c34fecbaadf051ce3cd5196edc5a93dd0433850fb74ac7aa013328e09080d0",
"0x4cbe322c2df65218ea3252f20519a2b975630f44ea36ea8b64112304fc7c5104"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


