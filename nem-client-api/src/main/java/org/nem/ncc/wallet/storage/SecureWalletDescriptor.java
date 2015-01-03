package org.nem.ncc.wallet.storage;

import org.nem.ncc.storage.SecureStorableEntityDescriptor;
import org.nem.ncc.wallet.*;

/**
 * WalletDescriptor that automatically encrypts and decrypts data using a password.
 */
public class SecureWalletDescriptor
		extends SecureStorableEntityDescriptor<
		StorableWallet,
		WalletName,
		WalletFileExtension,
		WalletPassword,
		WalletDescriptor>
		implements WalletDescriptor {

	/**
	 * Creates a new secure wallet descriptor.
	 *
	 * @param descriptor The underlying descriptor.
	 * @param password The password.
	 */
	public SecureWalletDescriptor(
			final WalletDescriptor descriptor,
			final WalletPassword password) {
		super(descriptor, password);
	}

	@Override
	public WalletName getWalletName() {
		return super.getDescriptor().getWalletName();
	}
}
