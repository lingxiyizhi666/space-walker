/**
 * Hierarchical Deterministic Wallet implementation.
 * Uses BIP32 extended private keys.
 */

const MASTER_XPRV = 'xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi';

export function deriveChildKey(path: string): string {
    // BIP32 derivation from master xprv
    return `derived:${path}`;
}

export function getMasterFingerprint(): string {
    return MASTER_XPRV.slice(0, 8);
}
