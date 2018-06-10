import { types } from "mobx-state-tree"
import { Wallet } from "./wallet";

export const WalletListModel = types
    .model({
        wallets: types.array(Wallet)
    })
    .actions(self => ({
        add(wallet: any) {
            console.log('wallet', wallet);
            
            self.wallets.push(wallet);
        },
        remove(wallet: any) {
            self.wallets.splice(self.wallets.indexOf(wallet), 1);
        }
    }))