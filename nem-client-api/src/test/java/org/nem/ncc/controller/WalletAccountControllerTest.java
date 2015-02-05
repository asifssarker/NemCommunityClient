package org.nem.ncc.controller;

import net.minidev.json.JSONObject;
import org.hamcrest.core.IsEqual;
import org.junit.*;
import org.mockito.Mockito;
import org.nem.core.crypto.PrivateKey;
import org.nem.core.model.Address;
import org.nem.core.serialization.MissingRequiredPropertyException;
import org.nem.ncc.addressbook.*;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.services.*;
import org.nem.ncc.test.Utils;
import org.nem.ncc.wallet.*;

public class WalletAccountControllerTest {

	//region addNewAccount

	@Test
	public void canAddNewAccount() {
		// Arrange:
		final JSONObject jsonObject = new JSONObject();
		jsonObject.put("wallet", "n");
		jsonObject.put("password", "p");
		jsonObject.put("label", "l");
		final TestContext context = new TestContext(jsonObject);

		final AccountViewModel accountViewModel = Mockito.mock(AccountViewModel.class);
		Mockito.when(context.accountMapper.toViewModel(Mockito.any(WalletAccount.class))).thenReturn(accountViewModel);

		// Act:
		final AccountViewModel result = context.controller.addNewAccount(context.bag);

		// Assert:
		Assert.assertThat(result, IsEqual.equalTo(accountViewModel));
		Mockito.verify(context.wallet, Mockito.times(1)).addOtherAccount(Mockito.any());
		Mockito.verify(context.walletServices, Mockito.times(1)).open(context.bag);
		Mockito.verify(context.addressBookServices, Mockito.times(1)).open(Mockito.any());
		Mockito.verify(context.addressBook, Mockito.times(1)).contains(Mockito.any());
		Mockito.verify(context.accountMapper, Mockito.times(1)).toViewModel(Mockito.any(WalletAccount.class));
		Mockito.verify(context.addressBook, Mockito.times(1)).addLabel(Mockito.any());
	}

	//endregion

	// TODO 20150131 J-B: why aren't the canAddNewAccountWithLabel and canAddExistingAccountWithKeyAndLabel
	// > tests still valid?

	//region addExistingAccount

	@Test
	public void canAddExistingAccountWithKey() {
		// Arrange:
		final JSONObject jsonObject = new JSONObject();
		jsonObject.put("wallet", "n");
		jsonObject.put("password", "p");
		jsonObject.put("accountKey", "0011223344");
		// TODO 20150131 J-B: should we assert that this label was set?
		// TODO 20150205: BR -> J: sure.
		jsonObject.put("label", "l");
		final TestContext context = new TestContext(jsonObject);

		final WalletAccount walletAccount = new WalletAccount(PrivateKey.fromHexString("0011223344"));
		final AccountViewModel accountViewModel = Mockito.mock(AccountViewModel.class);
		Mockito.when(context.accountMapper.toViewModel(walletAccount)).thenReturn(accountViewModel);

		// Act:
		final AccountViewModel result = context.controller.addExistingAccount(context.bag);

		// Assert:
		Assert.assertThat(result, IsEqual.equalTo(accountViewModel));
		Mockito.verify(context.walletServices, Mockito.times(1)).open(context.bag);
		Mockito.verify(context.wallet, Mockito.times(1)).addOtherAccount(walletAccount);
		Mockito.verify(context.accountMapper, Mockito.times(1)).toViewModel(walletAccount);
		Mockito.verify(context.addressBookServices, Mockito.times(1)).open(Mockito.any());
		Mockito.verify(context.addressBook, Mockito.times(1)).contains(Mockito.eq(walletAccount.getAddress()));
		Mockito.verify(context.addressBook, Mockito.times(1)).addLabel(Mockito.eq(new AccountLabel(walletAccount.getAddress(), "", "l")));
	}

	@Test(expected = MissingRequiredPropertyException.class)
	public void cannotAddExistingAccountWithoutKey() {
		// Arrange:
		final JSONObject jsonObject = new JSONObject();
		jsonObject.put("wallet", "n");
		jsonObject.put("password", "p");
		jsonObject.put("label", "l");
		final TestContext context = new TestContext(jsonObject);

		final WalletAccount walletAccount = new WalletAccount(PrivateKey.fromHexString("0011223344"));
		final AccountViewModel accountViewModel = Mockito.mock(AccountViewModel.class);
		Mockito.when(context.accountMapper.toViewModel(walletAccount)).thenReturn(accountViewModel);

		// Act:
		context.controller.addExistingAccount(context.bag);
	}

	//endregion

	//region setPrimaryAccount / removeAccount

	@Test
	public void setPrimaryAccountDelegatesToServices() {
		// Arrange:
		final Address address = Utils.generateRandomAddress();
		final JSONObject jsonObject = createJsonObjectWithAddress(address);
		final TestContext context = new TestContext(jsonObject);
		final WalletViewModel walletViewModel = Mockito.mock(WalletViewModel.class);
		Mockito.when(context.walletMapper.toViewModel(context.wallet)).thenReturn(walletViewModel);

		// Act:
		final WalletViewModel result = context.controller.setPrimaryAccount(context.bag);

		// Assert:
		Assert.assertThat(result, IsEqual.equalTo(walletViewModel));
		Mockito.verify(context.walletServices, Mockito.times(1)).open(context.bag);
		Mockito.verify(context.wallet, Mockito.times(1)).setPrimaryAccount(address);
		Mockito.verify(context.walletMapper, Mockito.times(1)).toViewModel(context.wallet);
	}

	@Test
	public void removeAccountDelegatesToServices() {
		// Arrange:
		final Address address = Utils.generateRandomAddress();
		final JSONObject jsonObject = createJsonObjectWithAddress(address);
		final TestContext context = new TestContext(jsonObject);
		final WalletViewModel walletViewModel = Mockito.mock(WalletViewModel.class);
		Mockito.when(context.walletMapper.toViewModel(context.wallet)).thenReturn(walletViewModel);

		// Act:
		final WalletViewModel result = context.controller.removeAccount(context.bag);

		// Assert:
		Assert.assertThat(result, IsEqual.equalTo(walletViewModel));
		Mockito.verify(context.walletServices, Mockito.times(1)).open(context.bag);
		Mockito.verify(context.wallet, Mockito.times(1)).removeAccount(address);
		Mockito.verify(context.walletMapper, Mockito.times(1)).toViewModel(context.wallet);
	}

	@Test
	public void removeAccountRemovesLabelFromAddressBook() {
		// Arrange:
		final Address address = Utils.generateRandomAddress();
		final JSONObject jsonObject = createJsonObjectWithAddress(address);
		final TestContext context = new TestContext(jsonObject);
		final WalletViewModel walletViewModel = Mockito.mock(WalletViewModel.class);
		Mockito.when(context.walletMapper.toViewModel(context.wallet)).thenReturn(walletViewModel);
		Mockito.when(context.addressBook.contains(address)).thenReturn(true);

		// Act:
		final WalletViewModel result = context.controller.removeAccount(context.bag);

		// Assert:
		Assert.assertThat(result, IsEqual.equalTo(walletViewModel));
		Mockito.verify(context.addressBookServices, Mockito.times(1)).open(Mockito.any());
		Mockito.verify(context.addressBook, Mockito.times(1)).contains(address);
		Mockito.verify(context.addressBook, Mockito.times(1)).removeLabel(address);
	}

	//endregion

	private static JSONObject createJsonObjectWithAddress(final Address address) {
		final JSONObject jsonObject = new JSONObject();
		jsonObject.put("wallet", "n");
		jsonObject.put("password", "p");
		jsonObject.put("account", address.getEncoded());
		jsonObject.put("label", "l");
		return jsonObject;
	}

	private static class TestContext {
		private final WalletServices walletServices = Mockito.mock(WalletServices.class);
		private final WalletMapper walletMapper = Mockito.mock(WalletMapper.class);
		private final AccountMapper accountMapper = Mockito.mock(AccountMapper.class);
		private final AddressBookServices addressBookServices = Mockito.mock(AddressBookServices.class);
		private final AddressBook addressBook = Mockito.mock(AddressBook.class);
		private final WalletAccountController controller = new WalletAccountController(
				this.walletServices,
				this.walletMapper,
				this.accountMapper,
				this.addressBookServices);

		private final Wallet wallet = Mockito.mock(Wallet.class);
		private final WalletNamePasswordBag bag;

		private TestContext(final JSONObject jsonObject) {
			this.bag = new WalletNamePasswordBag(Utils.createDeserializer(jsonObject));

			Mockito.when(this.walletServices.open(this.bag)).thenReturn(this.wallet);
			Mockito.when(this.addressBookServices.open(Mockito.any())).thenReturn(this.addressBook);
		}
	}
}