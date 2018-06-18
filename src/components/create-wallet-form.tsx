import * as React from 'react';
import { Component } from 'react';
import { Form, FormGroup, Button, Input, Col } from "reactstrap";
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/wallet';

export class CreateWalletForm extends Component<any, any> {
	walletName;

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
			<Form inline onSubmit={this.createWallet.bind(this)}>
				<FormGroup>
					<Col sm={6}>
						<Input type="text" innerRef={input => this.walletName = input} placeholder="New name for wallet" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Button type="submit" color="info">Create new wallet</Button>
				</FormGroup>
			</Form>
		)
	}
}
