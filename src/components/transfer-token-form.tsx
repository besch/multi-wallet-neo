import * as React from 'react';
import { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';
import { Wallet } from '../models/wallet';
import { WalletService } from '../services/wallet';
import Select from 'react-select';
import { observer } from "mobx-react";
import { WalletListModel } from "../models/walletList";
import 'react-select/dist/react-select.css';
// import {  } from "reactstrap";

@observer
export class TransferTokenForm extends Component<any, any> {
    amountToSend: HTMLInputElement;
    walletStore = WalletListModel.instantiate;
    state = {
        selectedWallets: null,
        selectedTokens: null,
    };

    transferToken(fromAddress, toAddress, token, amount) {
        // e.preventDefault();

        // this.props.walletStore.add(
        // Wallet.create(newWallet)
        // );

        // this.walletName.value = '';
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
        // console.log('this.props', this.props);

        const walletList = this.props.wallets.map((wallet, i) => this.props.currentWalletIndex !== i && {
            label: wallet.name,
            value: wallet.address
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
            <form onSubmit={() => this.transferToken}>
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