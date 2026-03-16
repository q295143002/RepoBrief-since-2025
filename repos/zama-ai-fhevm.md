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
