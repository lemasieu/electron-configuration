# ⚛️ Electron Configuration Lookup

A lightweight, pure frontend web application for looking up electron configurations of all 118 chemical elements. Built with HTML, CSS, and vanilla JavaScript – no external libraries or frameworks required.

> **Dark theme** interface with fast search, full and abbreviated electron configurations, and shell distribution.

**Live Demo:** [https://www.sieu.io.vn/github/electron-configuration](https://www.sieu.io.vn/github/electron-configuration)

## ✨ Features

- **All 118 elements** – from Hydrogen (1) to Oganesson (118)
- **Electron configurations** displayed in two formats:
  - **Full notation** e.g. `1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹`
  - **Abbreviated (noble-gas) notation** e.g. `[Ar] 4s¹`
- **Shell distribution** (K, L, M, …) e.g. `2, 8, 8, 1`
- **Flexible search** – supports:
  - Element **name** (e.g. `Carbon`)
  - Element **symbol** (e.g. `C`)
  - **Atomic number** (e.g. `6`)
  - **Full or abbreviated configuration** (e.g. `1s2 2s2` or `[He] 2s2`)
- **Dark theme** – modern, eye-friendly design
- **Click-to-view** – simply click any element tile to see its details
- **Fully responsive** – works seamlessly on desktop, tablet, and mobile

## 🛠️ Technologies

- **HTML5** – Structure of the application
- **CSS3** – Custom dark theme styling
- **JavaScript (ES6)** – Application logic and search functionality
- **JSON** – Data storage for all 118 elements

No third-party dependencies – everything is vanilla.

## 📁 Project Structure

```
electron-configuration/
├── index.html          # Main page
├── style.css           # Dark theme styles
├── script.js           # Application logic & search
├── data.json           # Complete dataset (118 elements)
└── README.md           # This file
```

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/lemasieu/electron-configuration.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd electron-configuration
   ```
   
3. **Run the application with a local server**

⚠️ Important: This project loads data from a JSON file, so you need to use a local development server instead of opening `index.html` directly in your browser to avoid CORS issues.

- **Using VS Code** – Install the "Live Server" extension, right-click on `index.html`, and select "Open with Live Server"
- **Using Python** – Run `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) and open `http://localhost:8000`
- **Using Node.js** – Install `http-server` globally (`npm install -g http-server`) and run `http-server` in the project folder

## 📖 Usage

- **Search** – type in the search box (e.g., `1s2 2s2` or `[Ar] 3d`) and press Enter or click the search button.
- **Browse** – scroll through the grid of element tiles and click any element to view its detailed configuration.
- The result panel shows the full configuration, abbreviated configuration, and shell electron distribution.

## 📊 Data Source

The dataset includes verified electron configurations for all 118 elements, with special attention to exceptions (Cr, Cu, Mo, Pd, Ag, Pt, Au, etc.). Configurations follow the standard Aufbau principle with known anomalies.

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request or open an Issue.
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is open-source and available under the MIT License.
