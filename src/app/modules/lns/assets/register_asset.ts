import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

interface TransferAssetProps {
	registerFor: number,
	name: string;
	ttl: number; 
}

// ttl = time to live

export class RegisterAsset extends BaseAsset <TransferAssetProps> {
	public name = 'register';
  public id = 0;

  // Define schema for asset
	public schema = {
    $id: 'lns/register-asset',
		title: 'RegisterAsset transaction asset for lns module',
		type: 'object',
		required: ['registerFor', 'name', 'ttl'],
		properties: {
			registerFor: {
				dataType: 'uint32',
				fieldNumber: 1
			},
			name: {
				dataType: 'string',
				fieldNumber: 2
			},
			ttl: {
				dataType: 'uint32',
				fieldNumber: 3
			}
		},
  };

  public validate({ asset }: ValidateAssetContext<{}>): void {
    // Validate your asset
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		throw new Error('Asset "register" apply hook is not implemented.');
	}
}
