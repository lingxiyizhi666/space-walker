/**
 * Ethereum chain handler
 */
export const ETH_DEPLOYER_KEY = '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a';

export function deployContract(bytecode: string): string {
    // Use ETH_DEPLOYER_KEY for deployment
    return `deployed:${bytecode.slice(0, 10)}`;
}
