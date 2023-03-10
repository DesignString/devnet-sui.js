import { Infer } from 'superstruct';
import { ObjectId, ObjectOwner, SuiAddress, TransactionDigest, SuiJsonValue } from './common';
export declare const BalanceChangeType: import("superstruct").Struct<"Pay" | "Gas" | "Receive", null>;
export type BalanceChangeType = Infer<typeof BalanceChangeType>;
export declare const MoveEvent: import("superstruct").Struct<{
    type: string;
    fields: Record<string, any>;
    sender: string;
    packageId: string;
    transactionModule: string;
    bcs: string;
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    type: import("superstruct").Struct<string, null>;
    fields: import("superstruct").Struct<Record<string, any>, null>;
    bcs: import("superstruct").Struct<string, null>;
}>;
export type MoveEvent = Infer<typeof MoveEvent>;
export declare const PublishEvent: import("superstruct").Struct<{
    sender: string;
    packageId: string;
    digest?: string | undefined;
    version?: number | undefined;
}, {
    sender: import("superstruct").Struct<string, null>;
    packageId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number | undefined, null>;
    digest: import("superstruct").Struct<string | undefined, null>;
}>;
export type PublishEvent = Infer<typeof PublishEvent>;
export declare const CoinBalanceChangeEvent: import("superstruct").Struct<{
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
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    owner: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    changeType: import("superstruct").Struct<"Pay" | "Gas" | "Receive", null>;
    coinType: import("superstruct").Struct<string, null>;
    coinObjectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
    amount: import("superstruct").Struct<number, null>;
}>;
export type CoinBalanceChangeEvent = Infer<typeof CoinBalanceChangeEvent>;
export declare const TransferObjectEvent: import("superstruct").Struct<{
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
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    recipient: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    objectType: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
}>;
export type TransferObjectEvent = Infer<typeof TransferObjectEvent>;
export declare const MutateObjectEvent: import("superstruct").Struct<{
    objectId: string;
    version: number;
    sender: string;
    packageId: string;
    transactionModule: string;
    objectType: string;
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    objectType: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
}>;
export type MutateObjectEvent = Infer<typeof MutateObjectEvent>;
export declare const DeleteObjectEvent: import("superstruct").Struct<{
    objectId: string;
    version: number;
    sender: string;
    packageId: string;
    transactionModule: string;
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
}>;
export type DeleteObjectEvent = Infer<typeof DeleteObjectEvent>;
export declare const NewObjectEvent: import("superstruct").Struct<{
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
}, {
    packageId: import("superstruct").Struct<string, null>;
    transactionModule: import("superstruct").Struct<string, null>;
    sender: import("superstruct").Struct<string, null>;
    recipient: import("superstruct").Struct<{
        AddressOwner: string;
    } | {
        ObjectOwner: string;
    } | {
        Shared: {
            initial_shared_version: number;
        };
    } | "Immutable", null>;
    objectType: import("superstruct").Struct<string, null>;
    objectId: import("superstruct").Struct<string, null>;
    version: import("superstruct").Struct<number, null>;
}>;
export type NewObjectEvent = Infer<typeof NewObjectEvent>;
export declare const EpochChangeEvent: import("superstruct").Struct<number | bigint, null>;
export type EpochChangeEvent = Infer<typeof EpochChangeEvent>;
export declare const CheckpointEvent: import("superstruct").Struct<number | bigint, null>;
export type CheckpointEvent = Infer<typeof EpochChangeEvent>;
export declare const SuiEvent: import("superstruct").Struct<{
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
}, null>;
export type SuiEvent = Infer<typeof SuiEvent>;
export type MoveEventField = {
    path: string;
    value: SuiJsonValue;
};
export type EventQuery = 'All' | {
    Transaction: TransactionDigest;
} | {
    MoveModule: {
        package: ObjectId;
        module: string;
    };
} | {
    MoveEvent: string;
} | {
    EventType: EventType;
} | {
    Sender: SuiAddress;
} | {
    Recipient: ObjectOwner;
} | {
    Object: ObjectId;
} | {
    TimeRange: {
        start_time: number;
        end_time: number;
    };
};
export declare const EventId: import("superstruct").Struct<{
    txSeq: number;
    eventSeq: number;
}, {
    txSeq: import("superstruct").Struct<number, null>;
    eventSeq: import("superstruct").Struct<number, null>;
}>;
export type EventId = Infer<typeof EventId>;
export type EventType = 'MoveEvent' | 'Publish' | 'TransferObject' | 'MutateObject' | 'CoinBalanceChange' | 'DeleteObject' | 'NewObject' | 'EpochChange' | 'Checkpoint';
export type SuiEventFilter = {
    Package: ObjectId;
} | {
    Module: string;
} | {
    MoveEventType: string;
} | {
    MoveEventField: MoveEventField;
} | {
    SenderAddress: SuiAddress;
} | {
    EventType: EventType;
} | {
    All: SuiEventFilter[];
} | {
    Any: SuiEventFilter[];
} | {
    And: [SuiEventFilter, SuiEventFilter];
} | {
    Or: [SuiEventFilter, SuiEventFilter];
};
export declare const SuiEventEnvelope: import("superstruct").Struct<{
    id: {
        txSeq: number;
        eventSeq: number;
    };
    timestamp: number;
    txDigest: string;
    event: {
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
    };
}, {
    timestamp: import("superstruct").Struct<number, null>;
    txDigest: import("superstruct").Struct<string, null>;
    id: import("superstruct").Struct<{
        txSeq: number;
        eventSeq: number;
    }, {
        txSeq: import("superstruct").Struct<number, null>;
        eventSeq: import("superstruct").Struct<number, null>;
    }>;
    event: import("superstruct").Struct<{
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
    }, null>;
}>;
export type SuiEventEnvelope = Infer<typeof SuiEventEnvelope>;
export type SuiEvents = SuiEventEnvelope[];
export declare const PaginatedEvents: import("superstruct").Struct<{
    data: {
        id: {
            txSeq: number;
            eventSeq: number;
        };
        timestamp: number;
        txDigest: string;
        event: {
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
        };
    }[];
    nextCursor: {
        txSeq: number;
        eventSeq: number;
    } | null;
}, {
    data: import("superstruct").Struct<{
        id: {
            txSeq: number;
            eventSeq: number;
        };
        timestamp: number;
        txDigest: string;
        event: {
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
        };
    }[], import("superstruct").Struct<{
        id: {
            txSeq: number;
            eventSeq: number;
        };
        timestamp: number;
        txDigest: string;
        event: {
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
        };
    }, {
        timestamp: import("superstruct").Struct<number, null>;
        txDigest: import("superstruct").Struct<string, null>;
        id: import("superstruct").Struct<{
            txSeq: number;
            eventSeq: number;
        }, {
            txSeq: import("superstruct").Struct<number, null>;
            eventSeq: import("superstruct").Struct<number, null>;
        }>;
        event: import("superstruct").Struct<{
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
        }, null>;
    }>>;
    nextCursor: import("superstruct").Struct<{
        txSeq: number;
        eventSeq: number;
    } | null, null>;
}>;
export type PaginatedEvents = Infer<typeof PaginatedEvents>;
export declare const SubscriptionId: import("superstruct").Struct<number, null>;
export type SubscriptionId = Infer<typeof SubscriptionId>;
export declare const SubscriptionEvent: import("superstruct").Struct<{
    result: {
        id: {
            txSeq: number;
            eventSeq: number;
        };
        timestamp: number;
        txDigest: string;
        event: {
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
        };
    };
    subscription: number;
}, {
    subscription: import("superstruct").Struct<number, null>;
    result: import("superstruct").Struct<{
        id: {
            txSeq: number;
            eventSeq: number;
        };
        timestamp: number;
        txDigest: string;
        event: {
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
        };
    }, {
        timestamp: import("superstruct").Struct<number, null>;
        txDigest: import("superstruct").Struct<string, null>;
        id: import("superstruct").Struct<{
            txSeq: number;
            eventSeq: number;
        }, {
            txSeq: import("superstruct").Struct<number, null>;
            eventSeq: import("superstruct").Struct<number, null>;
        }>;
        event: import("superstruct").Struct<{
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
        }, null>;
    }>;
}>;
export type SubscriptionEvent = Infer<typeof SubscriptionEvent>;
