import { observable } from 'mobx';

export class Transfer {

    @observable initialTokens = 0;

    // transferTokens(fromWalletId: number, toWalletId: number, tokenName: string, amount: number): void {
    transferTokens(props) {
        console.warn('props', props)
    }

    // canTransferTokens(fromWalletId: number, tokenName: string, amount: number): void {
    canTransferTokens(props) {
        console.warn('props', props)
    }
}