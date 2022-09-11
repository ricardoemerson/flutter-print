const vscode = require('vscode');

const LAST_VERSION_KEY =
  'ricardo-emerson.flutter-print:last-version';
const PENDING_FOCUS = 'ricardo-emerson.flutter-print:pending-focus';

async function showWelcomeOrWhatsNew(context, version, previousVersion) {
  if (previousVersion !== version) {
    if (vscode.window.state.focused) {
      void context.globalState.update(PENDING_FOCUS, undefined);
      void context.globalState.update(LAST_VERSION_KEY, version);
      void showMessage(version, previousVersion);
    } else {
      // Save pending on window getting focus
      await context.globalState.update(PENDING_FOCUS, true);
      const disposable = vscode.window.onDidChangeWindowState(e => {
        if (!e.focused) {
          return;
        }

        disposable.dispose();

        // If the window is now focused and we are pending the welcome, clear the pending state and show the welcome
        if (context.globalState.get(PENDING_FOCUS) === true) {
          void context.globalState.update(PENDING_FOCUS, undefined);
          void context.globalState.update(LAST_VERSION_KEY, version);
          void showMessage(version, previousVersion);
        }
      });

      context.subscriptions.push(disposable);
    }
  }
}

async function showMessage(version, previousVersion) {
  const whatsNew = { title: "What's New" };
  const giveAStar = { title: '★ Give a star' };
  const writeReview = { title: '★ Write a review' };
  const sponsor = { title: '❤ Sponsor' };
  const actions = [giveAStar, writeReview, sponsor];

  if (previousVersion) {
    actions.unshift(whatsNew);
  }

  const message = previousVersion
    ? `Flutter Print has been updated to v${version}! — check out what's new!`
    : 'Thanks for using Flutter Print — have a great day at work! 🖖🏻 Cheers,';

  const result = await vscode.window.showInformationMessage(message, ...actions);

  if (result !== null) {
    if (result === whatsNew) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items/ricardo-emerson.flutter-print/changelog'
        )
      );
    } else if (result === giveAStar) {
      await env.openExternal(
        Uri.parse('https://github.com/ricardoemerson/flutter-print')
      );
    } else if (result === writeReview) {
      await env.openExternal(
        Uri.parse(
          'https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.flutter-print&ssr=false#review-details'
        )
      );
    } else if (result === sponsor) {
      await env.openExternal(
        Uri.parse('https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96')
      );
    }
  }
}

module.exports = {
  LAST_VERSION_KEY: LAST_VERSION_KEY,
  showWelcomeOrWhatsNew: showWelcomeOrWhatsNew,
}
