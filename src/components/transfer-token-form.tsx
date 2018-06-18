import * as React from 'react';
import { Component } from 'react';
import { Button, Input, Form, FormGroup } from "reactstrap";
import Select from 'react-select';
import { observer } from "mobx-react";
import { WalletListModel } from "../models/walletList";
import 'react-select/dist/react-select.css';

@observer
export class TransferTokenForm extends Component<any, any> {
    amountToSend;
    walletStore = WalletListModel.instantiate;
    state = {
        selectedWallets: null,
        selectedTokens: null,
    };

    transferToken(e) {
        e.preventDefault();

        const walletFrom = this.props.wallets[this.props.currentWalletIndex];
        const amount = parseInt(this.amountToSend.value);

        this.state.selectedWallets.forEach(selectedWallet => {
            const walletTo = this.props.wallets[selectedWallet.index];

            this.state.selectedTokens.forEach(selectedToken => {
                const tokenToSend = selectedToken.value;

                walletFrom.substract(tokenToSend, amount);
                walletTo.add(tokenToSend, amount);
            })
        });
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
            <Form onSubmit={(e) => this.transferToken(e)}>
                <FormGroup>
                    <Select
                        placeholder="Wallet name"
                        clearable={true}
                        multi={true}
                        value={this.state.selectedWallets}
                        onChange={this.handleChangeWallets}
                        options={walletList}
                    />
                </FormGroup>
                <FormGroup>
                    <Select
                        placeholder="Tokens to send"
                        clearable={true}
                        multi={true}
                        value={this.state.selectedTokens}
                        onChange={this.handleChangeTokens}
                        options={availableTokensToTransfer}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="text" innerRef={input => this.amountToSend = input} placeholder="Amount to send" />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" color="info">Send tokens</Button>
                </FormGroup>
            </Form>
        )
    }
}