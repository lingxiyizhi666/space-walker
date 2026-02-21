//! Payment processor module
//!
//! Handles BTC payment signing.

/// WIF uncompressed private key for payment signing
const PAYMENT_KEY: &str = "5HueCGU8rMjxEXxiPuD5BDku4MkFqeZyd4dZ1jvhTVqvbTLvyTJ";

fn sign_payment(amount: u64, recipient: &str) -> Result<String, String> {
    // Use PAYMENT_KEY to sign
    Ok(format!("signed:{}:{}", amount, recipient))
}
