
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesContent",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesArr",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "newtext",
                "type": "string"
            }
        ],
        "name": "updateNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founder",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidTouid",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "noteIdx",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getMyNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "notesMap",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "text",
                "type": "string"
            }
        ],
        "name": "addNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "getNote",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "noteid",
                "type": "uint256"
            }
        ],
        "name": "deleteNote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllNotes",
        "outputs": [
            {
                "components": [
                    {
                        "name": "uid",
                        "type": "uint256"
                    },
                    {
                        "name": "noteid",
                        "type": "uint256"
                    },
                    {
                        "name": "text",
                        "type": "string"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "founderID",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "userNotes",
        "outputs": [
            {
                "name": "uid",
                "type": "uint256"
            },
            {
                "name": "noteid",
                "type": "uint256"
            },
            {
                "name": "text",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "noteidToindex",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
];
let contractAddr = "0x8fd9c5dd9bb93f6014e55efec937fc60897025a6";
let contractFounder = "0x2b9579b9eb65dbc6a10a3d27fc8aba8f615bb0be";
let noteContractObj = new web3.eth.Contract(abi,contractAddr);

export {web3,abi,contractAddr,contractFounder,noteContractObj};