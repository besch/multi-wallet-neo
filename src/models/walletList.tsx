import { types, getSnapshot } from "mobx-state-tree";
import { Wallet } from "./wallet";
import { getData, setData } from '../services/firebase';

export const WalletListModel = types
    .model({
        wallets: types.array(Wallet)
    })
    .actions(self => ({
        add(wallet: any) {
            self.wallets.push(wallet);
            const snapshot = getSnapshot(self.wallets);
            setData(snapshot)
              .then(res => console.log("res", res))
              .catch(err => console.error("err", err));
        },
        remove(wallet: any) {
            const snapshot = getSnapshot(self.wallets);
            self.wallets.splice(self.wallets.indexOf(wallet), 1);
            setData(snapshot);
        },

        set(wallets) {
            this.wallets = wallets;
        },

        removeAll() {
            console.log('removeAll');
            self.wallets = null;
        },

        snapshot() {
            return getSnapshot(self.wallets);
        }
    }))