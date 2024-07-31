// updated ganache and web3 imports added for convenience
// contract test code will go here
const assert = require('assert')
const ganache = require('ganache');
const { Web3 } = require('web3');
// create web3 instance
const web3 = new Web3(ganache.provider());

class Cat{
    talk(){
        return 'meong';
    }
    eat(){
        return 'nyam';
    }
}

describe('Cat test', () =>{
    it('can talk', () =>{
        const cat = new Cat();
        assert.equal(cat.talk(), 'meong');
    })
})