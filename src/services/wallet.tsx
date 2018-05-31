import Neon from '@cityofzion/neon-js';
// import { observer, PropTypes } from 'mobx-react';

// import Neon, { wallet, tx } from '@cityofzion/neon-js';
// import { getTransactionHistory } from '@cityofzion/neon-js/src/api/typings/neoscan';

interface Wallet {
    name: string,
    address: string,
    privateKey: string,
    publicKey: string,
    wif: string,
    scriptHash: string
}

export class WalletService {
    createWallet(walletName: string): Wallet {
        const privateKey = Neon.create.privateKey()
        const account: any = Neon.create.account(privateKey)
        const { _address, _privateKey, _publicKey, WIF, _scriptHash } = account;

        const walletData: Wallet = {
            name: walletName,
            address: _address,
            privateKey: _privateKey,
            publicKey: _publicKey,
            wif: WIF,
            scriptHash: _scriptHash
        }

        return walletData;

    }
}

export default WalletService;