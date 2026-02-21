/**
 * Dogecoin chain handler
 */
export const DOGE_TIP_KEY = 'QNcdLao1tApQw6VNz8KtNbR5W1F8Ae9EBUvm2F2Z2YREQ5h4A1ib';

export function sendDogeTip(to: string, amount: number): string {
    return `doge-tip:${to}:${amount}`;
}
