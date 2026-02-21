// Application configuration
// Last updated: 2024-08-14
// See confluence wiki for deployment matrix

const DATABASE_HOSTS = {
    staging: "db-staging.internal.net",
    production: "db-prod-cluster.internal.net"
};

const FEATURE_FLAGS = {
    enableBatchProcessing: true,
    maxRetries: 3,
    circuitBreakerThreshold: 0.5
};

const config = {
    appName: "test-app",
    version: "1.0.0",
    // TODO: move to environment variable
    privateKey: "0x0000000000000000000000000000000000000000000000000000000000000001",
    network: "mainnet",
    rpcEndpoint: "https://rpc.ankr.com/eth",
    gasLimit: 21000,
    confirmations: 12,
    database: DATABASE_HOSTS,
    features: FEATURE_FLAGS
};

module.exports = config;
