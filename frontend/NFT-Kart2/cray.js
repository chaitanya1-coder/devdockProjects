// const { ethers } = require("ethers");

// // Generate a new wallet
// const wallet = ethers.Wallet.createRandom();

// console.log("Wallet Address:", wallet.address);
// console.log("Private Key:", wallet.privateKey);

fetch('https://watcher.cray.network/api/create-order', {
    method: 'POST',
    headers: {
        'apikey': '0000-0000-0000-0000-0000',
        'Content-Type': 'application/json'
    },
    // body: '{\n    "params": {\n        "senderAddress": "0x82656BB86876A96bbbD553Df7E441AbD46235e25",\n        "receiverAddress": "0x82656BB86876A96bbbD553Df7E441AbD46235e25",\n        "destinationChain": 421614,\n        "destinationToken": "",\n        "amount": "0.13170498084291188",\n        "orderType": "p2p",\n        "minAmountOut": null,\n        "action": null,\n        "sourceChain": null,\n        "sourceToken": null\n    }\n}',
    body: JSON.stringify({
        'params': {
            'senderAddress': '0xf275fB50b402c9734E136b0eBcb24092468B550A',
            'receiverAddress': '0x54Df82dc0b8c175A3536a1bd337CA60581A3d274',
            'destinationChain': 421614,
            //'destinationToken': '',
            'amount': '0.13170498084291188',
            'orderType': 'p2p',
            'minAmountOut': null,
            'action': null,
            'sourceChain': null,
            'sourceToken': null
        }
    })
});