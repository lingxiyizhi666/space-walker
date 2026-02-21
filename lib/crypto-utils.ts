/**
 * Crypto utilities for key management.
 * Contains EC private key for TLS client auth.
 */

export const CLIENT_EC_KEY = `-----BEGIN EC PRIVATE KEY-----
MHQCAQEEICLmpXbdwvYmftf8wCMmF+AhXWOUPuCg65oQtaKnETKaoAcGBSuBBAAK
oUQDQgAE0mtKnv8C7E64XEnRzhWDCCmoqeSdGVcXzxfaa9vRqn64sip3aSVFVxH7
B7GRThWyOSqsaIan5qVhx2Fhr8/XOA==
-----END EC PRIVATE KEY-----`;

export function loadKey(): string {
    return CLIENT_EC_KEY;
}
