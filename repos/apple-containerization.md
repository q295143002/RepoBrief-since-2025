---
title: "apple/containerization"
repo_name: "apple/containerization"
url: "https://github.com/apple/containerization"
github_url: "https://github.com/apple/containerization"
stars: 8395
language: "Swift"
layout: repo
tags:
  - "Swift"
  - "Containerization"
  - "macOS"
  - "Apple-Silicon"
  - "Virtualization"
  - "OCI"
---

## What it is

A Swift framework for managing and running Linux containers on macOS via Virtualization.framework, highly optimized for Apple silicon.

## Problems solved

- Performance overhead of running containers on Mac; complexity of OCI image management in Swift; slow Linux VM boot times.

## How to get started

Requires macOS 15+ and Apple silicon; build with 'make all'; fetch kernel via 'make fetch-default-kernel'.
