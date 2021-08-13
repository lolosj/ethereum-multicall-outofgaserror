/*
hey ethereum-multicall developper(s) : awesome piece of code, I use it a lot and I like it a lot.
Here is a code that throws an error, I think it should not.
Please don't mind the strange references in my code, I pasted it from a big project so that I can show quickly, you can ignore it.
Function 1 works fine, it doesn't throw an error, the result object has decoded = false, as intended (as we use tryAggregate = true)
Function 2 is the same one, but with more than 2 methods it will throw an error with "out of gas" message

I hope it will help you out.

PS : the same error was also thrown when running other projects like "farm.army". 
It's because this project programmatically scan PCS farms, and one of the farm (with farm ID = 444) has 0x0000000000000000000000000000000000000064 as an address. 
*/

const urlbsc = 'https://bsc-dataseed.binance.org/'
const Web3 = require('web3');
const web3 = new Web3(urlbsc);const ethereumMulticall = require('ethereum-multicall');
const multicall = new ethereumMulticall.Multicall({ web3Instance: web3, tryAggregate: true });
const TokenABI = require("./abiToken.json");




// function 1, with 2 method calls
// works fine 
// with decoded = false
async function multicallFunction(contractAddress) {
    

    
   var contractCallContext = [];      
   contractCallContext.push({
      reference: 'pancake_farm_444',
      contractAddress: contractAddress,
      abi : TokenABI,
      calls : [
        { reference: 'token0_pancake_farm_444', methodName: 'token0' }, 
        { reference: 'token1_pancake_farm_444', methodName: 'token1' },
        ]
    });
    
    let multicallResults = await multicall.call(contractCallContext);
    console.log("Results :", multicallResults.results['pancake_farm_444']);
}

// same function, with more than 2 method calls
// throws an error :  (node:1383718) UnhandledPromiseRejectionWarning: Error: Returned error: out of gas
async function multicallFunctionWithError(contractAddress) {
    

    
    var contractCallContext = [];      
    contractCallContext.push({
       reference: 'pancake_farm_444',
       contractAddress: contractAddress,
       abi : TokenABI,
       calls : [
         { reference: 'token0_pancake_farm_444', methodName: 'token0' }, 
         { reference: 'token1_pancake_farm_444', methodName: 'token1' },
         { reference: 'tvl_pancake_farm_444', methodName: 'totalSupply' },
         { reference: 'decimals_pancake_farm_444', methodName: 'decimals'},
         { reference: 'symbol_pancake_farm_444', methodName: 'symbol' }, 
           ]
     });
     
     let multicallResults = await multicall.call(contractCallContext);
     console.log("Results :", multicallResults.results['pancake_farm_444']);
 }
 

async function main() {
    await multicallFunction('0x0000000000000000000000000000000000000064');
    await multicallFunctionWithError('0x0000000000000000000000000000000000000064');
}

main();



