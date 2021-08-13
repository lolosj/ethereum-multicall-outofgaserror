# ethereum-multicall-outofgaserror
How to install and run :  
npm install  
node error.js  


Result :  
lolo@lolo:~/test-temp/ethereum-multicall-outofgaserror$ node error.js 
Results : {
  originalContractCallContext: {
    reference: 'pancake_farm_444',
    contractAddress: '0x0000000000000000000000000000000000000064',
    abi: [ [Object], [Object], [Object], [Object], [Object] ],
    calls: [ [Object], [Object] ]
  },
  callsReturnContext: [
    {
      returnValues: [],
      decoded: false,
      reference: 'token0_pancake_farm_444',
      methodName: 'token0',
      success: false
    },
    {
      returnValues: [],
      decoded: false,
      reference: 'token1_pancake_farm_444',
      methodName: 'token1',
      success: false
    }
  ]
}
(node:1385452) UnhandledPromiseRejectionWarning: Error: Returned error: out of gas
    at Object.ErrorResponse (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/web3-core-helpers/lib/errors.js:28:19)
    at /home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/web3-core-requestmanager/lib/index.js:302:36
    at XMLHttpRequest.request.onreadystatechange (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/web3-providers-http/lib/index.js:98:13)
    at XMLHttpRequestEventTarget.dispatchEvent (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/xhr2-cookies/dist/xml-http-request-event-target.js:34:22)
    at XMLHttpRequest._setReadyState (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/xhr2-cookies/dist/xml-http-request.js:208:14)
    at XMLHttpRequest._onHttpResponseEnd (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/xhr2-cookies/dist/xml-http-request.js:318:14)
    at IncomingMessage.<anonymous> (/home/lolo/test-temp/ethereum-multicall-outofgaserror/node_modules/xhr2-cookies/dist/xml-http-request.js:289:61)
    at IncomingMessage.emit (events.js:387:35)
    at endReadableNT (internal/streams/readable.js:1317:12)
    at processTicksAndRejections (internal/process/task_queues.js:82:21)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:1385452) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:1385452) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

