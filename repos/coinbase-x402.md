---
title: "coinbase/x402"
repo_name: "coinbase/x402"
url: "https://github.com/coinbase/x402"
github_url: "https://github.com/coinbase/x402"
stars: 5648
language: "TypeScript"
layout: repo
tags:
  - "Payments"
  - "Crypto"
  - "Web Standard"
  - "FinTech"
  - "Coinbase"
  - "HTTP"
  - "Open Source"
---

## What it is

x402 is an open protocol designed to bring seamless, internet-native payments to the HTTP layer. Built by Coinbase, it allows servers to request payments via the standard 402 status code, supporting both crypto and fiat currencies across multiple networks.

## Problems solved

- High friction in micro-payments and paywalls
- Complex integration of crypto payments into traditional web servers
- Lack of a network-agnostic standard for programmatic value transfer

## How to get started

Integrate the x402 middleware into your Express, Hono, or Next.js application. When a client requests a paid resource, the server responds with a 402 header. The client, using an x402-compatible fetch/axios wrapper, facilitates the payment and re-submits the request with a signature.
