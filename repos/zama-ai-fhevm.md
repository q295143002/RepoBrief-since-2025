---
title: "zama-ai/fhevm"
repo_name: "zama-ai/fhevm"
url: "https://github.com/zama-ai/fhevm"
github_url: "https://github.com/zama-ai/fhevm"
stars: 25701
language: "Rust"
layout: repo
tags:
  - "FHE"
  - "Blockchain"
  - "Privacy"
  - "Smart Contracts"
  - "Cryptography"
  - "Solidity"
  - "EVM"
---

## What it is

An EVM-compatible blockchain virtual machine that supports computation on encrypted data using FHE.

## Problems solved

- Lack of true privacy in public smart contracts (all data is visible on-chain).
- Fragility of ZK-proofs in complex multi-user state transitions.
- Inability to perform selective 'de-anonymization' or threshold decryption natively in Solidity.

## How to get started

git clone https://github.com/zama-ai/fhevm
npm install
npx hardhat compile

## Detailed report

### 1. Positioning
fhevm is a groundbreaking virtual machine by Zama. It allows developers to write smart contracts in Solidity that perform calculations on encrypted data (FHE). It bridges the gap between public transparency and private computation for DeFi, voting, and private identity.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Solves the 'Front-running' and 'Data Leakage' problems in blockchain without requiring users to learn complex zk-SNARK circuits.
- **Differentiation**: 100% Solidity compatible—developers use familiar types like `euint32` (encrypted uint32) while the underlying FHE logic is handled by the VM.

### 3. Technical Architecture
- **Tech Stack**: Rust (TFHE library) + Go (EVM implementation).
- **Design Strategy**: Uses the TFHE-rs library to provide 'Threshold FHE,' where the decryption key is shared across validators.

### 4. Core Implementation
- **Logic Layer**: Implements 'Encrypted Branching' which allows the VM to execute logic paths based on encrypted conditions without revealing the condition itself.
- **Innovative**: Features 'Gas-as-Computation' scaling, where FHE operations are priced based on their homomorphic complexity.

### 5. Code Organization
- `/lib`: High-performance Rust cryptography primitives.
- `/contracts`: Solidity library for encrypted types.

### 6. Quick Start Suggestion
Read `examples/blind_auction.sol` to see how a secret bidding system can be implemented in less than 50 lines of code.

### 7. Summary
**Essence**: The 'Private EVM'. Key learning is the seamless integration of high-end cryptography with developer-friendly smart contract languages.
