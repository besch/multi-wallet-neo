import { observable, IObservable } from 'mobx';

export interface Itransfer {
    initialTokens: IObservable,
    color: IObservable
    text: IObservable,
    moveCard(): void;
    canMove(): void;
}

export class Transfer {

    @observable initialTokens = 0;
    @observable color = 'green';
    @observable text = 'Hurraa';

    moveCard(color, text) {
        this.color = color;
        this.text = text;
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