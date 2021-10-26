require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant hope clinic flower tongue'; 
let testAccounts = [
"0x668e089513f5519c35517ea8c99d8b3c6e5b2f99e1e3a83351d08f101751cc0b",
"0xf2b99afd57e1ccf2457a257ae297ee113e8d743bbdd5d043c0bbac281e82396b",
"0x077b2b2e5507fed09fec97a2789509e6c9f996bb128738f8475052d9a7438f2d",
"0x3a921be650df7c69b3593fccc14414c4ff7364da73b96f2d0457d216e1fb166f",
"0xb1fa446e64450f3926a1ba628498e8abf2383827ba4f1e07ac24d845b16e8189",
"0x6d40703783c7811131d36e9ad5f2934a230bb548baff8aed5d6bc3019ff5de50",
"0x14a3987c6c3c05802cd15e9a070cd57719d50efbc74c1c428bd0dd72114fe814",
"0xf830dc3d02ff0ad668b6f9edfa916d6b0ec5183e7c0ea24152725062fa3e752b",
"0x18ccc9b9193404a13d9be29b8e5ff2c25d57e0de011021d745aeaa4660a63292",
"0x734b2b7c18e5ba1612a45ffac1f9bdabcf68d527818ba0655685a6c28e587b97"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

