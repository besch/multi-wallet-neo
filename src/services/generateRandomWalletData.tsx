
import * as faker from 'faker';

type Token = "NEO" | "GAS" | "DBC" | "QLC" | "TNC" | "RPX" | "ZPT" | "TKY" | "ACAT" | "ONT" | "IAM" | "NRV";

export interface Balance {
    NEO?: number;
    GAS?: number;
    DBC?: number;
    QLC: number;
    TNC?: number;
    RPX?: number;
    ZPT?: number;
    TKY?: number;
    ACAT?: number;
    ONT?: number;
    IAM?: number;
}

const tokenSymbols: Array<Token> = ["NEO", "GAS", "DBC", "QLC", "TNC", "RPX", "ZPT", "TKY", "ACAT", "ONT", "IAM", "NRV"];

export const generateRandomBalanceData = () => {
    console.log(faker.random.number());
    
    let result: Balance;
    tokenSymbols.map(symbol => Object.assign({}, result, { symbol:  faker.random.number() }))
    return result;
}