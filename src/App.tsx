import * as React from 'react';
import './App.css';

import { onSnapshot } from 'mobx-state-tree';
import { observer } from 'mobx-react';

// import { TansactionHistory } from "./components/transaction-history";
import WalletList from "./components/wallet-list";
import { CreateWalletForm } from "./components/create-wallet-form";

import { WalletListModel } from './models/walletList';
import { Wallet } from './models/wallet';

class App extends React.Component {
  public render() {
    let list = WalletListModel.create({
      wallets: []
    });

    // list.add(
    //   Wallet.create({
    //     name: 'name',
    //     address: 'address',
    //     privateKey: 'privateKey',
    //     publicKey: 'publicKey',
    //     wif: 'wif',
    //     scriptHash: 'scriptHash'
    //   })
    // )

    onSnapshot(list, (snapshot: any) => {
      console.dir('snapshot', snapshot)
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WalletList walletList={list.wallets} />
        <CreateWalletForm walletStore={list}/>
      </div>
    );
  }
}

export default App;
