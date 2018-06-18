import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

import DevTools from 'mobx-react-devtools';
import { applySnapshot } from 'mobx-state-tree';

import WalletList from './components/wallet-list';
import { CreateWalletForm } from './components/create-wallet-form';
import DragDropContextArea from './components/draggable/area';

import { WalletListModel } from './models/walletList';
import { Wallet } from './models/wallet';
import { Transfer } from './components/draggable/helpers/transfer';
import { getData } from './services/firebase';
import { observer } from 'mobx-react';

@observer
class App extends React.Component {
	public render() {
		let walletStore = WalletListModel.create({ wallets: [] });

		getData().then(data => {
			applySnapshot(walletStore, {
				wallets: data
			});
		});

		return (
			<div className="App">
				<WalletList walletStore={walletStore} />
				<CreateWalletForm walletStore={walletStore} />

				{/* <DragDropContextArea transfer={new Transfer()} /> */}

				<DevTools />
			</div>
		);
	}
}

export default App;