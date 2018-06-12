import './wallet-list.css'

import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';

@observer
export default class WalletList extends Component<any, any> {
	deleteWallet(index) {
		this.props.walletStore.remove(index);
	}

	render() {
		return (
			<div className="wallet-list">
				{this.props.walletStore.wallets.map((wallet: any, i: any) => (
					<div className="wallet" key={i}>
						<div className="deleteWallet" onClick={() => this.props.walletStore.remove(i)}>X</div>
						<p>Name: {wallet.name}</p>
						<p>Address: {wallet.address}</p>
						<p>Private key: {wallet.privateKey}</p>
						<p>Public key: {wallet.publicKey}</p>
						<p>Wif: {wallet.wif}</p>
						<p>ScriptHash: {wallet.scriptHash}</p>
						<Balance balance={wallet.balance} />
					</div>
				))}
			</div>
		)
	}
}

class Balance extends Component<any, any> {
	render() {
		const balance = this.props.balance;
		let array = [];

		for (let key in balance) {
			if (balance.hasOwnProperty(key)) {
				array.push(`${key}: ${balance[key]}`)
			}
		}

		return (
			<div>
				{array.map((item, i) =>
					<p key={i}>{item}</p>
				)}
			</div>
		);
	}
}