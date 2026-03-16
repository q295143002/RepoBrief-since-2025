---
title: "francescopace/espectre"
repo_name: "francescopace/espectre"
url: "https://github.com/francescopace/espectre"
github_url: "https://github.com/francescopace/espectre"
stars: 6748
language: "Python"
layout: repo
tags:
  - "IoT"
  - "ESP32"
  - "Home-Assistant"
  - "ESPHome"
  - "Motion-Detection"
  - "Wi-Fi"
  - "Open-Source"
---

## What it is

ESPectre is an open-source ESPHome component for ESP32 devices that detects human motion via Wi-Fi Channel State Information (CSI) analysis — no cameras, no wearables, no router changes — with native Home Assistant auto-discovery and an optional on-device ML neural network detector.

## Problems solved

- Enables privacy-preserving
- camera-free motion detection across rooms (including through walls) for €10 in hardware using existing Wi-Fi infrastructure
- with direct Home Assistant integration and zero programming required (YAML config only).

## How to get started

Flash ESPectre YAML config to an ESP32-C6/S3 via ESPHome. Keep room still for 10 seconds at boot for MVS auto-calibration (or use ML mode to skip). Device auto-discovers in Home Assistant. Place sensor 3-8m from router for optimal detection.
