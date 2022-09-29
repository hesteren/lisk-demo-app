import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

export class RegisterAsset extends BaseAsset {
	public name = 'register';
  public id = 0;

  // Define schema for asset
	public schema = {
    $id: 'lns/register-asset',
		title: 'RegisterAsset transaction asset for lns module',
		type: 'object',
		required: [],
		properties: {},
  };

  public validate({ asset }: ValidateAssetContext<{}>): void {
    // Validate your asset
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		throw new Error('Asset "register" apply hook is not implemented.');
	}
}