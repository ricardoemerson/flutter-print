<p align="center">
  <br />
  <a title="Learn more about Flutter Print" href="https://github.com/ricardoemerson/flutter-print">
    <img src="https://raw.githubusercontent.com/ricardoemerson/flutter-print/master/images/cover-logo.png" alt="Flutter Print" width="256"  heigth="256"/>
    </a>
</p>

## Support

**Flutter Print** is an extension created for **Visual Studio Code**. If you find it useful, please consider supporting it.

<table align="center" width="60%" border="0">
  <tr>
    <td>
      <a title="PayPal" href="https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96">
        Donate with PayPal
      </a>
    </td>
    <td>
      <a title="Mercado Pago" href="https://mpago.la/1LvP93a">
        Donate with Mercado Pago
      </a>
    </td>
  </tr>
</table>

## Flutter Print

[![Version](https://vsmarketplacebadge.apphb.com/version/ricardo-emerson.flutter-print.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.flutter-print)
[![Install](https://vsmarketplacebadge.apphb.com/installs/ricardo-emerson.flutter-print.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.flutter-print)
[![Downloads](https://vsmarketplacebadge.apphb.com/downloads/ricardo-emerson.flutter-print.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.flutter-print)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/ricardo-emerson.flutter-print.svg)](https://marketplace.visualstudio.com/items?itemName=ricardo-emerson.flutter-print&ssr=false#review-details)

Easily insert and remove `print('variable: $variable');` statement.

![](https://raw.githubusercontent.com/ricardoemerson/flutter-print/master/images/demonstration.gif)

## Usage

With selection:
* Highlight a variable (or really any text)
* Press `Ctrl+Shift+L`
* The output (on a new line) will be: `print('variable: $variable');`

With selection:
* Highlight a variable (or really any text)
* Press `Cmd+Shift+L`
* The output (on a new line) will be: `print('variable: ${variable}');`

Without selection:
* Press `Ctrl+Shift+L`
* The output (on the same line) will be: `print();`

Without selection:
* Press `Cmd+Shift+L`
* The output (on the same line) will be: `print('${}');`

To remove print:
* Press `Cmd+Shift+D`
* This will delete all print statements in the current document

## With Custom Log Class

```dart
import 'dart:developer' as developer;

class Log {
  Log._();

  static void print(String value) {
    developer.log(value, name: 'LOG');
  }

  static Object? inspect(Object? object) {
    developer.inspect(object);
  }
}
```

### Log.print()
With selection:
* Highlight a variable (or really any text)
* Press `Ctrl+Cmd+L`
* The output (on a new line) will be: `Log.print('variable: $variable');`

With selection:
* Highlight a variable (or really any text)
* Press `Cmd+Alt+L`
* The output (on a new line) will be: `Log.print('variable: ${variable}');`

Without selection:
* Press `Ctrl+Cmd+L`
* The output (on the same line) will be: `Log.print();`


### Log.inspect()
With selection:
* Highlight a variable (or really any text)
* Press `Alt+Cmd+L`
* The output (on a new line) will be: `Log.inspect(variable);`

Without selection:
* Press `Alt+Cmd+L`
* The output (on the same line) will be: `Log.inspect();`

## License
[MIT License](LICENSE)
