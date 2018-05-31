import * as React from 'react';
import { Component } from 'react';
import { Button, Input, Table } from 'reactstrap';
import { observer } from 'mobx-react';
import { onSnapshot } from 'mobx-state-tree';

// export const CreateWallet = observer(({ props }) => (
//   <div className="App">
//     {/* <pre>{JSON.stringify(props.walletList)}</pre> */}
//     <Table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Address</th>
//           <th>Private key</th>
//           <th>Public key</th>
//           <th>WIF</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.walletList.map((wallet: any, i: any) => (
//           <tr key={i}>
//             <td>{wallet.name}</td>
//             <td>{wallet._address}</td>
//             <td>{wallet._privateKey}</td>
//             <td>{wallet._publicKey}</td>
//             <td>{wallet.WIF}</td>
//             <td>{wallet._scriptHash}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   </div>
// ));  

class WalletList extends Component<any, any> {
  render() {
    return (
      <div className="App">
        {/* <pre>{JSON.stringify(props.walletList)}</pre> */}
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Private key</th>
              <th>Public key</th>
              <th>Wif</th>
              <th>ScriptHash</th>
            </tr>
          </thead>
          <tbody>
            {this.props.walletList.map((wallet: any, i: any) => (
              <tr key={i}>
                <td>{wallet.name}</td>
                <td>{wallet.address}</td>
                <td>{wallet.privateKey}</td>
                <td>{wallet.publicKey}</td>
                <td>{wallet.wif}</td>
                <td>{wallet.scriptHash}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default observer(WalletList);