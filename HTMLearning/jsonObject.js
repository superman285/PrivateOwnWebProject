var jdata = {
    "contractName": "Migrations",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "last_completed_migration",
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
            "name": "owner",
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
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "completed",
                    "type": "uint256"
                }
            ],
            "name": "setCompleted",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "new_address",
                    "type": "address"
                }
            ],
            "name": "upgrade",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f8806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a723058205f522b345fc74ed38f77b1c2a6bb6f1b770c0f85996e96cc4cd1c7b938c10fb20029",
    "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a723058205f522b345fc74ed38f77b1c2a6bb6f1b770c0f85996e96cc4cd1c7b938c10fb20029",
    "sourceMap": "26:488:1:-;;;178:58;8:9:-1;5:2;;;30:1;27;20:12;5:2;178:58:1;221:10;213:5;;:18;;;;;;;;;;;;;;;;;;26:488;;;;;;",
    "deployedSourceMap": "26:488:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;347:165:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;74:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;74:36:1;;;;;;;;;;;;;;;;;;;;;;;50:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;50:20:1;;;;;;;;;;;;;;;;;;;;;;;;;;;240:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;240:103:1;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;409:19;161:5;;;;;;;;;;;147:19;;:10;:19;;;143:26;;;442:11;409:45;;460:8;:21;;;482:24;;460:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;460:47:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;460:47:1;;;;143:26;347:165;;:::o;74:36::-;;;;:::o;50:20::-;;;;;;;;;;;;;:::o;240:103::-;161:5;;;;;;;;;;;147:19;;:10;:19;;;143:26;;;329:9;302:24;:36;;;;143:26;240:103;:::o",
    "source": "pragma solidity ^0.4.17;\n\ncontract Migrations {\n  address public owner;\n  uint public last_completed_migration;\n\n  modifier restricted() {\n    if (msg.sender == owner) _;\n  }\n\n  function Migrations() public {\n    owner = msg.sender;\n  }\n\n  function setCompleted(uint completed) public restricted {\n    last_completed_migration = completed;\n  }\n\n  function upgrade(address new_address) public restricted {\n    Migrations upgraded = Migrations(new_address);\n    upgraded.setCompleted(last_completed_migration);\n  }\n}\n",
    "sourcePath": "R:\\Web Projectd\\newpet\\contracts\\Migrations.sol",
    "ast": {
        "absolutePath": "/R/Web Projectd/newpet/contracts/Migrations.sol",
        "exportedSymbols": {
            "Migrations": [
                100
            ]
        },
        "id": 101,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 45,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".17"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:1"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 100,
                "linearizedBaseContracts": [
                    100
                ],
                "name": "Migrations",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 47,
                        "name": "owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 100,
                        "src": "50:20:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 46,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "50:7:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 49,
                        "name": "last_completed_migration",
                        "nodeType": "VariableDeclaration",
                        "scope": 100,
                        "src": "74:36:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 48,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "74:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 57,
                            "nodeType": "Block",
                            "src": "137:37:1",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 54,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 51,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "147:3:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 52,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "147:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 53,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 47,
                                            "src": "161:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "147:19:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 56,
                                    "nodeType": "IfStatement",
                                    "src": "143:26:1",
                                    "trueBody": {
                                        "id": 55,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "168:1:1"
                                    }
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 58,
                        "name": "restricted",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 50,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "134:2:1"
                        },
                        "src": "115:59:1",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 66,
                            "nodeType": "Block",
                            "src": "207:29:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 64,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 61,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 47,
                                            "src": "213:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 62,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "221:3:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 63,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "221:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "213:18:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 65,
                                    "nodeType": "ExpressionStatement",
                                    "src": "213:18:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 67,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "Migrations",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 59,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "197:2:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 60,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "207:0:1"
                        },
                        "scope": 100,
                        "src": "178:58:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 78,
                            "nodeType": "Block",
                            "src": "296:47:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 76,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 74,
                                            "name": "last_completed_migration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 49,
                                            "src": "302:24:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "name": "completed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69,
                                            "src": "329:9:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "302:36:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 77,
                                    "nodeType": "ExpressionStatement",
                                    "src": "302:36:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 79,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 72,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 71,
                                    "name": "restricted",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 58,
                                    "src": "285:10:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "285:10:1"
                            }
                        ],
                        "name": "setCompleted",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 70,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 69,
                                    "name": "completed",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 79,
                                    "src": "262:14:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "262:4:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "261:16:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 73,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "296:0:1"
                        },
                        "scope": 100,
                        "src": "240:103:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 98,
                            "nodeType": "Block",
                            "src": "403:109:1",
                            "statements": [
                                {
                                    "assignments": [
                                        87
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 87,
                                            "name": "upgraded",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 99,
                                            "src": "409:19:1",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Migrations_$100",
                                                "typeString": "contract Migrations"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 86,
                                                "name": "Migrations",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 100,
                                                "src": "409:10:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Migrations_$100",
                                                    "typeString": "contract Migrations"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 91,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 89,
                                                "name": "new_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 81,
                                                "src": "442:11:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 88,
                                            "name": "Migrations",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 100,
                                            "src": "431:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_Migrations_$100_$",
                                                "typeString": "type(contract Migrations)"
                                            }
                                        },
                                        "id": 90,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "431:23:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Migrations_$100",
                                            "typeString": "contract Migrations"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "409:45:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 95,
                                                "name": "last_completed_migration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 49,
                                                "src": "482:24:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 92,
                                                "name": "upgraded",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "460:8:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Migrations_$100",
                                                    "typeString": "contract Migrations"
                                                }
                                            },
                                            "id": 94,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "setCompleted",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 79,
                                            "src": "460:21:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256) external"
                                            }
                                        },
                                        "id": 96,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "460:47:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 97,
                                    "nodeType": "ExpressionStatement",
                                    "src": "460:47:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 99,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 84,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 83,
                                    "name": "restricted",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 58,
                                    "src": "392:10:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "392:10:1"
                            }
                        ],
                        "name": "upgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 82,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 81,
                                    "name": "new_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 99,
                                    "src": "364:19:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 80,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "364:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "363:21:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "403:0:1"
                        },
                        "scope": 100,
                        "src": "347:165:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 101,
                "src": "26:488:1"
            }
        ],
        "src": "0:515:1"
    },
    "legacyAST": {
        "absolutePath": "/R/Web Projectd/newpet/contracts/Migrations.sol",
        "exportedSymbols": {
            "Migrations": [
                100
            ]
        },
        "id": 101,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 45,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".17"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:1"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 100,
                "linearizedBaseContracts": [
                    100
                ],
                "name": "Migrations",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 47,
                        "name": "owner",
                        "nodeType": "VariableDeclaration",
                        "scope": 100,
                        "src": "50:20:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 46,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "50:7:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 49,
                        "name": "last_completed_migration",
                        "nodeType": "VariableDeclaration",
                        "scope": 100,
                        "src": "74:36:1",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 48,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "74:4:1",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 57,
                            "nodeType": "Block",
                            "src": "137:37:1",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 54,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 51,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "147:3:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 52,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "147:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 53,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 47,
                                            "src": "161:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "147:19:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 56,
                                    "nodeType": "IfStatement",
                                    "src": "143:26:1",
                                    "trueBody": {
                                        "id": 55,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "168:1:1"
                                    }
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 58,
                        "name": "restricted",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 50,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "134:2:1"
                        },
                        "src": "115:59:1",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 66,
                            "nodeType": "Block",
                            "src": "207:29:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 64,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 61,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 47,
                                            "src": "213:5:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 62,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 115,
                                                "src": "221:3:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 63,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "221:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "213:18:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 65,
                                    "nodeType": "ExpressionStatement",
                                    "src": "213:18:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 67,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "Migrations",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 59,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "197:2:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 60,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "207:0:1"
                        },
                        "scope": 100,
                        "src": "178:58:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 78,
                            "nodeType": "Block",
                            "src": "296:47:1",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 76,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 74,
                                            "name": "last_completed_migration",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 49,
                                            "src": "302:24:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 75,
                                            "name": "completed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 69,
                                            "src": "329:9:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "302:36:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 77,
                                    "nodeType": "ExpressionStatement",
                                    "src": "302:36:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 79,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 72,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 71,
                                    "name": "restricted",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 58,
                                    "src": "285:10:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "285:10:1"
                            }
                        ],
                        "name": "setCompleted",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 70,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 69,
                                    "name": "completed",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 79,
                                    "src": "262:14:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 68,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "262:4:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "261:16:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 73,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "296:0:1"
                        },
                        "scope": 100,
                        "src": "240:103:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 98,
                            "nodeType": "Block",
                            "src": "403:109:1",
                            "statements": [
                                {
                                    "assignments": [
                                        87
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 87,
                                            "name": "upgraded",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 99,
                                            "src": "409:19:1",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Migrations_$100",
                                                "typeString": "contract Migrations"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 86,
                                                "name": "Migrations",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 100,
                                                "src": "409:10:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Migrations_$100",
                                                    "typeString": "contract Migrations"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 91,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 89,
                                                "name": "new_address",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 81,
                                                "src": "442:11:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 88,
                                            "name": "Migrations",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 100,
                                            "src": "431:10:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_contract$_Migrations_$100_$",
                                                "typeString": "type(contract Migrations)"
                                            }
                                        },
                                        "id": 90,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "431:23:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Migrations_$100",
                                            "typeString": "contract Migrations"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "409:45:1"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 95,
                                                "name": "last_completed_migration",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 49,
                                                "src": "482:24:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 92,
                                                "name": "upgraded",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "460:8:1",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Migrations_$100",
                                                    "typeString": "contract Migrations"
                                                }
                                            },
                                            "id": 94,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "setCompleted",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 79,
                                            "src": "460:21:1",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                                                "typeString": "function (uint256) external"
                                            }
                                        },
                                        "id": 96,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "460:47:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 97,
                                    "nodeType": "ExpressionStatement",
                                    "src": "460:47:1"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 99,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": null,
                                "id": 84,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 83,
                                    "name": "restricted",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 58,
                                    "src": "392:10:1",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "392:10:1"
                            }
                        ],
                        "name": "upgrade",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 82,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 81,
                                    "name": "new_address",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 99,
                                    "src": "364:19:1",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 80,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "364:7:1",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "363:21:1"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 85,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "403:0:1"
                        },
                        "scope": 100,
                        "src": "347:165:1",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 101,
                "src": "26:488:1"
            }
        ],
        "src": "0:515:1"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
        "5777": {
            "events": {},
            "links": {},
            "address": "0x2bad326c2970f237203231694c2e88c45192c7db",
            "transactionHash": "0x086da36c94cb18dedaad6fea8dc08db3d57155701c23ca734d8ab2808ba877fa"
        }
    },
    "schemaVersion": "2.0.0",
    "updatedAt": "2018-06-08T03:46:48.511Z"
}

//求Object长度的方法，用Object.keys方法将所有key取出来放在一个数组，则数组长度则为Object长度
var jdatalength = Object.keys(jdata);

console.log(jdatalength.length)

var ak = document.querySelector()

document.querySelector()

var a,b;


switch (b){
    case (a>12):
        console.log("11");
    case 12:
        console.log("12");
    case 13:

}

