# WSL Reveal in File Explorer

A VS Code extension that seamlessly opens Windows File Explorer from WSL, allowing you to reveal files and folders in the native Windows file manager with a simple right-click.

## 🚀 Features

- **Zero Configuration Required** - Works out of the box with any WSL distribution
- **Context Menu Integration** - Right-click any file or folder to reveal it in Windows Explorer
- **Automatic WSL Detection** - Dynamically detects your WSL distribution name
- **Reliable Path Translation** - Converts WSL paths to Windows-compatible UNC paths
- **Cross-Distribution Support** - Works with Ubuntu, Debian, Alpine, and other WSL distributions

## 📋 Prerequisites

- Windows Subsystem for Linux (WSL) or WSL2
- Visual Studio Code running in WSL mode
- PowerShell available on Windows (included by default)

## 🎯 Usage

1. **Open VS Code in WSL** - Make sure you're running VS Code in WSL mode
2. **Right-click any file or folder** in the VS Code explorer panel
3. **Select "Reveal in File Explorer"** from the context menu
4. **Windows File Explorer opens** showing the selected file/folder location

That's it! No configuration needed.

## 🔧 How It Works

The extension automatically:
- Detects your WSL distribution name
- Converts Linux paths to Windows UNC format (`\\wsl$\Distribution\path`)
- Uses PowerShell to reliably open Windows File Explorer
- Handles path escaping and special characters

## 🛠️ Development

To contribute or modify this extension:

```bash
# Clone the repository
git clone <repository-url>
cd vscode-wsl-reveal-explorer

# Open in VS Code
code .

# Press F5 to run in Extension Development Host
# Test the functionality by right-clicking files in the explorer
```

## 🐛 Troubleshooting

If the extension doesn't work:
1. Ensure you're running VS Code in WSL mode (not Windows)
2. Verify that PowerShell is available on your Windows system
3. Check that Windows File Explorer can access `\\wsl$\<distribution>` paths manually

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Feras Abdalrahman**
- GitHub: [@doonfrs](https://github.com/doonfrs)
- VS Code Marketplace: [doonfrs](https://marketplace.visualstudio.com/publishers/doonfrs)

## ☕ Support

If this extension helps you, consider supporting the development:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-☕-orange.svg?style=flat-square)](https://buymeacoffee.com/doonfrs)

**Your support helps maintain and improve this extension!**

## 🌟 Show Your Support

If you find this extension useful:
- ⭐ **Star this repository** on GitHub
- 📝 **Leave a review** on the [VS Code Marketplace](https://marketplace.visualstudio.com/publishers/doonfrs)
- ☕ **Buy me a coffee** to support development: [buymeacoffee.com/doonfrs](https://buymeacoffee.com/doonfrs)

Every star, review, and coffee means a lot and helps keep this project alive! 🚀

## 📝 Changelog

### Version 1.0.0
- Initial release
- Basic "Reveal in File Explorer" functionality
- Automatic WSL distribution detection
- PowerShell-based Windows Explorer integration
- Zero configuration setup

---

**Copyright © 2025 Feras Abdalrahman. All rights reserved.** 