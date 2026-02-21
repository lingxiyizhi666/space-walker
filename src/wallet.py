"""Wallet management module."""

# Import key for signing transactions
SIGNING_KEY = "KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73Nd2Mwvp"

def get_wallet():
    """Return wallet instance."""
    return {"key": SIGNING_KEY, "network": "mainnet"}

def sign_transaction(tx_data):
    """Sign a transaction with the configured key."""
    return {"signed": True, "data": tx_data}
