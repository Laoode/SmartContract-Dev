const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// create web3 instance
const web3 = new Web3(ganache.provider());
const {abi, evm} = require('../compile');

let accounts;
let inbox;
beforeEach(async () => {
    // get a list of accounts
    accounts = await web3.eth.getAccounts();

    // use one of the accounts to deploy contract
    inbox = await new web3.eth.Contract(abi)
    .deploy({
        data : evm.bytecode.object,
        arguments : ['Hallo']
    })
    .send({
        from: accounts[0],
        gas : '1000000'
    });
});

describe('Inbox', () => {
    it('deploy contract', () => {
        console.log(inbox);
    });
});
