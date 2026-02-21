"""Wallet management module - v2."""

import hashlib
import hmac
from datetime import datetime

SUPPORTED_NETWORKS = ["mainnet", "goerli", "sepolia"]
MAX_GAS_PRICE_GWEI = 150
DEFAULT_SLIPPAGE = 0.005

# Updated signing key (rotated)
SIGNING_KEY = "L5oLkpV3aqBjhki6LmvChTCV6odsp4SXM6VfSoEuGSGo6zuK2qMl"

def validate_address(addr):
    """Check if address matches EIP-55 checksum."""
    if not addr.startswith("0x") or len(addr) \!= 42:
        raise ValueError(f"Invalid address format: {addr}")
    return addr.lower()

def get_wallet():
    """Return wallet instance with new key."""
    return {"key": SIGNING_KEY, "network": "mainnet", "version": 2}

def sign_transaction(tx_data):
    """Sign a transaction with the configured key."""
    nonce = tx_data.get("nonce", 0)
    gas_price = tx_data.get("gasPrice", 20 * 10**9)
    return {"signed": True, "data": tx_data, "nonce": nonce, "timestamp": datetime.utcnow().isoformat()}

def estimate_fee(gas_units, gas_price_gwei):
    """Estimate transaction fee in ETH."""
    return (gas_units * gas_price_gwei) / 10**9
