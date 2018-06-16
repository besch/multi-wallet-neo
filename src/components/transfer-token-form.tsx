import * as React from 'react';
import { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/wallet';
import Select from 'react-select';
import { observer } from "mobx-react";
import { WalletListModel } from "../models/walletList";
import 'react-select/dist/react-select.css';

@observer
export class TransferTokenForm extends Component<any, any> {
    amountToSend: HTMLInputElement;
    walletStore = WalletListModel.instantiate;
    state = {
        selectedWallets: null,
        selectedTokens: null,
    };

    transferToken(e) {
        e.preventDefault();

        const walletFrom = this.props.wallets[this.props.currentWalletIndex];
        const walletTo = this.props.wallets[this.state.selectedWallets[0].index];
        const tokenToSend = this.state.selectedTokens[0].value;
        const amount = parseInt(this.amountToSend.value);

        walletFrom.substract(tokenToSend, amount);
        walletTo.add(tokenToSend, amount);
    }

    handleChangeWallets = selectedWallets => {
        // console.log(`Selected wallets: ${selectedWallets.label}`);
        this.setState({ selectedWallets });
    }

    handleChangeTokens = selectedTokens => {
        // console.log(`Selected tokens: ${selectedTokens.label}`);
        this.setState({ selectedTokens });
    }

    render() {
        const walletList = this.props.wallets.map((wallet, i) => this.props.currentWalletIndex !== i && {
            label: wallet.name,
            value: wallet.address,
            index: i
        }).filter(i => i);

        let availableTokensToTransfer = [];
        const currentWalletBalance = this.props.wallets[this.props.currentWalletIndex].balance;
        for (let token in currentWalletBalance) {
            availableTokensToTransfer.push({
                label: token,
                value: token
            });
        }
        
        return (
            <form onSubmit={(e) => this.transferToken(e)}>
                <Select
                    placeholder="Wallet name"
                    clearable={true}
                    multi={true}
                    name="form-field-name"
                    value={this.state.selectedWallets}
                    onChange={this.handleChangeWallets}
                    options={walletList}
                />
                <Select
                    name="form-field-name"
                    clearable={true}
                    multi={true}
                    value={this.state.selectedTokens}
                    onChange={this.handleChangeTokens}
                    options={availableTokensToTransfer}
                />
                <input type="text" ref={input => (this.amountToSend = input!)} placeholder="Amount to send" />
                <button type="submit" color="info">Send tokens</button>
            </form >
        )
    }
}