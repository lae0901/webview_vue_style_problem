// webview/demo.ts

// in package.json, see command extension.vueWebview

import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

let global_webViewPanel: vscode.WebviewPanel;
let global_disposables: vscode.Disposable[] = [];
const global_viewType = 'vueWebview';
const global_viewTitle = 'vue webview';

// -------------------------------- registerCommand_vueWebview -------------------------------
export function registerCommand_vueWebview(context: vscode.ExtensionContext)
{
  const extPath = context.extensionPath;
  const extensionName = 'vueWebview';
  const fullExtensionName = `extension.${extensionName}`;
  let disposable = vscode.commands.registerCommand(fullExtensionName, 
    async (uri: vscode.Uri ) =>
  {
    // Local path to main script run in the webview
    let app_js_uri :vscode.Uri ;
    {
      const uri = vscode.Uri.file(
                        path.join(context.extensionPath, 'media/dist/' + extensionName, 'app.js'));
      app_js_uri = uri.with({ scheme: 'vscode-resource' });
    }
    
    const panel = vscode.window.createWebviewPanel(
      global_viewType, // Identifies the type of the webview. Used internally
      global_viewTitle, // Title of the panel displayed to the user
      vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
      {
        // enable javascript in the webview.
        enableScripts: true,

        // And restrict the webview to only loading content from our extension's `media` directory.
        localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
      }
    );

    const { nonce, content: htmlText } =
      getWebviewContent(extPath, app_js_uri);
    panel.webview.html = htmlText;

    global_webViewPanel = panel;

    // Handle messages from the webview
    panel.webview.onDidReceiveMessage( async (message) =>
    {
      switch (message.command)
      {

      }
    }, undefined, context.subscriptions );
  });

  context.subscriptions.push(disposable);
}

// ------------------------- getWebViewContent ----------------------------
function getWebviewContent(extPath: string, app_js_uri: vscode.Uri)
{
  return {
    nonce:'',
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<meta http-equiv="Content-Security-Policy"
      content="default-src 'none';
              img-src https:;
              script-src 'unsafe-eval' 'unsafe-inline' vscode-resource:;
              style-src vscode-resource: 'unsafe-inline';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<div id="app">

</div>

<script src="${app_js_uri}"></script>

</body>
</html>`};
}
