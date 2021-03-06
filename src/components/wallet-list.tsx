import './wallet-list.css'

import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';
import { Collapse, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTimes } from "@fortawesome/fontawesome-free-solid";

import { TransferTokenForm } from './transfer-token-form';

@observer
export default class WalletList extends Component<any, any> {
	constructor(props) {
		super(props);

		let obj = {};
		this.props.walletStore.wallets.forEach((wallet, i) => {
			obj[`collapse-${i}`] = false;
		});

		this.state = obj;
	}

	toggleCollapse(index) {
		this.setState({ [`collapse-${index}`]: !this.state[`collapse-${index}`] });
	}

	deleteWallet(index) {
		this.props.walletStore.remove(index);
	}

	render() {
		return <div className="wallet-list">
			{this.props.walletStore.wallets.map((wallet, i) => (
				<Card className="wallet" key={i}>
					<CardHeader>
						<h4 className="wallet-name">{wallet.name}</h4>
						<FontAwesomeIcon
							style={{color: 'red'}}
							className="wallet-control-icon pull-right"
							icon={faTimes}
							onClick={() => this.props.walletStore.remove(i)}
						/>
						<FontAwesomeIcon
							style={{ color: 'green' }}
							className="wallet-control-icon pull-right"
							icon={this.state[`collapse-${i}`] ? faMinus : faPlus}
							onClick={() => this.toggleCollapse(i)}
						/>
					</CardHeader>

					<CardBody>
						<Collapse isOpen={this.state[`collapse-${i}`]}>
							<p>Address: {wallet.address}</p>
							<p>Private key: {wallet.privateKey}</p>
							<p>Public key: {wallet.publicKey}</p>
							<p>Wif: {wallet.wif}</p>
							<p>ScriptHash: {wallet.scriptHash}</p>
						</Collapse>
						<Balance balance={wallet.balance} />
					</CardBody>

					<CardFooter>
						<TransferTokenForm wallets={this.props.walletStore.wallets} currentWalletIndex={i}/>
					</CardFooter>
				</Card>
			))}
		</div>;
	}
}

@observer
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