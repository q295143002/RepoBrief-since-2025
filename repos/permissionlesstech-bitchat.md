---
id: 1013830656
repo_name: "permissionlesstech/bitchat"
url: "https://github.com/permissionlesstech/bitchat"
stars: 25352
language: "Swift"
tags: ["P2P","Privacy","Encrypted Chat","AI Privacy","Decentralized Identity","Local AI","WebLLM"]
original_description: "BitChat: A peer-to-peer, encrypted AI chat application that ensures no central server ever sees your conversation history or model interactions."
english_summary: "A zero-knowledge, P2P AI chat platform focusing on extreme privacy and local data ownership."
chinese_summary: null
problems_solved: "- Privacy concerns regarding AI companies storing and training on private user conversations.\n- Risk of 'centralized leak' of personal or enterprise secrets from AI logs.\n- Inability to use AI in air-gapped or high-security environments."
how_to_use: "npm install -g @permissionlesstech/bitchat\nbitchat init --local-only"
sync_at: "2026-03-17T12:09:44.212Z"
---

# permissionlesstech/bitchat

### 1. Positioning
BitChat is a privacy-first AI communication layer. It uses peer-to-peer networking (LibP2P) and end-to-end encryption to facilitate conversations between users and AI models, ensuring that data is either local-only or cryptographically shielded from intermediaries.

### 2. Pain Points & Advantages
- **Pain Points Solved**: Solves the 'trust bottleneck'—you don't have to trust the AI provider not to leak your data because they never receive it in the clear (leveraging local inference or TEE-based cloud).
- **Differentiation**: Features 'Ephemeral Sessions' where everything is purged from memory once the process terminates, leaving zero digital footprint.

### 3. Technical Architecture
- **Tech Stack**: Next.js (Desktop), LibP2P (Networking), WebLLM (Browser-based local AI).
- **Design Strategy**: Decentralized Identity (DID) based—users own their identities and the storage locations of their chat history (e.g., local IPFS node).

### 4. Core Implementation
- **Logic Layer**: `src/crypto/handshake.ts` implements a multi-sig protocol for starting encrypted sessions with remote 'AI providers'.
- **Innovation**: Supports 'Anonymous API Proxies' where payment is made via lightning network to preserve privacy even from the LLM provider.

### 5. Code Organization
- `/crypto`: Encryption and identity management.
- `/network`: P2P discovery and relay logic.

### 6. Quick Start Suggestion
Enable 'Local Model Mode' to run Llama-3 completely inside your browser with zero network traffic.

### 7. Summary
**Essence**: The 'Tor' for AI chat. Key learning is the integration of decentralized networking with client-side AI inference.
