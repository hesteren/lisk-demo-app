/* eslint-disable class-methods-use-this */

import {
    AfterBlockApplyContext,


    AfterGenesisBlockApplyContext, BaseModule,


    BeforeBlockApplyContext, TransactionApplyContext
} from 'lisk-sdk';
import { RegisterAsset } from "./assets/register_asset";

interface LnsAccountProps {
    lns: {
        reverseLookup: Buffer;
        ownNodes: Buffer[];
    }
}

export class LnsModule extends BaseModule {
    public actions = {
        // Example below
        // getBalance: async (params) => this._dataAccess.account.get(params.address).token.balance,
        // getBlockByID: async (params) => this._dataAccess.blocks.get(params.id),
    };
    public reducers = {
        // Example below
        // getBalance: async (
		// 	params: Record<string, unknown>,
		// 	stateStore: StateStore,
		// ): Promise<bigint> => {
		// 	const { address } = params;
		// 	if (!Buffer.isBuffer(address)) {
		// 		throw new Error('Address must be a buffer');
		// 	}
		// 	const account = await stateStore.account.getOrDefault<TokenAccount>(address);
		// 	return account.token.balance;
		// },
    };
    public name = 'lns';
    public transactionAssets = [new RegisterAsset()];
    public events = [
        // Example below
        // 'lns:newBlock',
    ];
    public id = 1000;

    public accountSchema = {
        $id: '/lisk/own-lns-account',
        type: 'object',
        required: ['reverseLookup', 'ownNodes'],
        properties: {
            reverseLookup: {
                fieldNumber: 1,
                dataType: 'bytes'
            },
            ownNodes: {
                fieldNumber: 2,
                type: 'array',
                items: {
                    dataType: 'bytes'
                },
            },
        },
        default: {
            reverseLookup: Buffer.alloc(0),
            ownNodes: []
        },
    };

    // public constructor(genesisConfig: GenesisConfig) {
    //     super(genesisConfig);
    // }

    // Lifecycle hooks
    public async beforeBlockApply(_input: BeforeBlockApplyContext) {
        // Get any data from stateStore using block info, below is an example getting a generator
        // const generatorAddress = getAddressFromPublicKey(_input.block.header.generatorPublicKey);
		// const generator = await _input.stateStore.account.get<TokenAccount>(generatorAddress);
    }

    public async afterBlockApply(_input: AfterBlockApplyContext) {
        // Get any data from stateStore using block info, below is an example getting a generator
        // const generatorAddress = getAddressFromPublicKey(_input.block.header.generatorPublicKey);
		// const generator = await _input.stateStore.account.get<TokenAccount>(generatorAddress);
    }

    public async beforeTransactionApply(_input: TransactionApplyContext) {
        // Get any data from stateStore using transaction info, below is an example
        // const sender = await _input.stateStore.account.getOrDefault<TokenAccount>(_input.transaction.senderAddress);
    }

    public async afterTransactionApply(_input: TransactionApplyContext) {
        // Get any data from stateStore using transaction info, below is an example
        // const sender = await _input.stateStore.account.getOrDefault<TokenAccount>(_input.transaction.senderAddress);
    }

    public async afterGenesisBlockApply(_input: AfterGenesisBlockApplyContext) {
        // Get any data from genesis block, for example get all genesis accounts
        // const genesisAccounts = genesisBlock.header.asset.accounts;
    }
}
