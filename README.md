<p align="center">
  <br />
  <a title="Learn more about Flutter Print" href="https://github.com/ricardoemerson/flutter-print">
    <img src="https://raw.githubusercontent.com/ricardoemerson/flutter-print/master/images/cover-logo.png" alt="Flutter Print" width="256"  heigth="256"/>
    </a>
</p>

## Support

**Flutter Print** is an extension created for **Visual Studio Code**. If you find it useful, please consider supporting it.

<table align="center" width="100%" border="0">
  <tr>
    <td >
      <a title="PayPal" href="https://www.paypal.com/donate?hosted_button_id=X26H7L6AVMD96">
        <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/donate-with-paypal.png" alt="Create Widgets and Classes for Flutter Logo" width="180"  height="80"/>
      </a>
    </td>
    <td>
      <a title="Mercado Pago" href="https://mpago.la/1LvP93a">
        <img src="https://raw.githubusercontent.com/ricardoemerson/create-flutter-widgets-and-classes/master/images/donate-with-mercado-pago.png" alt="Create Widgets and Classes for Flutter Logo" width="220"  height="65"/>
      </a>
    </td>
  </tr>
</table>

## Flutter Print

Easily insert and remove `debugPrint('variable: $variable');` statement.

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/ricardo-emerson.flutter-print.svg?style=flat-square)
![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/ricardo-emerson.flutter-print.svg?style=flat-square)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/ricardo-emerson.flutter-print.svg?style=flat-square)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/ricardo-emerson.flutter-print.svg?style=flat-square)
[![GitHub](https://img.shields.io/github/stars/ricardoemerson/flutter-print.svg?style=flat-square)](https://github.com/ricardoemerson/flutter-print)

# Tutorial in Portuguese Brazil.
[![✅ [2022] Como utilizar a extensão Flutter Print para Visual Studio Code?](https://img.youtube.com/vi/Mg_Pg2jQ_p0/0.jpg)](https://www.youtube.com/watch?v=Mg_Pg2jQ_p0)

# Usage Examples

> This extension overrides the shortcut for **Select all occurrences of current selection** - `Ctrl+Shift+L` on Windows and Linux and `Cmd+Shift+L` on macOS, however you can still use `Ctrl+F2` to execute same command.


## Settings

The Flutter Print extension has only one configuration option called `useDebugPrint` which is used to define whether the debugPrint statement will be used instead of the print statement.

![Usage](images/use-debug-print-setting.png)

## debugPrint for variables or object properties:

With the extension setting useDebugPrint enabled, select the variable or object properties that you want uses debugPrint statement and press `Ctrl+Shift+L` on Windows, Linux or macOS.

![Usage](images/debug-print.gif)

## Print for variables or object properties:

With the extension setting useDebugPrint disabled, select the variable or object properties that you want uses print statement and press `Ctrl+Shift+L` on Windows, Linux or macOS.

![Usage](images/print.gif)

## Remove all print statements:

To remove all print statements and press `Win+Shift+D` on Windows and Linux or `Cmd+Shift+D` on macOS.

![Usage](images/delete-log.gif)


# With Custom Log Class

Create a custom log class.

```dart
import 'dart:developer' as developer;

class Log {
  Log._();

  static void print(String value, {StackTrace? stackTrace}) {
    developer.log(value, name: 'LOG', stackTrace: stackTrace);
  }

  static Object? inspect(Object? object) {
    return developer.inspect(object);
  }
}

```

## Log.print() for variables or object properties:

Select the variable or object properties that you want uses a custom Log.print statement and press `Win+Ctrl+L` on Windows and Linux or `Cmd+Ctrl+L` on macOS.

![Usage](images/log-print.gif)


## Log.inspect() for variables:

Select the variable that you want uses a custom Log.inspect statement and press `Win+Ctrl+L` on Windows and Linux or `Cmd+Ctrl+L` on macOS.

![Usage](images/log-inspect.gif)


**That's all, Enjoy!**
