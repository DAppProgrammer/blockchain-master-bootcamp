const Token = artifacts.require("./Token");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Token',(accounts) => {

    const name = 'DApp Token';
    const symbol = 'DAPP';
    const decimals = '18';
    const totalSupply = '1000000000000000000000000';

    let token;
    beforeEach(async () => {
        //Fetch token from blockchain
        token = await Token.new();
    })

    describe('deployment',() => {
        it('tracks the name',async() => {
            //Read token name
            const result = await token.name();
            //Check the token name is 'My Name'
            result.should.equal(name)
        })

        it('tracks the symbol',async() => {
            //Read token name
            const result = await token.symbol();
            //Check the token name is 'Symbol'
            result.should.equal(symbol)
        })

        it('tracks the decimal',async() => {
            //Read token name
            const result = await token.decimals();
            //Check the token name is 'My Name'
            result.toString().should.equal(decimals)
        })
        
        it('tracks total supply',async() => {
            //Read token name
            const result = await token.totalSupply();
            //Check the token name is 'My Name'
            result.toString().should.equal(totalSupply)        
        })

        
    })
})