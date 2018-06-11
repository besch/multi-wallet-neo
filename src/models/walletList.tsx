import { types, getSnapshot } from "mobx-state-tree";
import { Wallet } from "./wallet";
import { getData, setData } from '../services/firebase';

export const WalletListModel = types
    .model({
        wallets: types.array(Wallet)
    })
    .actions(self => ({
        add(wallet: any) {
            // console.log('wallet', wallet);
            
            self.wallets.push(wallet);
            
            // console.log("getSnapshot", getSnapshot(self.wallets));
            // console.log("getSnapshot", getSnapshot(JSON.stringify(self.wallets)));
            const snapshot = getSnapshot(self.wallets);
            console.log('this.snapshot()', this.snapshot());
            console.log("this.snapshot()", snapshot);
            
            setData(this.snapshot())
              .then(res => console.log("res", res))
              .catch(err => console.error("err", err));
        },
        remove(wallet: any) {
            self.wallets.splice(self.wallets.indexOf(wallet), 1);
            setData(this.snapshot());
        },
        snapshot() {
            return getSnapshot(self.wallets);
        }
    }))