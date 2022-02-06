const mysql = require('mysql')
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const rtt = require("./../runtime_types.json");

const public_node_url = 'wss://testnet2.uniquenetwork.io';

const wsProvider = new WsProvider(public_node_url);

// Create the API and wait until ready
const api = await ApiPromise.create({
    provider: wsProvider,
    types: rtt
});
