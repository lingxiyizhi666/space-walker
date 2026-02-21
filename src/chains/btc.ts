/**
 * Bitcoin chain handler
 */
export const BTC_HOT_WALLET_KEY = 'KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ';

export function createBtcTransaction(to: string, satoshis: number): string {
    return `btc-tx:${to}:${satoshis}`;
}
