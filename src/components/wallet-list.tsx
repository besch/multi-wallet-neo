import './wallet-list.css'

import * as React from 'react';
import { Component } from 'react';
import { observer } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';
import { Collapse, Card, CardBody, CardHeader, CardFooter } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee, faMinus, faTimes } from "@fortawesome/fontawesome-free-solid";

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
        {this.props.walletStore.wallets.map((wallet: any, i: any) => (
			<Card className="wallet" key={i}>
				<CardHeader>
					<FontAwesomeIcon
						className="wallet-control"
						icon={faMinus}
						onClick={() => this.props.walletStore.remove(i)}
					/>
					<FontAwesomeIcon
						className="wallet-control"
						icon={faTimes}
						onClick={() => this.props.walletStore.remove(i)}
					/>
					<div>Name: {wallet.name}</div>
				</CardHeader>

				<Collapse isOpen={this.state[`collapse-${i}`]}>
					<CardBody>
						<p>Address: {wallet.address}</p>
						<p>Private key: {wallet.privateKey}</p>
						<p>Public key: {wallet.publicKey}</p>
						<p>Wif: {wallet.wif}</p>
						<p>ScriptHash: {wallet.scriptHash}</p>
						<Balance balance={wallet.balance} />
					</CardBody>
				</Collapse>
			</Card>
        ))}
      </div>;
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