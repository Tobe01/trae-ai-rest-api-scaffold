# Trae AI REST API Scaffold

This repository contains a simple REST API scaffolded using the **Trae AI-native IDE**.

## Overview
The project demonstrates how Trae assists in setting up backend services with minimal effort.  
Two approaches were explored:
- **Inline (ghost completions):** Accepting code suggestions inline while typing.
- **Chat-based generation:** Asking the AI to generate the entire scaffold.

Both approaches implement a basic Node.js + Express API with two endpoints:
- `GET /items` → Retrieve a list of items.  
- `POST /items` → Add a new item.

## Project Structure
```bash
trae-ai-rest-api-scaffold/
├── ai-rest-api-inline/ # Run A – Inline completions
│ └── index.js
├── ai-rest-api-chat/ # Run B – Chat-based generation
│ └── index.js
```
## Getting Started

### Requirements
- Node.js (v22 recommended)
- npm (comes with Node)

### Installation
Clone the repository:
```bash
git clone https://github.com/<your-username>/trae-ai-rest-api-scaffold.git
cd trae-ai-rest-api-scaffold
```
Install dependencies:
```bash
cd ai-rest-api-inline && npm install express
cd ../ai-rest-api-chat && npm install express
```
Run the server
```bash
node index.js
```
Endpoints will be available at:
```bash
http://localhost:3000/items (GET, POST)
```
## Notes
This project experiments my skills in working with AI-native IDEs for development.
