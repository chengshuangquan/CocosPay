export default {
  // placeholder
  placeholder: {
    account: 'Enter account',
    password: 'Enter password',
    temporary: 'Enter temporary password',
    oldPassword: 'Enter old password',
    repassword: 'Confirm password',
    input: 'Enter',
  },
  // button
  button: {
    create: 'Create',
    agree: 'Agree',
    back: 'Back',
    accountLogin: 'Account Login',
    keysLogin: 'Private Key Login',
    createAccount: 'CreateAccount',
    importAccount: 'ImportAccount',
    editAccountName: 'EditName',
    lookAccount: 'ViewAccount',
    deletedWallet: 'Exit Wallet',
    removeAccount: 'Exit',
    exportPrivateKey: 'Export',
    recharge: 'Deposit',
    transfer: 'Send',
    resource: 'Resource',
    copy: 'Copy',
    sure: 'Confirm',
    copyPrivate: 'CopyPrivate',
    doneCopy: 'Backed Up',
    sureCreateAccount: 'Confirm Create',
    save: 'Save',
    cancel: 'Cancel',
    copyAddress: 'CopyAddress',
    send: 'Send',
    surePay: 'Confirm',
    unlock: 'Unlock',
    reset: 'Reset',
    modifyPassword: 'ModifyPassword',
    agreement: 'Agreement',
    policy: 'Policy',
    close: 'Close',
    pledge: 'Freeze',
    redeem: 'UnFreeze',
    pledgeSure: 'Confirm',
    redeemSure: 'Confirm',
    importSure: 'Confirm',
    confirm: 'Confirm',
    reject: 'Reject'
  },
  // message
  message: {
    rememberPassword: 'Please remember the password, forget the password will not be recovered',
    recommendNew: 'Recommend new users for use',
    recommendOld: 'Recommend to users who already have COCOS accounts',
    savePrivateKey: 'Please note:  please export the corresponding private key in time and keep it in a safe place. Do not leak the private key to anyone',
    privateKeyOnly: 'The private key will be the only way you can retrieve your account',
    noMoreRecord: 'No more records',
    noRecord: 'No transaction record',
    noWhiteList: 'No whiteList',
    joinWhiteList: 'Add to white list, this site no longer prompts',
    warningPrivateKey: 'Security warning: do not disclose your private key to anyone',
    rechargeOnly: 'This address only supports COCOS and its token',
    verifyPassword: 'You need to verify your current password',
    lockSetting: 'Automatic lock setting',
    ownerError: 'The account name is not you',
    lockTip: 'When you stop, you can automatically lock CocosPay by setting the departure time',
    changeLanguage: 'Select the language',
    resourceTip: 'Transfers, transactions, execution of contracts and other operations consume resources, which can be obtained by mortgaging COCOS',
    pledgeTip: 'Through mortgage COCOS (wave field voting rights) and resources, mortgage COCOS will be frozen for three days and cannot be traded.At the end of the freeze period, the mortgaged COCOS can be UnFreeze and traded.'
  },
  // verify
  verify: {
    accountType: '5-63-bit lowercase letter beginning + number',
    passwordType: '8-12 digits, letters and special symbols',
    passwordNull: 'The password cannot be empty',
    passwordLength: 'The password should be no less than 8 bits long',
    passwordSure: 'Please enter your password again',
    passwordMatch: 'The two passwords do not match',
    accountNull: 'Please enter your account name',
    accountReg: 'Please enter the correct username',
    ownerAccountNull: 'Please select payment account',
    toAddressNull: 'Please enter the receiving address',
    tokenNull: 'Please select a Token',
    number: 'Please enter the number',
    numberGtZero: 'Please enter a number greater than 0',
    ownerKey: 'Owner key cannot transfer,Please import active key',
    minimum: 'The maximum number of digits after the decimal point is',
    walletPassword: 'Please enter the original temporary password',
    noZero: 'The quantity should be greater than 0',
  },
  // title
  title: {
    agreement: 'User agreement',
    createAccount: 'Create account',
    history: 'Transaction records',
    editorAccount: 'Change the account name',
    recharge: 'Deposit',
    transfer: 'Send',
    walletType: 'Wallet Mode',
    accountType: 'Account Mode',
    sendDetail: 'Transaction details',
    welcome: 'Welcome Back!',
    setting: 'Setting',
    policy: 'Privacy policy',
    resource: 'Resource',
    resourceTitle: 'Resources',
    pledgeTrx: 'Freeze',
    redeemTrx: 'UnFreeze',
    importAccount: 'ImportAccount',
    removeAccount: 'Exit Account',
    signature: 'Request Signature',
    locked: 'Not logged in or locked',
    test: 'TEST',
    coin: 'Coins',
  },
  // alert
  alert: {
    tranferSuccess: 'Transfer success',
    copySuccess: 'Copy success',
    copyFail: 'Copy Fail',
    exportSuccess: 'Export success',
    exportFail: 'Export Fail',
    changeFail: 'Change Fail',
    passwordError: 'Password Error',
    sendSuccess: 'Send Success',
    sendFail: 'Send Fail',
    modifySuccess: 'Modify Success',
    modifyPasswordSuccess: 'Modify Password Success',
    redeemSuccess: 'UnFreeze Success',
    redeemFail: 'UnFreeze failed. Please try again later',
    pledgeSuccess: 'Freeze Success',
    pledgeFail: 'Freeze Fail',
    existAccount: 'Exist Account',
    illegalPrivateKey: 'Illegal PrivateKey',
    transferFail: 'The available balance is insufficient after deducting the service charge',
    setSuccess: 'Set Up Success',
  },
  // confirm
  confirm: {
    removeAccount: 'Make sure the private key is exported before Exit the account or remember the password, otherwise the account cannot be restored after Exit'
  },
  // label
  label: {
    send: 'The sender',
    receive: 'The received',
    hash: 'Trade ID',
    user: 'User',
    blockHeight: 'Block height',
    tradeTime: 'Trading time：',
    orderTime: 'Selling time：',
    orderPrice: 'Price：',
    coin: 'Coin：',
    orderID: 'Order ID：',
    ownerAccount: 'Payment account',
    toAddress: 'Receive address',
    tokenType: 'Change Token',
    amount: 'Send Amount',
    mainNetwork: 'Main Network',
    testNetwork: 'Test Network',
    customNet: 'Private Network',
    bandwidth: 'Band width',
    vote: 'Vote',
    donePledge: 'Freeze TRX',
    redeemTime: 'UnFreeze Time',
    pledgeAmount: 'Freeze Amount:',
    pledgeType: 'Freeze Type:',
    redeemAmount: 'UnFreeze Amount',
    cocosPrivate: 'COCOS PrivateKey',
    property: 'label',
    json: 'Json',
    contract: 'Contract',
    operation: 'Operation',
    ptsite: 'Site：',
    ptaddress: 'To：',
    ptamount: 'Value：',
    ptcontract: 'Contract：',
    ptpayment: 'Payment：',
    pttype: 'Type：',
    param: 'parameters',
    memo: 'memo',
    charge: 'fee',
    nhTitle: 'NH Asset transfers',
    nhId: 'NH Asset ID',
  },
  // settings
  settings: {
    network: 'Network',
    whiteList: 'WhiteList',
    language: 'Language',
    modifyPassword: 'Password',
    lockSetting: 'Lock Setting',
    about: 'About',
    lock: 'Lock'
  },
  // unit
  unit: {
    minute: 'minutes'
  },
  type: {
    bandWidth: 'Bandwidth Point',
    energy: 'Energy'
  },
  other: {
    never: 'never'
  },
  networkName: {
    MainNet: 'TestNet',
    TestNet: 'TestNet',
    PrivateNet: 'PrivateNet'
  },
  error: {
    '-11': 'Please login first',
    0: 'failed',
    101: 'Parameter is missing',
    1011: 'Parameter error',
    102: 'The network is busy, please check your network connection',
    103: 'Please enter the correct account name(Lowercase letters begin with 5 or more digits)',
    104: 'Not Found',
    105: 'wrong password',
    106: 'The account is already unlocked',
    107: 'Please import the private key',
    108: 'User name or password error',
    109: 'Please enter the correct private key',
    110: 'The private key has no account information',
    111: 'Please login first',
    112: 'Must have owner permission to change the password, please confirm that you imported the ownerPrivateKey',
    113: 'Please enter the correct original/temporary password',
    114: 'Account is locked or not logged in',
    115: 'There is no asset XX on block chain',
    116: 'Account receivable does not exist ',
    117: 'The decimal cannot exceed the current asset precision',
    118: 'Encrypt memo failed',
    119: 'Expiry of the transaction',
    120: 'Error fetching account record',
    121: 'block and transaction information cannot be found',
    122: ' Parameter blockOrTXID is incorrect',
    123: 'Parameter account can not be empty',
    124: 'Receivables account name can not be empty',
    125: 'Users do not own the assets',
    127: 'No reward available',
    129: 'Parameter memo  can not be empty ',
    130: 'Please enter the correct contract name(Lowercase letters begin with 6 or more digits)',
    131: 'Parameter worldView can not be empty',
    133: 'Parameter toAccount can not be empty ',
    135: 'Please check parameter data type ',
    136: 'Parameter orderId can not be empty',
    137: 'Parameter NHAssetHashOrIds can not be empty',
    138: 'Parameter url can not be empty',
    139: 'Node address must start with ws:// or wss://',
    140: 'API server node address already exists',
    141: 'Please check the data in parameter NHAssets',
    142: 'Please check the data type of parameter NHAssets',
    144: 'Your current batch creation/deletion/transfer can not exceed the batch operations',
    145: 'Contract not found',
    146: 'The account does not contain information about the contract',
    147: 'NHAsset do not exist',
    148: 'Request timeout, please try to unlock the account or login the account',
    149: 'This wallet has already been imported ',
    150: 'Key import error',
    151: 'File saving is not supported',
    152: 'Invalid backup to download conversion',
    153: 'Please unlock your wallet first',
    154: 'Please restore your wallet firs',
    155: 'Your browser may not support wallet file recovery',
    156: 'The wallet has been imported. Do not repeat import',
    157: 'Can not delete wallet, does not exist in index ',
    158: 'Imported Wallet core assets error',
    159: 'Account exists',
    160: 'The private key has been imported into the wallet',
    161: 'Orders do not exist',
    162: 'The asset already exists',
    163: 'The wallet already exists. Please try importing the private key',
    164: 'worldViews do not exist',
    165: 'There is no wallet account information on the chain',
    166: 'The Wallet Chain ID does not match the current chain configuration information',
    167: 'The current contract version ID was not found',
    168: 'This subscription does not exist',
    169: 'Method does not exist',
    300: 'Chain sync error, please check your system clock',
    301: 'RPC connection failed. Please check your network'
  }
}
