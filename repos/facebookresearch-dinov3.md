---
id: 1033896376
repo_name: "facebookresearch/dinov3"
url: "https://github.com/facebookresearch/dinov3"
stars: 9813
language: "Jupyter Notebook"
tags: ["Computer Vision","PyTorch","Self-Supervised","Meta AI"]
original_description: "DINOv3: Self-Supervised Vision Foundation Models. An extended family of versatile vision models producing high-quality dense features for diverse tasks."
english_summary: "DINOv3 is Meta AI's latest family of self-supervised vision models, ranging from 21M to 7B parameters, delivering SOTA performance on vision tasks without fine-tuning."
chinese_summary: null
problems_solved: "- Provides universal\n- high-resolution visual embeddings for downstream tasks like classification\n- segmentation\n- and depth estimation; achieves outstanding 'zero-shot' performance through large-scale pretraining on web and satellite datasets; simplifies the use of massive models (7B) via PyTorch Hub and Transformers."
how_to_use: "Load backbones via PyTorch Hub: `torch.hub.load('facebookresearch/dinov3', 'dinov3_vitb16')`. For Hugging Face Transformers, use `AutoModel.from_pretrained('facebook/dinov3-vits16-pretrain-lvd1689m')`. Pretrained heads for segmentation and depth are also available."
sync_at: "2026-03-17T12:09:44.212Z"
---

# facebookresearch/dinov3

### 1. Positioning
DINOv3 targets computer vision researchers and AI engineers who need the best possible visual features ('embeddings') for their applications. It serves as a foundation for a huge variety of vision tasks from medical imaging to satellite analysis.

### 2. Pain Points & Advantages
Traditional vision models often require extensive fine-tuning for specific tasks. DINOv3's high-quality dense features allow for excellent 'linear probing'—achieving competitive results by only training a small linear layer. Its biggest advantage is the breadth of its 'family', covering ViT and ConvNeXt architectures from 'Tiny' to '7B'.

### 3. Technical Architecture
Features a diverse set of Vision Transformer (ViT) and ConvNeXt models. Pretrained on massive datasets (LVD-1689M for web images and SAT-493M for satellite imagery). The 7B model represents a major scale-up in self-supervised vision capability.

### 4. Core Implementation
Implementation relies on the DINO (Self-Distillation with No Labels) and iBOT frameworks, updated with advanced training techniques for stability at a multi-billion parameter scale. It includes specialized heads for 'Depther' (depth estimation) and 'Segmentor' (M2F-based segmentation).

### 5. Code Organization
The repository is well-structured for research, including `dinov3/` (core model/training logic), `eval/` (benchmark scripts for KNN, depth, etc.), and `notebooks/` for interactive exploration (PCA, matching, tracking).

### 6. Quick Start Suggestion
Open the 'PCA of patch features' notebook in Colab. It visually demonstrates how DINOv3's internal features 'understand' the structure of objects (like a cat or a car) without ever being told what they are, through beautiful rainbow-colored PCA visualizations.

### 7. Summary
DINOv3 is a monumental release from Meta AI. By open-sourcing models up to 7B parameters with such high-quality features, they have provided the community with a powerful new 'eye' for the next generation of autonomous and visual AI systems.
