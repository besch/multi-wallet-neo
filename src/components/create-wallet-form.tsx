import * as React from 'react';
import { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/wallet';

export class CreateWalletForm extends Component<any, any> {
	walletName: HTMLInputElement;

	constructor(
		props: any, 
		private walletService: WalletService) 
	{
		super(props);
		this.walletService = new WalletService();
	}

	createWallet(e: any) {
		e.preventDefault();

		const newWallet = this.walletService.createWallet(this.walletName.value);

		this.props.walletStore.add(
		Wallet.create(newWallet)
		);

		this.walletName.value = '';
	}

	render() {
		return (
		<form onSubmit={this.createWallet.bind(this)}>
			{/* <Input type="text" ref={input => (this.walletName = input!) } placeholder="New name for wallet" />
			<Button type="submit" color="info">Create new wallet</Button> */}
			<input type="text" ref={input => (this.walletName = input!)} placeholder="New name for wallet" />
			<button type="submit" color="info">Create new wallet</button>
		</form >
		)
	}
}
