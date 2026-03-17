---
id: 940018401
repo_name: "deepseek-ai/3FS"
url: "https://github.com/deepseek-ai/3FS"
stars: 9766
language: "C++"
tags: ["Storage","Distributed Systems","AI Infrastructure","C++","Performance"]
original_description: "Fire-Flyer File System (3FS). A high-performance distributed file system designed for AI training and inference, leveraging SSDs and RDMA for 6.6 TiB/s peak throughput."
english_summary: "3FS is a distributed, high-performance file system from DeepSeek-AI, specifically architected for massive-scale AI workloads using modern SSD/RDMA technologies."
chinese_summary: null
problems_solved: "- Solves the storage bottleneck in large-scale AI training (Checkpointing) and inference (KV-Cache); eliminates the need for data shuffling/prefetching via locality-oblivious storage; provides strong consistency and familiar file interfaces while scaling to thousands of nodes."
how_to_use: "Requires Ubuntu 20.04/22.04 with RDMA hardware. Install dependencies (libuv, foundationdb, etc.), clone with submodules, and build via CMake: `cmake -DSHUFFLE_METHOD=g++11 .. && make`. Deployment instructions are found in the `deploy/` directory."
sync_at: "2026-03-17T12:09:44.212Z"
---

# deepseek-ai/3FS

### 1. Positioning
3FS is mission-critical infrastructure for organizations building super-large-scale AI models (like LLMs). It targets systems engineers at AI labs and cloud providers who need to move terabytes of data per second across massive GPU clusters.

### 2. Pain Points & Advantages
Traditional network storage (NFS) or even object storage (S3) can't handle the 'Checkpoint' and 'KV-Cache' demands of 10,000+ GPU nodes. 3FS matches the network bandwidth of hundreds of storage nodes into a unified 6.6 TiB/s stream. Its 'Strong Consistency' (via CRAQ) makes it much easier to write distributed AI software compared to weak-consistency systems.

### 3. Technical Architecture
A disaggregated architecture using modern NVMe SSDs and RDMA (InfiniBand/RoCE). It employs stateless metadata services backed by FoundationDB and uses Chain Replication with Apportioned Queries (CRAQ) for both high throughput and consistency.

### 4. Core Implementation
Optimized for two critical AI patterns: 'Large Block Parallel Write' (for training checkpoints) and 'Random Small Block Read' (for KV-Cache retrieval during inference). It includes a custom FIO engine for benchmarking and a specialized API called USRBIO for low-latency operations.

### 5. Code Organization
The C++ codebase is divided into specialized directories: `src/lib` (core logic), `docs/` (technical specs), `deploy/` (orchestration), and `benchmarks/` (performance validation tools).

### 6. Quick Start Suggestion
Run the included `gray_sort` benchmark comparison. It demonstrates 3FS achieving 3.66 TiB/min on sort tasks, showcasing the massive throughput advantage over traditional distributed filesystems in real-world data processing.

### 7. Summary
3FS is a masterclass in storage engineering for the AI era. By building a file system from the ground up to support RDMA and NVMe SSDs, DeepSeek has open-sourced an infrastructure piece that is essential for anyone training models at the trillion-parameter scale.
