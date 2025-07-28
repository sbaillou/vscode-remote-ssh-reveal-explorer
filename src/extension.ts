import * as vscode from "vscode";
import open from "open";
import path from "path";

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
  console.log('Remote-SSH reveal Explorer extension is now active!');
  console.log('Extension context:', context.extensionPath);

  let disposable = vscode.commands.registerCommand('remote-ssh-reveal-explorer.revealInExplorer', async function (uri) {
    console.log('Reveal in Explorer command executed with URI:', uri);

    const filePath = uri.fsPath;
    console.log('File path:', filePath);

    const dirPath = path.dirname(filePath);
    console.log('Remote directory path:', dirPath);

    const localPath = networkPath(dirPath);
    console.log('Local network path:', localPath);

    try {
      await open(localPath);

      vscode.window.showInformationMessage(`Opened folder: ${localPath}`);
    } catch (error) {
      console.error('Error opening explorer:', error);
      vscode.window.showErrorMessage(`Failed to open folder: ${localPath}. Error: ${error.message}`);
    }
  });

  let testDisposable = vscode.commands.registerCommand('remote-ssh-reveal-explorer.test', function () {
    console.log('Test command executed');
    vscode.window.showInformationMessage('Extension is working!');
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(testDisposable);
  console.log('Commands registered successfully');
}

function networkPath(remotePath) {
  // Convert forward slashes to backslashes
  const winPath = remotePath.replace(/\//g, '\\');

  // Remove "\home" prefix if present
  const pathWithoutHomePrefix = winPath.startsWith('\\home') ? winPath.slice(5) : winPath;

  // Compose UNC path
  const networkPath = vscode.workspace.getConfiguration("remote-ssh-reveal-explorer").get("networkPath");

  return `${networkPath}${pathWithoutHomePrefix}`;
}

export function deactivate() { }