import { types } from "mobx-state-tree"

export const Token = types
    .model({
        NEO: types.number,
        GAS: types.number,
        DBC: types.number,
        QLC: types.number,
        TNC: types.number,
        RPX: types.number,
        ZPT: types.number,
        TKY: types.number,
        ACAT: types.number,
        ONT: types.number,
        IAM: types.number
    })    

export const Wallet = types
    .model({
        name: types.string,
        address: types.string,
        privateKey: types.string,
        publicKey: types.string,
        wif: types.string,
        scriptHash: types.string,
        balance: Token
    })
    .actions(self => ({
        add(token, amount) {
            self.balance[token] += amount;
        },

        substract(token, amount) {
            self.balance[token] -= amount;
        },

        canTransfer() {

        }
    }))