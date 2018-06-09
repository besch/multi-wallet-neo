import { observable, IObservable } from 'mobx';

export interface Itransfer {
    initialTokens: IObservable,
    color: IObservable
    text: IObservable,
    walletId: IObservable,
    moveCard(): void;
    canMove(): void;
}

export class Transfer {

    @observable initialTokens = 0;
    @observable color = 'green';
    @observable text = 'Hurraa';
    @observable walletId = 1;

    moveCard(walletId) {
        console.log('walletId', walletId)
        this.color = 'black';
        this.text = 'DROP success';
        this.initialTokens++;
        this.walletId = walletId;
    }

    canMove(color) {
        console.log('canMove', this.color)
        this.color === 'blue';
    }

    // transferTokens(fromWalletId: number, toWalletId: number, tokenName: string, amount: number): void {
    transferTokens(props) {
        console.warn('props', props)
    }

    // canTransferTokens(fromWalletId: number, tokenName: string, amount: number): void {
    canTransferTokens(props) {
        console.warn('props', props)
    }
}