import './wallet-list.css'

import * as React from 'react';
import { Component } from 'react';
// import { Button, Input, Table } from 'reactstrap';
import { observer } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';

// class WalletList extends Component<any, any> {
//   render() {
//     return (
//       <div className="App">
//         <Table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Address</th>
//               <th>Private key</th>
//               <th>Public key</th>
//               <th>Wif</th>
//               <th>ScriptHash</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.walletList.map((wallet: any, i: any) => (
//               <tr key={i}>
//                 <td>{wallet.name}</td>
//                 <td>{wallet.address}</td>
//                 <td>{wallet.privateKey}</td>
//                 <td>{wallet.publicKey}</td>
//                 <td>{wallet.wif}</td>
//                 <td>{wallet.scriptHash}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     )
//   }
// } 

class WalletList extends Component<any, any> {
  render() {
    return (
      <div className="draggableWalletList">
        {this.props.walletList.map((wallet: any, i: any) => (
          <div className="draggableWallet" key={i}>
            <p>Name: {wallet.name}</p>
            <p>Address: {wallet.address}</p>
            <p>Private key: {wallet.privateKey}</p>
            <p>Public key: {wallet.publicKey}</p>
            <p>Wif: {wallet.wif}</p>
            <p>ScriptHash: {wallet.scriptHash}</p>
            {/* <div>Balance: {
              wallet.balance.map((amount, name) => (
                <p>{name}: {amount}</p>
              ))
            }</div> */}
          </div>
        ))}
      </div>
    )
  }
}

export default observer(WalletList);