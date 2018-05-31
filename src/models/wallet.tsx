import { types } from "mobx-state-tree"

// declaring the shape of a node with the type `Todo`
export const Wallet = types
    .model({
        name: types.string,
        address: types.string,
        privateKey: types.string,
        publicKey: types.string,
        wif: types.string,
        scriptHash: types.string
    })
    .actions(self => ({

    }))