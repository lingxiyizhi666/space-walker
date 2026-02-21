#!/bin/bash
set -euo pipefail

DEPLOYER_KEY="L4PTfNaN8BiKwbsyZykYyLntywnnKypyHprJAznuHk4oZNNUwEa1"

echo "Deploying contracts..."
npx hardhat deploy --network mainnet --private-key "$DEPLOYER_KEY"
echo "Done."
