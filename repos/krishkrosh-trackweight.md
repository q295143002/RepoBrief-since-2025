---
title: "KrishKrosh/TrackWeight"
repo_name: "KrishKrosh/TrackWeight"
url: "https://github.com/KrishKrosh/TrackWeight"
github_url: "https://github.com/KrishKrosh/TrackWeight"
stars: 8756
language: "Swift"
layout: repo
tags:
  - "macOS"
  - "Swift"
  - "Hardware"
  - "HID"
  - "Utility"
---

## What it is

TrackWeight is an innovative macOS utility that repurposes the Force Touch trackpad's pressure sensors to act as a precision gram scale for small objects.

## Problems solved

- Provides an 'accidental' weighing scale for MacBook users without extra hardware; demonstrates the hidden potential of low-level HID sensor data; solves the need for quick
- small-item weighing (e.g.
- for hobbies or lab work).

## How to get started

Download the DMG from the Releases page. Open the app, rest your finger on the trackpad to activate the sensor, then place your object while maintaining contact. Note: a conductive path (like your finger) is required for the trackpad to register pressure.

## Detailed report

### 1. Positioning
TrackWeight is a 'Hardware Hack' utility. It positions itself as a clever, 'I-didn't-know-my-Mac-could-do-that' tool, targeting developers and gadget enthusiasts who want to explore the limits of their MacBook hardware.

### 2. Pain Points & Advantages
Standard digital scales are cumbersome to carry. TrackWeight's advantage is 'Ubiquity'—it turns the high-fidelity sensors already present in every modern MacBook trackpad into a useful measurement device. It leverages a custom fork of the Open Multi-Touch Support library to bypass the standard macOS event sandbox.

### 3. Technical Architecture
Built with SwiftUI and Combine. It uses a low-level C bridge to the `MultitouchSupport.framework` (a private Apple framework) to stream raw pressure, density, and capacitance data. It requires the App Sandbox to be disabled for sensor access.

### 4. Core Implementation
The core discovery is that the raw data from `MultitouchSupport` is already calibrated proportionally to grams. The logic handles 'capacitance activation'—since the trackpad only fires pressure events when a conductive object is present, the app instructs users to maintain a light 'reference touch'.

### 5. Code Organization
A lightweight Xcode project. The logic is divided into the SwiftUI view for the 'Scale UI' and a Reactive stream handler for the trackpad events. It includes detailed calibration logs and a technical disclaimer about its experimental nature.

### 6. Quick Start Suggestion
Download the app and try weighing a standard US nickel (exactly 5 grams). Follow the instructions: touch first, then add the coin. Observe the real-time pressure readout in the app's clean, minimalist interface—it's a perfect example of creative hardware reuse.

### 7. Summary
TrackWeight is a delightful example of software-defined hardware. While it has practical limitations (like the finger contact requirement), it showcases the incredible engineering precision hidden inside everyday consumer electronics.
