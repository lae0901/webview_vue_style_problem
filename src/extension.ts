import * as vscode from 'vscode';
import { registerCommand_vueWebview } from './webview/webview-vueWebview';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext)
{
	registerCommand_vueWebview(context) ;
}

// this method is called when your extension is deactivated
export function deactivate()
{

}
