import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

interface RegisterAssetProps {
	registerFor: number,
	name: string;
	ttl: number; 
}

// ttl = time to live

export class RegisterAsset extends BaseAsset <RegisterAssetProps> {
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

  public validate({ asset }: ValidateAssetContext<RegisterAssetProps>): void {
    // Validate your asset
	if (asset.ttl < 60 * 60) {
		throw new Error('TTL must be more than 1 hour');
	}
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		const asset = createDomain(asset);
		const account = stateStore.account.get<LnsAccountProps>(transaction.senderAddress);
	}
}
