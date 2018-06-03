import * as React from 'react';
import './App.css';

import WalletList from './components/wallet-list';
import { CreateWalletForm } from './components/create-wallet-form';
import DragDropContextArea from './components/draggable/area';

import { WalletListModel } from './models/walletList';

class App extends React.Component {
  public render() {
    let list = WalletListModel.create({
      wallets: []
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <WalletList walletList={list.wallets} />
        <CreateWalletForm walletStore={list}/>

        <DragDropContextArea />
      </div>
    );
  }
}

export default App;