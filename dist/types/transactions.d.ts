import { Infer } from 'superstruct';
import { SuiEvent } from './events';
import { SuiMovePackage, SuiObject, SuiObjectRef } from './objects';
import { ObjectId, SuiAddress, TransactionDigest } from './common';
export declare const EpochId: import("superstruct").Struct<number, null>;
export declare const TransferObject: import("superstruct").Struct<{
    recipient: string;
    objectRef: {
        digest: string;
        objectId: string;
        version: number;
    };
}, {
    recipient: import("superstruct").Struct<string, null>;
    objectRef: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
}>;
export type TransferObject = Infer<typeof TransferObject>;
export declare const SuiTransferSui: import("superstruct").Struct<{
    recipient: string;
    amount: number | null;
}, {
    recipient: import("superstruct").Struct<string, null>;
    amount: import("superstruct").Struct<number | null, null>;
}>;
export type SuiTransferSui = Infer<typeof SuiTransferSui>;
export declare const SuiChangeEpoch: import("superstruct").Struct<{
    epoch: number;
    storage_charge: number;
    computation_charge: number;
}, {
    epoch: import("superstruct").Struct<number, null>;
    storage_charge: import("superstruct").Struct<number, null>;
    computation_charge: import("superstruct").Struct<number, null>;
}>;
export type SuiChangeEpoch = Infer<typeof SuiChangeEpoch>;
export declare const Pay: import("superstruct").Struct<{
    coins: {
        digest: string;
        objectId: string;
        version: number;
    }[];
    recipients: string[];
    amounts: number[];
}, {
    coins: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[], import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    recipients: import("superstruct").Struct<string[], import("superstruct").Struct<string, null>>;
    amounts: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
}>;
export type Pay = Infer<typeof Pay>;
export declare const PaySui: import("superstruct").Struct<{
    coins: {
        digest: string;
        objectId: string;
        version: number;
    }[];
    recipients: string[];
    amounts: number[];
}, {
    coins: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[], import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    recipients: import("superstruct").Struct<string[], import("superstruct").Struct<string, null>>;
    amounts: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
}>;
export type PaySui = Infer<typeof PaySui>;
export declare const PayAllSui: import("superstruct").Struct<{
    recipient: string;
    coins: {
        digest: string;
        objectId: string;
        version: number;
    }[];
}, {
    coins: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[], import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    recipient: import("superstruct").Struct<string, null>;
}>;
export type PayAllSui = Infer<typeof PayAllSui>;
export declare const MoveCall: import("superstruct").Struct<{
    function: string;
    package: {
        digest: string;
        objectId: string;
        version: number;
    };
    module: string;
    arguments: unknown[];
    typeArguments?: string[] | undefined;
}, {
    package: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
    module: import("superstruct").Struct<string, null>;
    function: import("superstruct").Struct<string, null>;
    typeArguments: import("superstruct").Struct<string[] | undefined, import("superstruct").Struct<string, null>>;
    arguments: import("superstruct").Struct<unknown[], import("superstruct").Struct<unknown, null>>;
}>;
export type MoveCall = Infer<typeof MoveCall>;
export type ExecuteTransactionRequestType = 'WaitForEffectsCert' | 'WaitForLocalExecution';
export type TransactionKindName = 'TransferObject' | 'Publish' | 'Call' | 'TransferSui' | 'ChangeEpoch' | 'Pay' | 'PaySui' | 'PayAllSui';
export declare const SuiTransactionKind: import("superstruct").Struct<{
    TransferObject: {
        recipient: string;
        objectRef: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
} | {
    Publish: {
        disassembled: Record<string, string>;
    };
} | {
    Call: {
        function: string;
        package: {
            digest: string;
            objectId: string;
            version: number;
        };
        module: string;
        arguments: unknown[];
        typeArguments?: string[] | undefined;
    };
} | {
    TransferSui: {
        recipient: string;
        amount: number | null;
    };
} | {
    ChangeEpoch: {
        epoch: number;
        storage_charge: number;
        computation_charge: number;
    };
} | {
    Pay: {
        coins: {
            digest: string;
            objectId: string;
            version: number;
        }[];
        recipients: string[];
        amounts: number[];
    };
} | {
    PaySui: {
        coins: {
            digest: string;
            objectId: string;
            version: number;
        }[];
        recipients: string[];
        amounts: number[];
    };
} | {
    PayAllSui: {
        recipient: string;
        coins: {
            digest: string;
            objectId: string;
            version: number;
        }[];
    };
}, null>;
export type SuiTransactionKind = Infer<typeof SuiTransactionKind>;
export declare const SuiTransactionData: import("superstruct").Struct<{
    sender: string;
    gasPayment: {
        digest: string;
        objectId: string;
        version: number;
    };
    gasBudget: number;
    transactions: ({
        TransferObject: {
            recipient: string;
            objectRef: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
    } | {
        Publish: {
            disassembled: Record<string, string>;
        };
    } | {
        Call: {
            function: string;
            package: {
                digest: string;
                objectId: string;
                version: number;
            };
            module: string;
            arguments: unknown[];
            typeArguments?: string[] | undefined;
        };
    } | {
        TransferSui: {
            recipient: string;
            amount: number | null;
        };
    } | {
        ChangeEpoch: {
            epoch: number;
            storage_charge: number;
            computation_charge: number;
        };
    } | {
        Pay: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PaySui: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PayAllSui: {
            recipient: string;
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
        };
    })[];
    gasPrice?: number | undefined;
}, {
    transactions: import("superstruct").Struct<({
        TransferObject: {
            recipient: string;
            objectRef: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
    } | {
        Publish: {
            disassembled: Record<string, string>;
        };
    } | {
        Call: {
            function: string;
            package: {
                digest: string;
                objectId: string;
                version: number;
            };
            module: string;
            arguments: unknown[];
            typeArguments?: string[] | undefined;
        };
    } | {
        TransferSui: {
            recipient: string;
            amount: number | null;
        };
    } | {
        ChangeEpoch: {
            epoch: number;
            storage_charge: number;
            computation_charge: number;
        };
    } | {
        Pay: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PaySui: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PayAllSui: {
            recipient: string;
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
        };
    })[], import("superstruct").Struct<{
        TransferObject: {
            recipient: string;
            objectRef: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
    } | {
        Publish: {
            disassembled: Record<string, string>;
        };
    } | {
        Call: {
            function: string;
            package: {
                digest: string;
                objectId: string;
                version: number;
            };
            module: string;
            arguments: unknown[];
            typeArguments?: string[] | undefined;
        };
    } | {
        TransferSui: {
            recipient: string;
            amount: number | null;
        };
    } | {
        ChangeEpoch: {
            epoch: number;
            storage_charge: number;
            computation_charge: number;
        };
    } | {
        Pay: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PaySui: {
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
            recipients: string[];
            amounts: number[];
        };
    } | {
        PayAllSui: {
            recipient: string;
            coins: {
                digest: string;
                objectId: string;
                version: number;
            }[];
        };
    }, null>>;
    sender: import("superstruct").Struct<string, null>;
    gasPayment: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
    gasPrice: import("superstruct").Struct<number | undefined, null>;
    gasBudget: import("superstruct").Struct<number, null>;
}>;
export type SuiTransactionData = Infer<typeof SuiTransactionData>;
export declare const AuthoritySignature: import("superstruct").Struct<string, null>;
export declare const GenericAuthoritySignature: import("superstruct").Struct<string | string[], null>;
export declare const AuthorityQuorumSignInfo: import("superstruct").Struct<{
    epoch: number;
    signature: string | string[];
    signers_map: number[];
}, {
    epoch: import("superstruct").Struct<number, null>;
    signature: import("superstruct").Struct<string | string[], null>;
    signers_map: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
}>;
export type AuthorityQuorumSignInfo = Infer<typeof AuthorityQuorumSignInfo>;
export declare const CertifiedTransaction: import("superstruct").Struct<{
    data: {
        sender: string;
        gasPayment: {
            digest: string;
            objectId: string;
            version: number;
        };
        gasBudget: number;
        transactions: ({
            TransferObject: {
                recipient: string;
                objectRef: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        } | {
            Publish: {
                disassembled: Record<string, string>;
            };
        } | {
            Call: {
                function: string;
                package: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                module: string;
                arguments: unknown[];
                typeArguments?: string[] | undefined;
            };
        } | {
            TransferSui: {
                recipient: string;
                amount: number | null;
            };
        } | {
            ChangeEpoch: {
                epoch: number;
                storage_charge: number;
                computation_charge: number;
            };
        } | {
            Pay: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PaySui: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PayAllSui: {
                recipient: string;
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
            };
        })[];
        gasPrice?: number | undefined;
    };
    txSignature: string;
    transactionDigest: string;
    authSignInfo: {
        epoch: number;
        signature: string | string[];
        signers_map: number[];
    };
}, {
    transactionDigest: import("superstruct").Struct<string, null>;
    data: import("superstruct").Struct<{
        sender: string;
        gasPayment: {
            digest: string;
            objectId: string;
            version: number;
        };
        gasBudget: number;
        transactions: ({
            TransferObject: {
                recipient: string;
                objectRef: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        } | {
            Publish: {
                disassembled: Record<string, string>;
            };
        } | {
            Call: {
                function: string;
                package: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                module: string;
                arguments: unknown[];
                typeArguments?: string[] | undefined;
            };
        } | {
            TransferSui: {
                recipient: string;
                amount: number | null;
            };
        } | {
            ChangeEpoch: {
                epoch: number;
                storage_charge: number;
                computation_charge: number;
            };
        } | {
            Pay: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PaySui: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PayAllSui: {
                recipient: string;
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
            };
        })[];
        gasPrice?: number | undefined;
    }, {
        transactions: import("superstruct").Struct<({
            TransferObject: {
                recipient: string;
                objectRef: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        } | {
            Publish: {
                disassembled: Record<string, string>;
            };
        } | {
            Call: {
                function: string;
                package: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                module: string;
                arguments: unknown[];
                typeArguments?: string[] | undefined;
            };
        } | {
            TransferSui: {
                recipient: string;
                amount: number | null;
            };
        } | {
            ChangeEpoch: {
                epoch: number;
                storage_charge: number;
                computation_charge: number;
            };
        } | {
            Pay: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PaySui: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PayAllSui: {
                recipient: string;
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
            };
        })[], import("superstruct").Struct<{
            TransferObject: {
                recipient: string;
                objectRef: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        } | {
            Publish: {
                disassembled: Record<string, string>;
            };
        } | {
            Call: {
                function: string;
                package: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                module: string;
                arguments: unknown[];
                typeArguments?: string[] | undefined;
            };
        } | {
            TransferSui: {
                recipient: string;
                amount: number | null;
            };
        } | {
            ChangeEpoch: {
                epoch: number;
                storage_charge: number;
                computation_charge: number;
            };
        } | {
            Pay: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PaySui: {
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
                recipients: string[];
                amounts: number[];
            };
        } | {
            PayAllSui: {
                recipient: string;
                coins: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[];
            };
        }, null>>;
        sender: import("superstruct").Struct<string, null>;
        gasPayment: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
        gasPrice: import("superstruct").Struct<number | undefined, null>;
        gasBudget: import("superstruct").Struct<number, null>;
    }>;
    txSignature: import("superstruct").Struct<string, null>;
    authSignInfo: import("superstruct").Struct<{
        epoch: number;
        signature: string | string[];
        signers_map: number[];
    }, {
        epoch: import("superstruct").Struct<number, null>;
        signature: import("superstruct").Struct<string | string[], null>;
        signers_map: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
    }>;
}>;
export type CertifiedTransaction = Infer<typeof CertifiedTransaction>;
export declare const GasCostSummary: import("superstruct").Struct<{
    storageRebate: number;
    computationCost: number;
    storageCost: number;
}, {
    computationCost: import("superstruct").Struct<number, null>;
    storageCost: import("superstruct").Struct<number, null>;
    storageRebate: import("superstruct").Struct<number, null>;
}>;
export type GasCostSummary = Infer<typeof GasCostSummary>;
export declare const ExecutionStatusType: import("superstruct").Struct<"success" | "failure", null>;
export type ExecutionStatusType = Infer<typeof ExecutionStatusType>;
export declare const ExecutionStatus: import("superstruct").Struct<{
    status: "success" | "failure";
    error?: string | undefined;
}, {
    status: import("superstruct").Struct<"success" | "failure", null>;
    error: import("superstruct").Struct<string | undefined, null>;
}>;
export type ExecutionStatus = Infer<typeof ExecutionStatus>;
export declare const OwnedObjectRef: import("superstruct").Struct<{
    owner: {
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable";
    reference: {
        digest: string;
        objectId: string;
        version: number;
    };
}, {
    owner: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    reference: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
}>;
export type OwnedObjectRef = Infer<typeof OwnedObjectRef>;
export declare const TransactionEffects: import("superstruct").Struct<{
    status: {
        status: "success" | "failure";
        error?: string | undefined;
    };
    transactionDigest: string;
    gasUsed: {
        storageRebate: number;
        computationCost: number;
        storageCost: number;
    };
    gasObject: {
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
    sharedObjects?: {
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined;
    created?: {
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined;
    mutated?: {
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined;
    unwrapped?: {
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined;
    deleted?: {
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined;
    wrapped?: {
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined;
    events?: ({
        moveEvent: {
            type: string;
            fields: Record<string, any>;
            sender: string;
            packageId: string;
            transactionModule: string;
            bcs: string;
        };
    } | {
        publish: {
            sender: string;
            packageId: string;
            digest?: string | undefined;
            version?: number | undefined;
        };
    } | {
        coinBalanceChange: {
            version: number;
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            amount: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            changeType: "Pay" | "Gas" | "Receive";
            coinType: string;
            coinObjectId: string;
        };
    } | {
        transferObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        mutateObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        deleteObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
        };
    } | {
        newObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        epochChange: number | bigint;
    } | {
        checkpoint: number | bigint;
    })[] | undefined;
    dependencies?: string[] | undefined;
}, {
    /** The status of the execution */
    status: import("superstruct").Struct<{
        status: "success" | "failure";
        error?: string | undefined;
    }, {
        status: import("superstruct").Struct<"success" | "failure", null>;
        error: import("superstruct").Struct<string | undefined, null>;
    }>;
    gasUsed: import("superstruct").Struct<{
        storageRebate: number;
        computationCost: number;
        storageCost: number;
    }, {
        computationCost: import("superstruct").Struct<number, null>;
        storageCost: import("superstruct").Struct<number, null>;
        storageRebate: import("superstruct").Struct<number, null>;
    }>;
    /** The object references of the shared objects used in this transaction. Empty if no shared objects were used. */
    sharedObjects: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined, import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    /** The transaction digest */
    transactionDigest: import("superstruct").Struct<string, null>;
    /** ObjectRef and owner of new objects created */
    created: import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined, import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>>;
    /** ObjectRef and owner of mutated objects, including gas object */
    mutated: import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined, import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>>;
    /**
     * ObjectRef and owner of objects that are unwrapped in this transaction.
     * Unwrapped objects are objects that were wrapped into other objects in the past,
     * and just got extracted out.
     */
    unwrapped: import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[] | undefined, import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>>;
    /** Object Refs of objects now deleted (the old refs) */
    deleted: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined, import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    /** Object refs of objects now wrapped in other objects */
    wrapped: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }[] | undefined, import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>>;
    /**
     * The updated gas object reference. Have a dedicated field for convenient access.
     * It's also included in mutated.
     */
    gasObject: import("superstruct").Struct<{
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
    /** The events emitted during execution. Note that only successful transactions emit events */
    events: import("superstruct").Struct<({
        moveEvent: {
            type: string;
            fields: Record<string, any>;
            sender: string;
            packageId: string;
            transactionModule: string;
            bcs: string;
        };
    } | {
        publish: {
            sender: string;
            packageId: string;
            digest?: string | undefined;
            version?: number | undefined;
        };
    } | {
        coinBalanceChange: {
            version: number;
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            amount: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            changeType: "Pay" | "Gas" | "Receive";
            coinType: string;
            coinObjectId: string;
        };
    } | {
        transferObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        mutateObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        deleteObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
        };
    } | {
        newObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        epochChange: number | bigint;
    } | {
        checkpoint: number | bigint;
    })[] | undefined, import("superstruct").Struct<{
        moveEvent: {
            type: string;
            fields: Record<string, any>;
            sender: string;
            packageId: string;
            transactionModule: string;
            bcs: string;
        };
    } | {
        publish: {
            sender: string;
            packageId: string;
            digest?: string | undefined;
            version?: number | undefined;
        };
    } | {
        coinBalanceChange: {
            version: number;
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            amount: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            changeType: "Pay" | "Gas" | "Receive";
            coinType: string;
            coinObjectId: string;
        };
    } | {
        transferObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        mutateObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        deleteObject: {
            objectId: string;
            version: number;
            sender: string;
            packageId: string;
            transactionModule: string;
        };
    } | {
        newObject: {
            objectId: string;
            version: number;
            recipient: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            sender: string;
            packageId: string;
            transactionModule: string;
            objectType: string;
        };
    } | {
        epochChange: number | bigint;
    } | {
        checkpoint: number | bigint;
    }, null>>;
    /** The set of transaction digests this transaction depends on */
    dependencies: import("superstruct").Struct<string[] | undefined, import("superstruct").Struct<string, null>>;
}>;
export type TransactionEffects = Infer<typeof TransactionEffects>;
export declare const DevInspectResults: import("superstruct").Struct<{
    effects: {
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    };
    results: {
        Ok: [number, {
            mutableReferenceOutputs?: [number, number[], string][] | undefined;
            returnValues?: [number[], string][] | undefined;
        }][];
    } | {
        Err: string;
    };
}, {
    effects: import("superstruct").Struct<{
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    }, {
        /** The status of the execution */
        status: import("superstruct").Struct<{
            status: "success" | "failure";
            error?: string | undefined;
        }, {
            status: import("superstruct").Struct<"success" | "failure", null>;
            error: import("superstruct").Struct<string | undefined, null>;
        }>;
        gasUsed: import("superstruct").Struct<{
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        }, {
            computationCost: import("superstruct").Struct<number, null>;
            storageCost: import("superstruct").Struct<number, null>;
            storageRebate: import("superstruct").Struct<number, null>;
        }>;
        /** The object references of the shared objects used in this transaction. Empty if no shared objects were used. */
        sharedObjects: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** The transaction digest */
        transactionDigest: import("superstruct").Struct<string, null>;
        /** ObjectRef and owner of new objects created */
        created: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** ObjectRef and owner of mutated objects, including gas object */
        mutated: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /**
         * ObjectRef and owner of objects that are unwrapped in this transaction.
         * Unwrapped objects are objects that were wrapped into other objects in the past,
         * and just got extracted out.
         */
        unwrapped: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** Object Refs of objects now deleted (the old refs) */
        deleted: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** Object refs of objects now wrapped in other objects */
        wrapped: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /**
         * The updated gas object reference. Have a dedicated field for convenient access.
         * It's also included in mutated.
         */
        gasObject: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>;
        /** The events emitted during execution. Note that only successful transactions emit events */
        events: import("superstruct").Struct<({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined, import("superstruct").Struct<{
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        }, null>>;
        /** The set of transaction digests this transaction depends on */
        dependencies: import("superstruct").Struct<string[] | undefined, import("superstruct").Struct<string, null>>;
    }>;
    results: import("superstruct").Struct<{
        Ok: [number, {
            mutableReferenceOutputs?: [number, number[], string][] | undefined;
            returnValues?: [number[], string][] | undefined;
        }][];
    } | {
        Err: string;
    }, null>;
}>;
export type DevInspectResults = Infer<typeof DevInspectResults>;
export declare const SuiTransactionAuthSignersResponse: import("superstruct").Struct<{
    signers: string[];
}, {
    signers: import("superstruct").Struct<string[], import("superstruct").Struct<string, null>>;
}>;
export type SuiTransactionAuthSignersResponse = Infer<typeof SuiTransactionAuthSignersResponse>;
export declare const SuiCertifiedTransactionEffects: import("superstruct").Struct<{
    authSignInfo: {
        epoch: number;
        signature: string | string[];
        signers_map: number[];
    };
    effects: {
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    };
    transactionEffectsDigest: string;
}, {
    transactionEffectsDigest: import("superstruct").Struct<string, null>;
    authSignInfo: import("superstruct").Struct<{
        epoch: number;
        signature: string | string[];
        signers_map: number[];
    }, {
        epoch: import("superstruct").Struct<number, null>;
        signature: import("superstruct").Struct<string | string[], null>;
        signers_map: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
    }>;
    effects: import("superstruct").Struct<{
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    }, {
        /** The status of the execution */
        status: import("superstruct").Struct<{
            status: "success" | "failure";
            error?: string | undefined;
        }, {
            status: import("superstruct").Struct<"success" | "failure", null>;
            error: import("superstruct").Struct<string | undefined, null>;
        }>;
        gasUsed: import("superstruct").Struct<{
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        }, {
            computationCost: import("superstruct").Struct<number, null>;
            storageCost: import("superstruct").Struct<number, null>;
            storageRebate: import("superstruct").Struct<number, null>;
        }>;
        /** The object references of the shared objects used in this transaction. Empty if no shared objects were used. */
        sharedObjects: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** The transaction digest */
        transactionDigest: import("superstruct").Struct<string, null>;
        /** ObjectRef and owner of new objects created */
        created: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** ObjectRef and owner of mutated objects, including gas object */
        mutated: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /**
         * ObjectRef and owner of objects that are unwrapped in this transaction.
         * Unwrapped objects are objects that were wrapped into other objects in the past,
         * and just got extracted out.
         */
        unwrapped: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** Object Refs of objects now deleted (the old refs) */
        deleted: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** Object refs of objects now wrapped in other objects */
        wrapped: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /**
         * The updated gas object reference. Have a dedicated field for convenient access.
         * It's also included in mutated.
         */
        gasObject: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>;
        /** The events emitted during execution. Note that only successful transactions emit events */
        events: import("superstruct").Struct<({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined, import("superstruct").Struct<{
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        }, null>>;
        /** The set of transaction digests this transaction depends on */
        dependencies: import("superstruct").Struct<string[] | undefined, import("superstruct").Struct<string, null>>;
    }>;
}>;
export declare const SuiExecuteTransactionResponse: import("superstruct").Struct<{
    TxCert: {
        certificate: {
            data: {
                sender: string;
                gasPayment: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                gasBudget: number;
                transactions: ({
                    TransferObject: {
                        recipient: string;
                        objectRef: {
                            digest: string;
                            objectId: string;
                            version: number;
                        };
                    };
                } | {
                    Publish: {
                        disassembled: Record<string, string>;
                    };
                } | {
                    Call: {
                        function: string;
                        package: {
                            digest: string;
                            objectId: string;
                            version: number;
                        };
                        module: string;
                        arguments: unknown[];
                        typeArguments?: string[] | undefined;
                    };
                } | {
                    TransferSui: {
                        recipient: string;
                        amount: number | null;
                    };
                } | {
                    ChangeEpoch: {
                        epoch: number;
                        storage_charge: number;
                        computation_charge: number;
                    };
                } | {
                    Pay: {
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                        recipients: string[];
                        amounts: number[];
                    };
                } | {
                    PaySui: {
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                        recipients: string[];
                        amounts: number[];
                    };
                } | {
                    PayAllSui: {
                        recipient: string;
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                    };
                })[];
                gasPrice?: number | undefined;
            };
            txSignature: string;
            transactionDigest: string;
            authSignInfo: {
                epoch: number;
                signature: string | string[];
                signers_map: number[];
            };
        };
    };
} | {
    EffectsCert: {
        effects: {
            authSignInfo: {
                epoch: number;
                signature: string | string[];
                signers_map: number[];
            };
            effects: {
                status: {
                    status: "success" | "failure";
                    error?: string | undefined;
                };
                transactionDigest: string;
                gasUsed: {
                    storageRebate: number;
                    computationCost: number;
                    storageCost: number;
                };
                gasObject: {
                    owner: {
                        AddressOwner: string;
                    } | {
                        ObjectOwner: string;
                    } | {
                        Shared: {
                            initial_shared_version: number;
                        };
                    } | "Immutable";
                    reference: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
                sharedObjects?: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[] | undefined;
                created?: {
                    owner: {
                        AddressOwner: string;
                    } | {
                        ObjectOwner: string;
                    } | {
                        Shared: {
                            initial_shared_version: number;
                        };
                    } | "Immutable";
                    reference: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                }[] | undefined;
                mutated?: {
                    owner: {
                        AddressOwner: string;
                    } | {
                        ObjectOwner: string;
                    } | {
                        Shared: {
                            initial_shared_version: number;
                        };
                    } | "Immutable";
                    reference: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                }[] | undefined;
                unwrapped?: {
                    owner: {
                        AddressOwner: string;
                    } | {
                        ObjectOwner: string;
                    } | {
                        Shared: {
                            initial_shared_version: number;
                        };
                    } | "Immutable";
                    reference: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                }[] | undefined;
                deleted?: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[] | undefined;
                wrapped?: {
                    digest: string;
                    objectId: string;
                    version: number;
                }[] | undefined;
                events?: ({
                    moveEvent: {
                        type: string;
                        fields: Record<string, any>;
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                        bcs: string;
                    };
                } | {
                    publish: {
                        sender: string;
                        packageId: string;
                        digest?: string | undefined;
                        version?: number | undefined;
                    };
                } | {
                    coinBalanceChange: {
                        version: number;
                        owner: {
                            AddressOwner: string;
                        } | {
                            ObjectOwner: string;
                        } | {
                            Shared: {
                                initial_shared_version: number;
                            };
                        } | "Immutable";
                        amount: number;
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                        changeType: "Pay" | "Gas" | "Receive";
                        coinType: string;
                        coinObjectId: string;
                    };
                } | {
                    transferObject: {
                        objectId: string;
                        version: number;
                        recipient: {
                            AddressOwner: string;
                        } | {
                            ObjectOwner: string;
                        } | {
                            Shared: {
                                initial_shared_version: number;
                            };
                        } | "Immutable";
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                        objectType: string;
                    };
                } | {
                    mutateObject: {
                        objectId: string;
                        version: number;
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                        objectType: string;
                    };
                } | {
                    deleteObject: {
                        objectId: string;
                        version: number;
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                    };
                } | {
                    newObject: {
                        objectId: string;
                        version: number;
                        recipient: {
                            AddressOwner: string;
                        } | {
                            ObjectOwner: string;
                        } | {
                            Shared: {
                                initial_shared_version: number;
                            };
                        } | "Immutable";
                        sender: string;
                        packageId: string;
                        transactionModule: string;
                        objectType: string;
                    };
                } | {
                    epochChange: number | bigint;
                } | {
                    checkpoint: number | bigint;
                })[] | undefined;
                dependencies?: string[] | undefined;
            };
            transactionEffectsDigest: string;
        };
        certificate: {
            data: {
                sender: string;
                gasPayment: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
                gasBudget: number;
                transactions: ({
                    TransferObject: {
                        recipient: string;
                        objectRef: {
                            digest: string;
                            objectId: string;
                            version: number;
                        };
                    };
                } | {
                    Publish: {
                        disassembled: Record<string, string>;
                    };
                } | {
                    Call: {
                        function: string;
                        package: {
                            digest: string;
                            objectId: string;
                            version: number;
                        };
                        module: string;
                        arguments: unknown[];
                        typeArguments?: string[] | undefined;
                    };
                } | {
                    TransferSui: {
                        recipient: string;
                        amount: number | null;
                    };
                } | {
                    ChangeEpoch: {
                        epoch: number;
                        storage_charge: number;
                        computation_charge: number;
                    };
                } | {
                    Pay: {
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                        recipients: string[];
                        amounts: number[];
                    };
                } | {
                    PaySui: {
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                        recipients: string[];
                        amounts: number[];
                    };
                } | {
                    PayAllSui: {
                        recipient: string;
                        coins: {
                            digest: string;
                            objectId: string;
                            version: number;
                        }[];
                    };
                })[];
                gasPrice?: number | undefined;
            };
            txSignature: string;
            transactionDigest: string;
            authSignInfo: {
                epoch: number;
                signature: string | string[];
                signers_map: number[];
            };
        };
        confirmed_local_execution: boolean;
    };
}, null>;
export type SuiExecuteTransactionResponse = Infer<typeof SuiExecuteTransactionResponse>;
export type GatewayTxSeqNumber = number;
export declare const GetTxnDigestsResponse: import("superstruct").Struct<string[], import("superstruct").Struct<string, null>>;
export type GetTxnDigestsResponse = Infer<typeof GetTxnDigestsResponse>;
export declare const PaginatedTransactionDigests: import("superstruct").Struct<{
    data: string[];
    nextCursor: string | null;
}, {
    data: import("superstruct").Struct<string[], import("superstruct").Struct<string, null>>;
    nextCursor: import("superstruct").Struct<string | null, null>;
}>;
export type PaginatedTransactionDigests = Infer<typeof PaginatedTransactionDigests>;
export type TransactionQuery = 'All' | {
    MoveFunction: {
        package: ObjectId;
        module: string | null;
        function: string | null;
    };
} | {
    InputObject: ObjectId;
} | {
    MutatedObject: ObjectId;
} | {
    FromAddress: SuiAddress;
} | {
    ToAddress: SuiAddress;
};
export type EmptySignInfo = object;
export type AuthorityName = string;
export declare const TransactionBytes: import("superstruct").Struct<{
    txBytes: string;
    gas: {
        digest: string;
        objectId: string;
        version: number;
    };
    inputObjects: unknown;
}, {
    txBytes: import("superstruct").Struct<string, null>;
    gas: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
    inputObjects: import("superstruct").Struct<unknown, null>;
}>;
export declare const SuiParsedMergeCoinResponse: import("superstruct").Struct<{
    updatedCoin: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
    updatedGas: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
}, {
    updatedCoin: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
    updatedGas: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
}>;
export type SuiParsedMergeCoinResponse = Infer<typeof SuiParsedMergeCoinResponse>;
export declare const SuiParsedSplitCoinResponse: import("superstruct").Struct<{
    updatedCoin: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
    updatedGas: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
    newCoins: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[];
}, {
    updatedCoin: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
    newCoins: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[], import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>>;
    updatedGas: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
}>;
export type SuiParsedSplitCoinResponse = Infer<typeof SuiParsedSplitCoinResponse>;
export declare const SuiPackage: import("superstruct").Struct<{
    digest: string;
    objectId: string;
    version: number;
}, {
    digest: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
}>;
export declare const SuiParsedPublishResponse: import("superstruct").Struct<{
    package: {
        digest: string;
        objectId: string;
        version: number;
    };
    updatedGas: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    };
    createdObjects: {
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[];
}, {
    createdObjects: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }[], import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>>;
    package: import("superstruct").Struct<{
        digest: string;
        objectId: string;
        version: number;
    }, {
        digest: import("superstruct").Struct<string, null>;
        objectId: import("superstruct").Struct<string, null>;
        version: import("superstruct").Struct<number, null>;
    }>;
    updatedGas: import("superstruct").Struct<{
        data: {
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        };
        owner: {
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable";
        previousTransaction: string;
        storageRebate: number;
        reference: {
            digest: string;
            objectId: string;
            version: number;
        };
    }, {
        data: import("superstruct").Struct<{
            type: string;
            fields: Record<string, any>;
            dataType: "moveObject";
            has_public_transfer?: boolean | undefined;
        } | {
            disassembled: Record<string, string>;
            dataType: "package";
        }, null>;
        owner: import("superstruct").Struct<{
            AddressOwner: string;
        } | {
            ObjectOwner: string;
        } | {
            Shared: {
                initial_shared_version: number;
            };
        } | "Immutable", null>;
        previousTransaction: import("superstruct").Struct<string, null>;
        storageRebate: import("superstruct").Struct<number, null>;
        reference: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>;
    }>;
}>;
export type SuiParsedPublishResponse = Infer<typeof SuiParsedPublishResponse>;
export declare const SuiParsedTransactionResponse: import("superstruct").Struct<{
    SplitCoin: {
        updatedCoin: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        updatedGas: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        newCoins: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[];
    };
} | {
    MergeCoin: {
        updatedCoin: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        updatedGas: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
    };
} | {
    Publish: {
        package: {
            digest: string;
            objectId: string;
            version: number;
        };
        updatedGas: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        createdObjects: {
            data: {
                type: string;
                fields: Record<string, any>;
                dataType: "moveObject";
                has_public_transfer?: boolean | undefined;
            } | {
                disassembled: Record<string, string>;
                dataType: "package";
            };
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            previousTransaction: string;
            storageRebate: number;
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[];
    };
}, null>;
export type SuiParsedTransactionResponse = Infer<typeof SuiParsedTransactionResponse>;
export declare const SuiTransactionResponse: import("superstruct").Struct<{
    effects: {
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    };
    certificate: {
        data: {
            sender: string;
            gasPayment: {
                digest: string;
                objectId: string;
                version: number;
            };
            gasBudget: number;
            transactions: ({
                TransferObject: {
                    recipient: string;
                    objectRef: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
            } | {
                Publish: {
                    disassembled: Record<string, string>;
                };
            } | {
                Call: {
                    function: string;
                    package: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                    module: string;
                    arguments: unknown[];
                    typeArguments?: string[] | undefined;
                };
            } | {
                TransferSui: {
                    recipient: string;
                    amount: number | null;
                };
            } | {
                ChangeEpoch: {
                    epoch: number;
                    storage_charge: number;
                    computation_charge: number;
                };
            } | {
                Pay: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PaySui: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PayAllSui: {
                    recipient: string;
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                };
            })[];
            gasPrice?: number | undefined;
        };
        txSignature: string;
        transactionDigest: string;
        authSignInfo: {
            epoch: number;
            signature: string | string[];
            signers_map: number[];
        };
    };
    timestamp_ms: number | null;
    parsed_data: {
        SplitCoin: {
            updatedCoin: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            newCoins: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            }[];
        };
    } | {
        MergeCoin: {
            updatedCoin: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        };
    } | {
        Publish: {
            package: {
                digest: string;
                objectId: string;
                version: number;
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            createdObjects: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            }[];
        };
    } | null;
}, {
    certificate: import("superstruct").Struct<{
        data: {
            sender: string;
            gasPayment: {
                digest: string;
                objectId: string;
                version: number;
            };
            gasBudget: number;
            transactions: ({
                TransferObject: {
                    recipient: string;
                    objectRef: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
            } | {
                Publish: {
                    disassembled: Record<string, string>;
                };
            } | {
                Call: {
                    function: string;
                    package: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                    module: string;
                    arguments: unknown[];
                    typeArguments?: string[] | undefined;
                };
            } | {
                TransferSui: {
                    recipient: string;
                    amount: number | null;
                };
            } | {
                ChangeEpoch: {
                    epoch: number;
                    storage_charge: number;
                    computation_charge: number;
                };
            } | {
                Pay: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PaySui: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PayAllSui: {
                    recipient: string;
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                };
            })[];
            gasPrice?: number | undefined;
        };
        txSignature: string;
        transactionDigest: string;
        authSignInfo: {
            epoch: number;
            signature: string | string[];
            signers_map: number[];
        };
    }, {
        transactionDigest: import("superstruct").Struct<string, null>;
        data: import("superstruct").Struct<{
            sender: string;
            gasPayment: {
                digest: string;
                objectId: string;
                version: number;
            };
            gasBudget: number;
            transactions: ({
                TransferObject: {
                    recipient: string;
                    objectRef: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
            } | {
                Publish: {
                    disassembled: Record<string, string>;
                };
            } | {
                Call: {
                    function: string;
                    package: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                    module: string;
                    arguments: unknown[];
                    typeArguments?: string[] | undefined;
                };
            } | {
                TransferSui: {
                    recipient: string;
                    amount: number | null;
                };
            } | {
                ChangeEpoch: {
                    epoch: number;
                    storage_charge: number;
                    computation_charge: number;
                };
            } | {
                Pay: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PaySui: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PayAllSui: {
                    recipient: string;
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                };
            })[];
            gasPrice?: number | undefined;
        }, {
            transactions: import("superstruct").Struct<({
                TransferObject: {
                    recipient: string;
                    objectRef: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
            } | {
                Publish: {
                    disassembled: Record<string, string>;
                };
            } | {
                Call: {
                    function: string;
                    package: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                    module: string;
                    arguments: unknown[];
                    typeArguments?: string[] | undefined;
                };
            } | {
                TransferSui: {
                    recipient: string;
                    amount: number | null;
                };
            } | {
                ChangeEpoch: {
                    epoch: number;
                    storage_charge: number;
                    computation_charge: number;
                };
            } | {
                Pay: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PaySui: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PayAllSui: {
                    recipient: string;
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                };
            })[], import("superstruct").Struct<{
                TransferObject: {
                    recipient: string;
                    objectRef: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                };
            } | {
                Publish: {
                    disassembled: Record<string, string>;
                };
            } | {
                Call: {
                    function: string;
                    package: {
                        digest: string;
                        objectId: string;
                        version: number;
                    };
                    module: string;
                    arguments: unknown[];
                    typeArguments?: string[] | undefined;
                };
            } | {
                TransferSui: {
                    recipient: string;
                    amount: number | null;
                };
            } | {
                ChangeEpoch: {
                    epoch: number;
                    storage_charge: number;
                    computation_charge: number;
                };
            } | {
                Pay: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PaySui: {
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                    recipients: string[];
                    amounts: number[];
                };
            } | {
                PayAllSui: {
                    recipient: string;
                    coins: {
                        digest: string;
                        objectId: string;
                        version: number;
                    }[];
                };
            }, null>>;
            sender: import("superstruct").Struct<string, null>;
            gasPayment: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
            gasPrice: import("superstruct").Struct<number | undefined, null>;
            gasBudget: import("superstruct").Struct<number, null>;
        }>;
        txSignature: import("superstruct").Struct<string, null>;
        authSignInfo: import("superstruct").Struct<{
            epoch: number;
            signature: string | string[];
            signers_map: number[];
        }, {
            epoch: import("superstruct").Struct<number, null>;
            signature: import("superstruct").Struct<string | string[], null>;
            signers_map: import("superstruct").Struct<number[], import("superstruct").Struct<number, null>>;
        }>;
    }>;
    effects: import("superstruct").Struct<{
        status: {
            status: "success" | "failure";
            error?: string | undefined;
        };
        transactionDigest: string;
        gasUsed: {
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        };
        gasObject: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        };
        sharedObjects?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        created?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        mutated?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        unwrapped?: {
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined;
        deleted?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        wrapped?: {
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined;
        events?: ({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined;
        dependencies?: string[] | undefined;
    }, {
        /** The status of the execution */
        status: import("superstruct").Struct<{
            status: "success" | "failure";
            error?: string | undefined;
        }, {
            status: import("superstruct").Struct<"success" | "failure", null>;
            error: import("superstruct").Struct<string | undefined, null>;
        }>;
        gasUsed: import("superstruct").Struct<{
            storageRebate: number;
            computationCost: number;
            storageCost: number;
        }, {
            computationCost: import("superstruct").Struct<number, null>;
            storageCost: import("superstruct").Struct<number, null>;
            storageRebate: import("superstruct").Struct<number, null>;
        }>;
        /** The object references of the shared objects used in this transaction. Empty if no shared objects were used. */
        sharedObjects: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** The transaction digest */
        transactionDigest: import("superstruct").Struct<string, null>;
        /** ObjectRef and owner of new objects created */
        created: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** ObjectRef and owner of mutated objects, including gas object */
        mutated: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /**
         * ObjectRef and owner of objects that are unwrapped in this transaction.
         * Unwrapped objects are objects that were wrapped into other objects in the past,
         * and just got extracted out.
         */
        unwrapped: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }[] | undefined, import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>>;
        /** Object Refs of objects now deleted (the old refs) */
        deleted: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /** Object refs of objects now wrapped in other objects */
        wrapped: import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }[] | undefined, import("superstruct").Struct<{
            digest: string;
            objectId: string;
            version: number;
        }, {
            digest: import("superstruct").Struct<string, null>;
            objectId: import("superstruct").Struct<string, null>;
            version: import("superstruct").Struct<number, null>;
        }>>;
        /**
         * The updated gas object reference. Have a dedicated field for convenient access.
         * It's also included in mutated.
         */
        gasObject: import("superstruct").Struct<{
            owner: {
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable";
            reference: {
                digest: string;
                objectId: string;
                version: number;
            };
        }, {
            owner: import("superstruct").Struct<{
                AddressOwner: string;
            } | {
                ObjectOwner: string;
            } | {
                Shared: {
                    initial_shared_version: number;
                };
            } | "Immutable", null>;
            reference: import("superstruct").Struct<{
                digest: string;
                objectId: string;
                version: number;
            }, {
                digest: import("superstruct").Struct<string, null>;
                objectId: import("superstruct").Struct<string, null>;
                version: import("superstruct").Struct<number, null>;
            }>;
        }>;
        /** The events emitted during execution. Note that only successful transactions emit events */
        events: import("superstruct").Struct<({
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        })[] | undefined, import("superstruct").Struct<{
            moveEvent: {
                type: string;
                fields: Record<string, any>;
                sender: string;
                packageId: string;
                transactionModule: string;
                bcs: string;
            };
        } | {
            publish: {
                sender: string;
                packageId: string;
                digest?: string | undefined;
                version?: number | undefined;
            };
        } | {
            coinBalanceChange: {
                version: number;
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                amount: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                changeType: "Pay" | "Gas" | "Receive";
                coinType: string;
                coinObjectId: string;
            };
        } | {
            transferObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            mutateObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            deleteObject: {
                objectId: string;
                version: number;
                sender: string;
                packageId: string;
                transactionModule: string;
            };
        } | {
            newObject: {
                objectId: string;
                version: number;
                recipient: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                sender: string;
                packageId: string;
                transactionModule: string;
                objectType: string;
            };
        } | {
            epochChange: number | bigint;
        } | {
            checkpoint: number | bigint;
        }, null>>;
        /** The set of transaction digests this transaction depends on */
        dependencies: import("superstruct").Struct<string[] | undefined, import("superstruct").Struct<string, null>>;
    }>;
    timestamp_ms: import("superstruct").Struct<number | null, null>;
    parsed_data: import("superstruct").Struct<{
        SplitCoin: {
            updatedCoin: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            newCoins: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            }[];
        };
    } | {
        MergeCoin: {
            updatedCoin: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
        };
    } | {
        Publish: {
            package: {
                digest: string;
                objectId: string;
                version: number;
            };
            updatedGas: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            };
            createdObjects: {
                data: {
                    type: string;
                    fields: Record<string, any>;
                    dataType: "moveObject";
                    has_public_transfer?: boolean | undefined;
                } | {
                    disassembled: Record<string, string>;
                    dataType: "package";
                };
                owner: {
                    AddressOwner: string;
                } | {
                    ObjectOwner: string;
                } | {
                    Shared: {
                        initial_shared_version: number;
                    };
                } | "Immutable";
                previousTransaction: string;
                storageRebate: number;
                reference: {
                    digest: string;
                    objectId: string;
                    version: number;
                };
            }[];
        };
    } | null, null>;
}>;
export type SuiTransactionResponse = Infer<typeof SuiTransactionResponse>;
export declare function getCertifiedTransaction(tx: SuiTransactionResponse | SuiExecuteTransactionResponse): CertifiedTransaction | undefined;
export declare function getTransactionDigest(tx: CertifiedTransaction | SuiTransactionResponse | SuiExecuteTransactionResponse): TransactionDigest;
export declare function getTransactionSignature(tx: CertifiedTransaction): string;
export declare function getTransactionAuthorityQuorumSignInfo(tx: CertifiedTransaction): AuthorityQuorumSignInfo;
export declare function getTransactionData(tx: CertifiedTransaction): SuiTransactionData;
export declare function getTransactionSender(tx: CertifiedTransaction): SuiAddress;
export declare function getTransactionGasObject(tx: CertifiedTransaction): SuiObjectRef;
export declare function getTransactionGasPrice(tx: CertifiedTransaction): number | undefined;
export declare function getTransactionGasBudget(tx: CertifiedTransaction): number;
export declare function getTransferObjectTransaction(data: SuiTransactionKind): TransferObject | undefined;
export declare function getPublishTransaction(data: SuiTransactionKind): SuiMovePackage | undefined;
export declare function getMoveCallTransaction(data: SuiTransactionKind): MoveCall | undefined;
export declare function getTransferSuiTransaction(data: SuiTransactionKind): SuiTransferSui | undefined;
export declare function getPayTransaction(data: SuiTransactionKind): Pay | undefined;
export declare function getPaySuiTransaction(data: SuiTransactionKind): PaySui | undefined;
export declare function getPayAllSuiTransaction(data: SuiTransactionKind): PayAllSui | undefined;
export declare function getChangeEpochTransaction(data: SuiTransactionKind): SuiChangeEpoch | undefined;
export declare function getTransactions(data: CertifiedTransaction): SuiTransactionKind[];
export declare function getTransferSuiAmount(data: SuiTransactionKind): bigint | null;
export declare function getTransactionKindName(data: SuiTransactionKind): TransactionKindName;
export declare function getExecutionStatusType(data: SuiTransactionResponse | SuiExecuteTransactionResponse): ExecutionStatusType | undefined;
export declare function getExecutionStatus(data: SuiTransactionResponse | SuiExecuteTransactionResponse): ExecutionStatus | undefined;
export declare function getExecutionStatusError(data: SuiTransactionResponse | SuiExecuteTransactionResponse): string | undefined;
export declare function getExecutionStatusGasSummary(data: SuiTransactionResponse | SuiExecuteTransactionResponse | TransactionEffects): GasCostSummary | undefined;
export declare function getTotalGasUsed(data: SuiTransactionResponse | SuiExecuteTransactionResponse | TransactionEffects): number | undefined;
export declare function getTransactionEffects(data: SuiExecuteTransactionResponse | SuiTransactionResponse): TransactionEffects | undefined;
export declare function getEvents(data: SuiExecuteTransactionResponse | SuiTransactionResponse): SuiEvent[] | undefined;
export declare function getCreatedObjects(data: SuiExecuteTransactionResponse | SuiTransactionResponse): OwnedObjectRef[] | undefined;
export declare function getTimestampFromTransactionResponse(data: SuiExecuteTransactionResponse | SuiTransactionResponse): number | undefined;
export declare function getParsedSplitCoinResponse(data: SuiTransactionResponse): SuiParsedSplitCoinResponse | undefined;
export declare function getParsedMergeCoinResponse(data: SuiTransactionResponse): SuiParsedMergeCoinResponse | undefined;
export declare function getParsedPublishResponse(data: SuiTransactionResponse): SuiParsedPublishResponse | undefined;
/**
 * Get the updated coin after a merge.
 * @param data the response for executing a merge coin transaction
 * @returns the updated state of the primary coin after the merge
 */
export declare function getCoinAfterMerge(data: SuiTransactionResponse): SuiObject | undefined;
/**
 * Get the updated coin after a split.
 * @param data the response for executing a Split coin transaction
 * @returns the updated state of the original coin object used for the split
 */
export declare function getCoinAfterSplit(data: SuiTransactionResponse): SuiObject | undefined;
/**
 * Get the newly created coin after a split.
 * @param data the response for executing a Split coin transaction
 * @returns the updated state of the original coin object used for the split
 */
export declare function getNewlyCreatedCoinsAfterSplit(data: SuiTransactionResponse): SuiObject[] | undefined;
/**
 * Get the newly created coin refs after a split.
 */
export declare function getNewlyCreatedCoinRefsAfterSplit(data: SuiTransactionResponse | SuiExecuteTransactionResponse): SuiObjectRef[] | undefined;
