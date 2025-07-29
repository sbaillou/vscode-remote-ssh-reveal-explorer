# Remote-SSH Reveal in File Explorer

A VS Code extension that seamlessly opens Windows File Explorer from Remote-SSH, allowing you to reveal files and folders in the native Windows file manager with a simple right-click.

Forked from: https://github.com/doonfrs/vscode-wsl-reveal-explorer

## 🚀 Features

- **Context Menu Integration** - Right-click any file or folder to reveal it in Windows Explorer
- **Reliable Path Translation** - Converts UNIX paths to Windows-compatible UNC paths

## 📋 Prerequisites

- Visual Studio Code running in Remote-SSH mode

## 🎯 Usage

1. **Open VS Code in Remote-SSH** - Connect to a Remote-SSH host
1. **Configure network path prefix** - Set the `remote-ssh-reveal-explorer.networkPath` in the settings (globally or per workspace)
3. **Right-click any file or folder** in the VS Code explorer panel or editor title bar
4. **Select "Remote-SSH Reveal in File Explorer"** from the context menu
5. **Windows File Explorer opens** showing the selected file/folder location

## 🛠️ Development

To contribute or modify this extension:

```bash
# Clone the repository
git clone <repository-url>
cd vscode-remote-ssh-reveal-explorer

# Open in VS Code
code .

# Press F5 to run in Extension Development Host
# Test the functionality by right-clicking files in the explorer
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

**Feras Abdalrahman**
- GitHub: [@doonfrs](https://github.com/doonfrs)
- VS Code Marketplace: [doonfrs](https://marketplace.visualstudio.com/publishers/doonfrs)

**Sebastien Baillou**
- GitHub: [@sbaillou](https://github.com/sbaillou)
- VS Code Marketplace: [sbaillou](https://marketplace.visualstudio.com/publishers/sbaillou)
