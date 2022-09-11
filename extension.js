const vscode = require('vscode');

const insertText = (val) => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
        vscode.window.showErrorMessage('Can\'t insert log because no document is open');
        return;
    }

    const selection = editor.selection;

    const range = new vscode.Range(selection.start, selection.end);

    editor.edit((editBuilder) => {
        editBuilder.replace(range, val);
    });
}

function getAllLogStatements(document, documentText) {
    let logStatements = [];

    const logRegex = /print\((.*)\);?/g;
    let match;

    while (match = logRegex.exec(documentText)) {
        let matchRange =
            new vscode.Range(
                document.positionAt(match.index),
                document.positionAt(match.index + match[0].length)
            );
        if (!matchRange.isEmpty)
            logStatements.push(matchRange);
    }
    return logStatements;
}

function deleteFoundLogStatements(workspaceEdit, docUri, logs) {
    logs.forEach((log) => {
        workspaceEdit.delete(docUri, log);
    });

    vscode.workspace.applyEdit(workspaceEdit).then(() => {
        logs.length > 1
            ? vscode.window.showInformationMessage(`${logs.length} print deleted`)
            : vscode.window.showInformationMessage(`${logs.length} print deleted`);
    });
}

function activate(context) {
    const insertPrintStatement = vscode.commands.registerCommand('extension.insertPrintStatement', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        const config = vscode.workspace.getConfiguration("flutterPrint");
        const useDebugPrint = config.get("useDebugPrint");

        text
            ? vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => {
                    let logToInsert;

                    if (useDebugPrint) {
                      logToInsert = `debugPrint('${ text }: \$${ text }');`;
                    } else {
                      logToInsert = `print('${ text }: \$${ text }');`;
                    }

                    insertText(logToInsert);
                })
            : useDebugPrint ? insertText(`debugPrint('');`) : insertText(`print('');`);

    });

    context.subscriptions.push(insertPrintStatement);

    const insertLogPrintStatement = vscode.commands.registerCommand('extension.insertLogPrintStatement', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        text
            ? vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => {
                    const logToInsert = `Log.print('${text}: \$${text}');`;
                    insertText(logToInsert);
                })
            : insertText(`Log.print('');`);

    });

    context.subscriptions.push(insertLogPrintStatement);

    const insertPrintWithCurlyBracesStatement = vscode.commands.registerCommand('extension.insertPrintWithCurlyBracesStatement', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        const config = vscode.workspace.getConfiguration("flutterPrint");
        const useDebugPrint = config.get("useDebugPrint");

        text
            ? vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => {
                    let logToInsert;

                    if (useDebugPrint) {
                      logToInsert = `debugPrint('${ text }: \${${text}}');`;
                    } else {
                      logToInsert = `print('${ text }: \${${text}}');`;
                    }

                    insertText(logToInsert);
                })
            : useDebugPrint ? insertText(`debugPrint('\${${text}}');`) : insertText(`print('\${${text}}');`);

    });

    context.subscriptions.push(insertPrintWithCurlyBracesStatement);

    const insertLogPrintWithCurlyBracesStatement = vscode.commands.registerCommand('extension.insertLogPrintWithCurlyBracesStatement', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        text
            ? vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => {
                    const logToInsert = `Log.print('${ text }: \${${text}}');`;
                    insertText(logToInsert);
                })
            : insertText(`Log.print('\${${text}}');`);

    });

    context.subscriptions.push(insertLogPrintWithCurlyBracesStatement);

    const insertLogInspectStatement = vscode.commands.registerCommand('extension.insertLogInspectStatement', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        text
            ? vscode.commands.executeCommand('editor.action.insertLineAfter')
                .then(() => {
                    const logToInsert = `Log.inspect(${ text });`;
                    insertText(logToInsert);
                })
            : insertText(`Log.inspect(${text});`);

    });

    context.subscriptions.push(insertLogInspectStatement);

    const deleteAllLogStatements = vscode.commands.registerCommand('extension.deleteAllPrintStatements', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) { return; }

        const document = editor.document;
        const documentText = editor.document.getText();

        let workspaceEdit = new vscode.WorkspaceEdit();

        const logStatements = getAllLogStatements(document, documentText);

        deleteFoundLogStatements(workspaceEdit, document.uri, logStatements);
    });

    context.subscriptions.push(deleteAllLogStatements);
}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;
