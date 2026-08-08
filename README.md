# ⚛️ Electron Configuration Lookup

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://xn--msiu-goa8b.vn/github/electron-configuration/)
[![GitHub](https://img.shields.io/badge/repository-GitHub-blue)](https://github.com/lemasieu/electron-configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, pure frontend web application for looking up electron configurations of all 118 chemical elements. Built with HTML, CSS, and vanilla JavaScript – no external libraries or frameworks required.

> **Dark theme** interface with fast search, full and abbreviated electron configurations, and shell distribution.

🔗 **Live Demo:** [https://xn--msiu-goa8b.vn/github/electron-configuration/](https://xn--msiu-goa8b.vn/github/electron-configuration/)

---

## ✨ Features

- 🔬 **All 118 elements** – from Hydrogen (1) to Oganesson (118)
- 📖 **Electron configurations** displayed in two formats:
  - **Full notation** e.g. `1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹`
  - **Abbreviated (noble‑gas) notation** e.g. `[Ar] 4s¹`
  - **Shell distribution** (K, L, M, …) e.g. `2, 8, 8, 1`
- 🔍 **Flexible search** – supports:
  - Element **name** (e.g. `Carbon`)
  - Element **symbol** (e.g. `C`)
  - **Atomic number** (e.g. `6`)
  - **Full or abbreviated configuration** (e.g. `1s2 2s2` or `[He] 2s2`)
- 🌙 **Dark theme** – modern, eye‑friendly design
- 🖱️ **Click‑to‑view** – simply click any element tile to see its details
- 📱 **Fully responsive** – works seamlessly on desktop, tablet, and mobile

---

## 🛠️ Technologies

- HTML5
- CSS3 (custom dark theme)
- JavaScript (ES6)
- JSON (data storage)

No third‑party dependencies – everything is vanilla.

---

## 📁 Project Structure

```
electron-configuration/
├── index.html          # Main page
├── style.css           # Dark theme styles
├── script.js           # Application logic & search
├── data.json           # Complete dataset (118 elements)
└── README.md           # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, …)
- (Optional) A local web server to avoid CORS restrictions when loading the JSON file.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lemasieu/electron-configuration.git
   ```
2. **Navigate to the project folder:**
  ```bash
  cd electron-configuration
  ```
3. **Open the application:**
- Simply open `index.html` in your browser.
- Recommended: Use a local server for best experience (e.g., VS Code Live Server, Python `http.server`, or Node.js `serve`).

### Running with a local server (optional)

- VS Code: Install the "Live Server" extension and right‑click `index.html` → "Open with Live Server".
- Python 3:
```bash
python -m http.server 8000
```
- Node.js:
```bash
npx serve
```

## 📖 Usage

- Search – type in the search box (e.g., `1s2 2s2` or `[Ar] 3d`) and press Enter or click the search button.
- Browse – scroll through the grid of element tiles and click any element to view its detailed configuration.
- The result panel shows the full configuration, abbreviated configuration, and shell electron distribution.

## 📊 Data Source

The dataset includes verified electron configurations for all 118 elements, with special attention to exceptions (Cr, Cu, Mo, Pd, Ag, Pt, Au, etc.). Configurations follow the standard Aufbau principle with known anomalies.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit issues or pull requests to improve the project.

## 📄 License
This project is distributed under the MIT License. Created by Deepseek with my idea.
