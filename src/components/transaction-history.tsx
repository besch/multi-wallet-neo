import * as React from 'react';
import Neon from '@cityofzion/neon-js';
import { Button, Input, Table } from 'reactstrap';
import { observer, PropTypes } from 'mobx-react';
// import { Wallet } from '../models/wallet';
// import WalletList from '../models/walletList';

// import Neon, { wallet, tx } from '@cityofzion/neon-js';
// import { getTransactionHistory } from '@cityofzion/neon-js/src/api/typings/neoscan';

export class TansactionHistory extends React.Component {
  // wallets: Array<Wallet> = [];
  
  // constructor(props: any) {
  //   super(props);

  //   this.setState({
  //     wallets: []
  //   })
  // }


  constructor(props: any) {
    super(props);
  }

  walletName: any;

  createWallet() {
    const privateKey = Neon.create.privateKey()
    let account: any;
    account = Neon.create.account(privateKey)

    console.log('this.walletName.value', this.walletName)

    const { _address, _privateKey, _publicKey, WIF, _scriptHash } = account;

    const walletData = {
      name: 'sdfsfsdfs',
      // name: this.walletName.value,
      _address,
      _privateKey,
      _publicKey,
      WIF,
      _scriptHash
    }

    console.log('this', this)

    // return this.wallets.push(walletData);
    // return this.setState({
    //   wallets: this.state.wallets.push(walletData)
    // })

    // console.warn('this.wallets[0]._privateKey', this.wallets[0]._privateKey)
  }
  
  public render() {
    return (
      <div className="App">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Private key</th>
              <th>Public key</th>
              <th>WIF</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.wallets.map((wallet: Wallet, i) => (
              <tr key={i}>
                <td>{wallet.name}</td>
                <td>{wallet._address}</td>
                <td>{wallet._privateKey}</td>
                <td>{wallet._publicKey}</td>
                <td>{wallet.WIF}</td>
                <td>{wallet._scriptHash}</td>
              </tr>
            ))} */}
            {/* {this.props.walletList.map((wallet: any, i: any) => (
              <tr key={i}>
                <td>{wallet.name}</td>
                <td>{wallet._address}</td>
                <td>{wallet._privateKey}</td>
                <td>{wallet._publicKey}</td>
                <td>{wallet.WIF}</td>
                <td>{wallet._scriptHash}</td>
              </tr>
            ))} */}
          </tbody>
        </Table>

        <Input 
          type="text" name="walletName" id="walletName"
          ref={input => this.walletName = input}  placeholder="New name for wallet" />

        <Button color="info" onClick={this.createWallet.bind(this)}>Create new wallet</Button>
      </div>
    );
  }
}

export default observer(TansactionHistory);