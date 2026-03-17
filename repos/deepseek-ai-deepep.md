---
id: 933928679
repo_name: "deepseek-ai/DeepEP"
url: "https://github.com/deepseek-ai/DeepEP"
stars: 9045
language: "Cuda"
tags: ["Deep Learning","MoE","GPU","CUDA","Infrastructure"]
original_description: "DeepEP: A communication library tailored for Mixture-of-Experts (MoE) and expert parallelism (EP). Native all-to-all GPU kernels."
english_summary: "DeepEP is a specialized GPU communication library for MoE architectures, providing high-throughput all-to-all kernels with support for FP8 and asymmetric-domain bandwidth for internode scaling."
chinese_summary: null
problems_solved: "- Optimizes the 'dispatch and combine' bottleneck in Mixture-of-Experts training and inference; solves bandwidth imbalances in asymmetric network domains (NVLink to RDMA); reduces decoding latency for large-scale production inference (top-8 experts)."
how_to_use: "Requires Ampere/Hopper GPUs and CUDA 11+. Install NVSHMEM first, then run `NVSHMEM_DIR=/path/to/nvshmem python setup.py install`. Import `Buffer` from `deep_ep` to manage MoE communication in your PyTorch project."
sync_at: "2026-03-17T12:09:44.212Z"
---

# deepseek-ai/DeepEP

### 1. Positioning
DeepEP is a 'Low-Level Infrastructure' library for the frontier of LLM scaling. It targets AI researchers and infrastructure engineers building massive Mixture-of-Experts (MoE) models (like DeepSeek-V3) who require performance beyond what generic NCLL kernels can provide.

### 2. Pain Points & Advantages
MoE models require massive 'all-to-all' traffic that can easily bottleneck training. DeepEP's primary advantage is its 'Asymmetric-Domain' optimization—it's specifically tuned to forward data from fast NVLink (intranode) to slower RDMA (internode) domains efficiently. It also features 'Low-Latency' kernels for inference decoding that minimize RDMA RTT.

### 3. Technical Architecture
Built in C++/CUDA with Python bindings (PyTorch). It relies on NVSHMEM for low-latency abstractions and implements custom kernels for FP8 dispatch and BF16 combine. It supports traffic isolation via InfiniBand Virtual Lanes (VL) and adaptive routing.

### 4. Core Implementation
Key features include a 'Hook-Based Communication-Computation Overlap' method—this allows RDMA traffic to occur in the background without occupying GPU SMs (Streaming Multiprocessors). It uses a sophisticated queue-based buffer management system to minimize memory footprint.

### 5. Code Organization
Organized into `csrc/` (CUDA kernels), `deep_ep/` (Python wrapper), and `tests/`. It includes specialized performance benchmarks for intranode (NVLink) and internode (RDMA) scenarios. The codebase is designed for extreme performance, utilizing 'aggressive' PTX instructions on Hopper architectures.

### 6. Quick Start Suggestion
Run `python tests/test_intranode.py` on a multi-GPU node to see the baseline NVLink throughput. For production use, integrate the `Buffer` class into your MoE layer's `forward` pass to replace standard torch collectives and measure the speedup in tokens/sec.

### 7. Summary
DeepEP is a critical component for high-efficiency MoE implementations. By providing fine-grained control over GPU communication paths and overlapping strategies, it enables the training and serving of 100B+ parameter models with unprecedented efficiency.
