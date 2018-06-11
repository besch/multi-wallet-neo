import { types, getSnapshot } from "mobx-state-tree";
import { Wallet } from "./wallet";
import { getData, setData } from '../services/firebase';

export const WalletListModel = types
    .model({
        wallets: types.array(Wallet)
    })
    .actions(self => ({
        add(wallet: any) {
            console.log('wallet', wallet);
            
            self.wallets.push(wallet);
            console.log("snapshot", self.wallets);
            setData(self.wallets)
                .then(res => console.log('res', res))
                .catch(err => console.error('err', err));
        },
        remove(wallet: any) {
            self.wallets.splice(self.wallets.indexOf(wallet), 1);
            setData(self.wallets);
        }
    }))