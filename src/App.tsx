import * as React from 'react';
import './App.css';

import DevTools from 'mobx-react-devtools';

import WalletList from './components/wallet-list';
import { CreateWalletForm } from './components/create-wallet-form';
import DragDropContextArea from './components/draggable/area';

import { WalletListModel } from './models/walletList';
import { Wallet } from "./models/wallet";
import { Transfer } from './components/draggable/helpers/transfer';
import { getData } from "./services/firebase";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  public render() {
    let list = WalletListModel.create({ wallets: [] });
    // WalletListModel.create({
    //   wallets: []
    // });

    getData().then(data => {
      console.log("data", data);
      // list = WalletListModel.create({
      //   wallets: data
      // });

      // WalletListModel.set(data);
      // WalletListModel.a
    });

    // data.forEach(element => {
    //   console.warn('element', element);
    //   WalletListModel.create(element);
    // });
    // const store = RootStore.create({
    //   "users": {},
    //   "todos": {
    //     "1": {
    //       "name": "Eat a cake",
    //       "done": true
    //     }
    //   }
    // })

    // // 2nd
    // applySnapshot(store, {
    //   "users": {},
    //   "todos": {
    //     "1": {
    //       "name": "Eat a cake",
    //       "done": true
    //     }
    //   }
    // })

    // let list = WalletListModel.create({
    //   wallets: []
    //   // wallets: getData() as any
    // });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <WalletList walletList={list.wallets} />
        <CreateWalletForm walletStore={list} />

        <DragDropContextArea transfer={new Transfer()} />

        <DevTools />
      </div>
    );
  }
}

export default App;