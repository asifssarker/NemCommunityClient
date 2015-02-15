define({
	id: 'vi',
	name: 'Tiếng Việt',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: ','
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Ví của bạn chưa được tạo.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Trước khi bạn có thể làm việc với một chiếc ví, nó phải được mở. Để chắc chắn rằng bạn có quyền truy cập vào ví, bạn phải cung cấp mật khẩu cho ví đó.',
			107: 'Ví không chứa tài khoản này',
			108: 'Tài khoản không thể bị xoá. Có vẻ bởi vì tài khoản vẫn còn số dư lón hơn 0 XEM hoặc tài khoản bạn đang cố gắng xoá là tài khoản chính.',
			109: 'Một ví khác có cùng tên đã tồn tại. Hãy chọn một cái tên khác.',
			110: 'Tài khoản này đã có trong ví rồi.',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: 'Không thể gửi thông điệp mã hoá bởi vì người nhận chưa từng thực hiện một giao dịch trước đây.',
			305: 'NEM Infrastructure Server không khả dụng.',
			306: 'Một lỗi nằm ngoài dự tính của nhóm phát triển đã xảy ra. Xin lỗi bạn vì điều này, có thể thử lại sẽ có tác dụng. Nếu không, hãy tạo một issue trong cộng đồng NIS/NCC của NEM.',
			400: 'Một tham số nào đó bị thiếu hoặc không hợp lệ.',
			401: 'Tác vụ này không thể hoàn thành vì khoá bí mật có thể sẽ bị lộ khi được gửi tới một NIS từ xa.',
			404: 'Không tìm thấy tài nguyên được yêu cầu.',
			500: 'Lưu file cấu hình thất bại.',
			600: 'NCC yêu cầu máy chủ NIS phải được boot để gửi và nhận các giao dịch từ NEM cloud. Hãy dùng thực đơn của NCC để boot node cục bộ.',
			601: 'NIS node đã được boot rồi. Không thể boot NIS thêm một lần nữa.',
			602: 'Cannot perform any operations until db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Tài khoản được cung cấp không thoả mãn các tiêu chí cơ bản để được thu hoạch. Phần lớn liên quan tới lượng XEM có trong tài khoản. Việc thu hoạch có thể bắt đầu với ít nhất 1000 XEM.',
			701: 'Deadline được cung cấp đã trôi qua.',
			702: 'Deadline được cung cấp quá xa trong tương lai.',
			703: 'Tài khoản của bạn không có số dư đủ để gửi số lượng XEM này.',
			704: 'Đoạn thông điệp được cung cấp quá lớn để gửi qua NEM. Hãy cố gắng giảm độ dài của thông điệp mà bạn gửi.',
			705: 'Hash của giao dịch đã tồn tại trong cơ sở dữ liệu hoặc trong danh sách những giao dịch chưa được xác nhận.',
			706: 'Không thể xác nhận chữ ký của giao dịch.',
			707: 'Mốc thời gian của giao dịch quá xa trong quá khứ.',
			708: 'Mốc thời gian của giao dịch quá xa về tương lai.',
			709: 'Tài khoản không được biết đến. Một tài khoản cần phải tham gia vào ít nhất một giao dịch (là người gửi hoặc người nhận) để được mạng lưới biết đến.',
			710: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			730: 'Importance transfer transaction (secure harvesting) conflicts with existing transaction.',
			731: 'Secure harvesting account has non zero balance and cannot be used.',
			732: 'Importance transfer rejected. There is already pending importance transfer operation.',
			733: 'Secure harvesting is already active.',
			734: 'Secure harvesting is NOT active. Cannot deactivate.',
			740: 'Transaction is not allowed for multisig account.',
			741: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			742: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			743: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			901: 'Đã xảy ra lỗi trong lúc cài đặt chế độ offline.',
			1000: "Khoá bí mật và khoá công khai mà bạn vừa cung cấp không khớp với nhau.",
			1001: 'Khoá công khai và địa chỉ mà bạn vừa cung cấp không khớp với nhau.',
			1002: 'Địa chỉ không thuộc về mạng lưới chính.'
		},
		common: {
			success: 'Thành công',
			appStatus: {
				nccUnknown: 'Không rõ trạng thái của NCC',
				nccUnavailable: 'Mất kết nối với NCC',
				nccStarting: 'NCC đang khởi động...',
				nisUnknown: 'Không rõ trạng thái của NIS',
				nisUnavailable: 'Mất kết nối với NIS',
				nisStarting: 'NIS đang khởi động...',
				notBooted: 'NIS cần phải được boot. Hãy mở ví của bạn và boot node cục bộ bằng hộp thoại hiện ra hoặc đặt cấu hình thiết lập tự động boot.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Đang boot NIS...',
				nisInfoNotAvailable: 'Thông tin về NIS chưa sẵn sàng. Đang truy xuất thông tin về NIS...',
				synchronizing: 'NIS đang đồng bộ hoá. Đang ở block {{1}}, trễ khoảng {{2}}.',
				daysBehind: {
					0: 'ít hơn 1 ngày',
					1: '1 ngày',
					many: '{{1}} ngày'
				},
				synchronized: 'NIS đã được đồng bộ!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Mật khẩu',
			passwordValidation: 'Mật khẩu không được để trống',
			address: 'Địa chỉ',
			privateLabel: 'Nhãn cá nhân',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			justUse: 'Just use'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION'
		],
		transactionDirections: {
			pending: 'Giao dịch đang chờ xác nhận',
			outgoing: 'Giao dịch gửi đi',
			incoming: 'Giao dịch gửi đến',
			self: 'Giao dịch tự gửi',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: 'Ui chà!',
				caption: 'LỖI {{1}}'
			},
			confirmDefault: {
				yes: 'Có',
				no: 'Không'
			},
			settings: {
				title: 'Thiết lập',
				language: {
					label: 'Ngôn ngữ'
				},
				remoteServer: {
					tabTitle: 'Server từ xa',
					protocol: 'Giao thức',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Cổng'
				},
				autoBoot: {
					tabTitle: 'Tự boot node',
					name: 'Tên node',
					account: 'Tài khoản',
					primaryAccount: 'Tài khoản chính',
					auto: 'Tự động boot node khi ví được mở'
				},
				save: 'Lưu',
				saveSuccess: 'Thiết lập đã được lưu thành công'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: "Cosignatories' addresses",
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: "Tài khoản này không được dán nhãn",
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Huỷ',
				convert: 'Convert',
				fee: 'Phí',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				dueBy: 'Hết hạn',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				hours: 'giờ',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Tổng cộng',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Người nhận',
					amount: 'Số lượng',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Tổng cộng',
				sender: 'Cosignatory',
				fee: 'Phí',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				dueBy: 'Hết hạn',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				hours: 'giờ',
				password: 'Mật khẩu',
				passwordValidation: 'Mật khẩu không được để trống',
				send: 'Gửi',
				cancel: 'Huỷ',
				sending: 'Đang gửi...',
				successMessage: 'Giao dịch đã được gửi đi thành công!',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có',

				}
			},
			sendNem: {
				title: 'Gửi XEM',
				sender: 'Người gửi',
				thisAccount: 'This account',
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: "Tài khoản này không được dán nhãn",
				amount: 'Số lượng',
				recipient: "Người nhận",
				recipientValidation: 'Địa chỉ tài khoản phải có đúng 40 ký tự trừ các dấu gạch ngang',
				message: 'Thông điệp',
				encrypt: 'Mã hoá thông điệp',
				fee: 'Phí',
				multisigFee: 'Multisig fee',
				feeValidation: 'Phí không được thấp hơn phí tối thiểu',
				dueBy: 'Hết hạn',
				useMinimumFee: 'Sử dụng phí tối thiểu',
				hours: 'giờ',
				password: 'Mật khẩu',
				passwordValidation: 'Mật khẩu không được để trống',
				send: 'Gửi',
				cancel: 'Huỷ',
				sending: 'Đang gửi...',
				successMessage: 'Giao dịch đã được gửi đi thành công!',
				txConfirm: {
					title: 'Xác nhận giao dịch',
					amount: 'Số lượng',
					to: 'Tới',
					dueBy: 'Hết hạn',
					hours: 'giờ',
					total: 'Tổng cộng',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có thông điệp',
					cancel: 'Huỷ',
					confirm: 'Xác nhận',
					sending: 'Đang gửi...'
				},
				notBootedWarning: {
					title: 'Node chưa được boot!',
					message: 'Node cục bộ cần phải được boot trước khi bạn có thể gửi XEM đi!'
				},
				bootingWarning: {
					title: 'Node đang được boot',
					message: 'Xin hãy đợi cho quá trình boot hoàn thành để gửi giao dịch của bạn.'
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: 'Thông tin client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Chữ ký',
				remoteServer: 'Máy chủ từ xa',
				local: 'Cục bộ',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Đồng bộ',
				notSync: 'Không đồng bộ',
				notConnected: 'Không kết nối tới NEM Cloud',
				loading: 'Đang tải...'
			},
			transactionDetails: {
				title: 'Chi tiết giao dịch',
				id: 'ID',
				hash: 'Hash',
				type: 'Loại giao dịch',
				direction: 'Transaction Direction',
				pending: 'Đang chờ xác nhận',
				outgoing: 'Gửi đi',
				incoming: 'Gửi đến',
				self: 'Tự gửi',
				sender: 'Người gửi',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Người nhận',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Thông điệp',
				noMessage: 'Không có thông điệp nào',
				encrypted: 'Thông điệp được mã hoá',
				time: 'Mốc thời gian',
				confirmations: 'Số xác nhận',
				confirmationsUnknown: 'Không rõ',
				amount: 'Số lượng',
				fee: 'Phí',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: "Account details",
				address: "Address",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "Harvested blocks",
				close: "Close"
			},
			bootLocalNode: {
				title: 'Boot node cục bộ',
				account: 'Tài khoản để boot node cục bộ',
				noLabel: '<span class="null">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				node: 'Tên node',
				boot: 'Boot',
				booting: 'Đang boot...'
			},
			closeWallet: {
				title: 'Đóng ví',
				message: 'Bạn có chắc bạn muốn đóng ví của mình và trở về trang chủ?'
			},
			createAccount: {
				title: 'Tạo tài khoản mới',
				label: 'Nhãn cá nhân',
				wallet: 'Ví',
				password: "Mật khẩu ví",
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được tạo!',
				create: 'Tạo'
			},
			createRealAccountData: {
				title: 'Tạo dữ liệu tài khoản thực',
				message: 'Dữ liệu dưới đây là dành cho tài khoản thực của bạn sau khi NEM chính thức hoạt động. Hãy lưu lại địa chỉ, khoá công khai, và quan trọng nhất là khoá bí mật vào một nơi nào đó an toàn. Nếu bạn đánh mất khoá bí mật, tài khoản của bạn cùng tất cả số XEM thực trong đó sẽ bị mất VĨNH VIỄN!',
				address: 'Địa chỉ',
				publicKey: 'Khoá công khai',
				privateKey: 'Khoá bí mật',
				confirm: {
					title: 'Lưu khoá bí mật',
					message: 'Bạn có chắc rằng khoá bí mật của bạn đã được lưu giữ ở một nơi an toàn chưa?'
				},
				recheck: {
					title: 'Kiếm tra lại khoá bí mật bạn đã lưu',
					message: "Hãy nhập lại khoá bí mật mà bạn vừa được cung cấp để kiểm tra xem bạn có lưu chính xác hay không. Nếu khoá bí mật của bạn đã bị mất, bạn có lẽ sẽ muốn tạo lại một cái mới.",
					correct: {
						title: 'Tốt quá!',
						message: 'Có vẻ là bạn đã lưu đúng khoá bí mật của mình. Hãy nhớ luôn luôn giữ nó an toàn và bí mật!'
					},
					incorrect: {
						title: 'Hừmm...',
						message: "Khoá bí mật mà bạn vừa nhập là không chính xác! Bạn có muốn thử điền lại khoá bí mật không hay quay lại xem thông tin gốc tài khoản của bạn một lần nữa?",
						tryAgain: 'Thử điền lại',
						seeOriginal: 'Xem lại thông tin tài khoản'
					},
					recheck: 'Kiểm tra'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Xác thực dữ liệu tài khoản thực',
				message: 'Hãy điền lại địa chỉ, khoá công khai và khoá bí mật mà bạn đã lưu xuống dưới đây để kiểm tra liệu chúng có khớp với nhau không',
				address: 'Địa chỉ',
				publicKey: 'Khoá công khai',
				privateKey: 'Khoá bí mật',
				dataMatched: 'Mọi thứ có vẻ tốt, địa chỉ, khoá công khai và khoá bí mật của bạn đều khớp với nhau.',
				verify: 'Xác thực'
			},
			addAccount: {
				title: 'Thêm tài khoản đã tồn tại',
				privateKey: "Khoá bí mật",
				wallet: 'Ví',
				password: "Mật khẩu ví",
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được thêm vào ví!',
				add: 'Thêm',
				label: 'Nhãn'
			},
			setPrimary: {
				title: 'Đặt tài khoản chính',
				account: 'Tài khoản được đặt làm tài khoản chính',
				noLabel: '<span class="null">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				password: "Mật khẩu ví",
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được đặt làm tài khoản chính!',
				set: 'Đặt làm tài khoản chính'
			},
			changeWalletName: {
				title: 'Đổi tên ví',
				wallet: 'Tên ví hiện tại',
				newName: 'Tên ví mới',
				password: "Mật khẩu ví",
				successMessage: 'Tên ví đã được đổi thành công từ <em>{{1}}</em> sang <em>{{2}}</em>',
				change: 'Thay đổi'
			},
			changeWalletPassword: {
				title: 'Đổi mật khẩu ví',
				wallet: 'Ví',
				password: 'Mật khẩu hiện tại',
				newPassword: 'Mật khẩu mới',
				confirmPassword: 'Xác nhận mật khẩu mới',
				successMessage: 'Mật khẩu ví đã được thay đổi thành công',
				change: 'Thay đổi',
				passwordNotMatchTitle: 'Ui chà!',
				passwordNotMatchMessage: 'Mật khẩu và mật khẩu xác nhận mà bạn nhập không khớp. Hãy chắc chắn rằng bạn gõ đúng mật khẩu mới.'
			},
			changeAccountLabel: {
				title: 'Đổi nhãn tài khoản',
				label: 'Nhãn tài khoản',
				wallet: 'Ví',
				password: "Mật khẩu ví",
				successMessage: 'Tài khoản {{1}} giờ đây được dán nhãn là {{2}}',
				change: 'Thay đổi'
			},
			removeAccount: {
				title: 'Xoá tài khoản',
				wallet: 'Ví',
				password: "Mật khẩu ví",
				warning: 'Please ensure that your account has no XEM left before you remove it, or they would be lost forever.',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được xoá!',
				remove: 'Xoá'
			},
			nisUnavailable: {
				title: 'Không thể kết nối với NIS',
				message: 'Mất kết nối từ NIS, đang đợi kết nối'
			},
			shutdown: {
				title: 'Đóng chương trình',
				message: 'Bạn có chắc rằng bạn muốn đóng NEM Community Client không?'
			},
			activateRemote: {
				title: 'Kích hoạt thu hoạch từ xa',
				wallet: 'Ví',
				account: 'Tài khoản',
				hoursDue: 'Hết hạn sau (giờ)',
				password: "Mật khẩu ví",
				activate: 'Kích hoạt'
			},
			deactivateRemote: {
				title: 'Vô hiệu hoá thu hoạch từ xa',
				wallet: 'Ví',
				account: 'Tài khoản',
				hoursDue: 'Hết hạn sau (giờ)',
				password: "Mật khẩu ví",
				deactivate: 'Vô hiệu hoá'
			},
			startRemote: {
				title: 'Bắt đầu thu hoạch từ xa',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: "Mật khẩu ví",
				start: 'Bắt đầu'
			},
			stopRemote: {
				title: 'Ngừng thu hoạch từ xa',
				wallet: 'Ví',
				account: 'Tài khoản',
				password: "Mật khẩu ví",
				stop: 'Ngừng'
			},
			logoutWarning: {
				leavePage: "Bạn đang rời khỏi ví của mình. Hãy nhớ rằng nếu bạn rời ví theo cách này, ai đó khác vẫn có thể truy cập vào ví của bạn từ máy tính này.\n\nĐể ngăn chặn điều đó xảy ra, hãy đăng xuất bằng cách chọn \"Đóng ví\" trong menu xổ xuống phía trên bên phải màn hình trước khi bạn đóng tab trình duyệt hoặc sang một trang web khác."
			},
			addContact: {
				title: 'Add contact',
				add: 'Thêm'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Lưu thay đổi'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Xoá'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Ví đã được nhập thành công!',
			nav: {
				start: 'Khởi đầu',
				about: 'Về NEM',
				settings: 'Thiết lập'
			},
			main: {
				leftTitle: 'Mới đến với <em>NEM</em>?',
				leftButton: 'Tạo một ví mới',
				walletNamePlh: 'Tên ví của bạn',
				passwordPlh: 'Mật khẩu',
				confirmPasswordPlh: 'Confirm password',
				create: 'Tạo',
				creating: 'Creating...',
				rightTitle: 'Đã là <em>thành viên</em>?',
				rightButton: 'Mở ví của bạn',
				openButton: 'Mở',
				walletsFound: 'Tìm thấy <strong>{{1}}</strong> <em>ví</em>',
				copyright: 'Ảnh chụp bởi <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [
					{
						title: 'NCC mã hoá ví của bạn',
						description: '<em>Bảo mật</em> là rất quan trọng với NEM để ngăn ngừa nạn trộm cắp XEM &amp; tài sản.'
					},
					{
						title: 'NCC mã hoá ví của bạn',
						description: '<em>Bảo mật</em> là rất quan trọng với NEM để ngăn ngừa nạn trộm cắp XEM &amp; tài sản.'
					}
				]
			},
			about: {
				sections: [
					{
						title: 'NCC hoạt động thế nào?',
						paragraphs: [
							'<strong>NCC</strong> cho phép bạn tiếp cận với tài sản và XEM của bạn như một chiếc ví thông thường vẫn làm. Bạn có thể',
							'<strong>NCC</strong> yêu cầu truy cập tới một <strong>NIS</strong> server để có thể hoạt động. Thôgn thường là sẽ có một server chạy trên máy bạn (được cài đặt cùng với <strong>NCC</strong>)',
							'Bạn cũng có thể cấu hình truy cập tới một máy chủ <strong>NIS</strong> từ xa.'
						],
						listItems: [
							'Có nhiều ví cùng lúc',
							'Lập ra nhiều tài khoản chứa trong một chiếc ví'
						]
					},
					{
						title: '&#42;NIS là gì?',
						paragraphs: [
							'Thành phần này chịu trách nhiệm giữ cho <strong>NEM</strong> cloud hoạt động.',
							'Càng nhiều <strong>NIS</strong> chạy thì độ bảo mật càng cao.',
							'<strong>NIS</strong> là điểm truy cập tới <strong>NEM</strong> cloud.'
						],
						legend: '<strong>&#42;NIS</strong> là viết tắt của <strong>NEM Infrastructure Server</strong>'
					}
				]
			},
			footer: {
				copyright: '&copy; Quyền tác giả 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Khoảng {{1}} ngày trước',
			lastAccessJustNow: 'Mới đây',
			lastAccessTooltip: 'Truy cập lần cuối từ {{1}}',
			primary: 'chính',
			primaryShort: 'C',
			noLabel: '<Không nhãn>',
			copiedToClipboard: 'Địa chỉ đã được copy vào clipboard!',
			actions: {
				refreshInfo: 'Cập nhật dữ liệu',
				bootLocalNode: 'Boot node cục bộ',
				changeWalletName: 'Đổi tên ví',
				changeWalletPassword: 'Đổi mật khẩu ví',
				mergeWallets: 'Hợp nhất nhiều ví',
				exportWallet: 'Xuất ví',
				createAccount: 'Tạo tài khoản mới',
				createRealAccountData: 'Tạo dữ liệu tài khoản thực',
				verifyRealAccountData: 'Verify real account data',
				addAccount: 'Thêm tài khoản đã tồn tại',
				changeAccountLabel: 'Đổi nhãn tài khoản',
				setPrimary: 'Đặt làm tài khoản chính',
				removeAccount: 'Xoá tài khoản',
				clientInfo: 'Thông tin client',
				closeWallet: 'Đóng ví',
				closeProgram: 'Đóng chương trình',
				copyClipboard: 'Copy địa chỉ vào clipboard',
				convertMultisig: 'Convert other account to multisig'
			},
			nav: [
				'Bảng tin',
				'Tin nhắn',
				'Address Book',
				'Các giao dịch',
				'Block thu hoạch được',
				'Trao đổi tài sản',
				'Tin tức',
				'Ứng dụng',
				'Các tài khoản',
				'Thiết lập',
				'Đóng chương trình'
			],
			bootNodeWarning: "Node cần phải được boot trước khi bạn có thể sử dụng đầy đủ các tính năng của NCC"
		},
		dashboard: {
			assets: {
				title: 'Tài sản của bạn'
			},
			importance: {
				title: 'Điểm tầm quan trọng',
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
				description: 'tầm quan trọng của tài khoản với NEM cloud',
				remoteHarvest: {
					activate: 'Kích hoạt thu hoạch từ xa',
					activating: 'Đang kích hoạt thu hoạch từ xa...',
					active: 'Thu hoạch từ xa đã sẵn sàng',
					deactivate: 'Vô hiệu hoá thu hoạch từ xa',
					deactivating: 'Đang vô hiệu hoá thu hoạch từ xa...',
					startRemoteHarvesting: 'Bắt đầu thu hoạch từ xa',
					remotelyHarvesting: 'Đang thu hoạch từ xa',
					stopRemoteHarvesting: 'Ngừng thu hoạch từ xa'
				}
			},
			transactions: {
				title: 'Các giao dịch gần đây',
				sendNem: 'Gửi XEM',
				signMultisig: 'SIGN',
				balance: 'Số dư hiện tại',
				vestedBalance: 'Vested Balance',
				syncStatus: '(tại block {{1}}{{#2}} : chậm khoảng {{3}} ngày{{/2}})',
				unknown: 'không xác định',
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				seeAll: 'Xem tất cả giao dịch',
				noTransactions: 'Chưa có giao dịch nào'
			},
			nemValue: {
				title: 'Thống kê giá trị XEM'
			},
			messages: {
				titleTooltip: 'Tin nhắn'
			},
			news: {
				titleTooltip: 'Tin tức'
			},
			notAvailable: 'Chưa khả dụng trong phiên bản beta'
		},
		transactions: {
			title: 'Các giao dịch',
			sendNem: 'Gửi XEM',
			balance: 'Số dư hiện tại',
			filters: {
				confirmed: 'Đã xác nhận',
				unconfirmed: 'Chưa xác nhận',
				incoming: 'Gửi đến',
				outgoing: 'Gửi đi'
			},
			table: {
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				noTransactions: 'Chưa có giao dịch nào',
				loading: 'Đang tải thêm các giao dịch...'
			}
		},
		harvestedBlocks: {
			title: 'Các block thu hoạch được',
			feeEarned: 'Phí giao dịch kiếm được từ 25 block mới nhất',
			unknown: 'Không rõ',
			table: {
				columns: [
					'Chiều cao',
					'Thời điểm',
					'Block hash',
					'Phí'
				],
				noBlocks: 'Chưa có block nào được thu hoạch',
				loading: 'Xem các block cũ'
			},
			harvesting: {
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
				remoteHarvest: {
					startRemoteHarvesting: 'Bắt đầu thu hoạch từ xa',
					stopRemoteHarvesting: 'Ngừng thu hoạch từ xa'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Gửi XEM',
			edit: 'Edit',
			remove: 'Xoá'
		},
		settings: {
			title: 'Thiết lập',
			settings: [
				{
					name: 'Ngôn ngữ'
				}
			],
			save: 'Lưu thay đổi',
			saveSuccess: 'Thiết lập đã được lưu thành công'
		}
	}
});
