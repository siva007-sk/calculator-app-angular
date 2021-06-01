import { Component } from '@angular/core';
import { Decimal } from 'decimal.js';
import * as Theme1 from './themes/theme1.json';
import * as Theme2 from './themes/theme2.json';
import * as Theme3 from './themes/theme3.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  buttonList = [
    ['7', '8', '9', 'DEL'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '-'],
    ['.', '0', '/', 'x'],
  ];
  resultsFlag = false;
  resultDisplay = '';
  number1 = new Decimal(0);
  number2 = new Decimal(0);
  operator = '';
  themeStyle = Theme1.default;
  selectedTheme = {
    theme1: true,
    theme2: false,
    theme3: false,
  };

  takeAction(event: any) {
    if (this.resultsFlag) {
      this.resultDisplay = '';
      this.resultsFlag = false;
      this.operator = '';
    }
    if (this.resultDisplay.length == 12) {
      return;
    }
    const key = event.target.id;
    if (key == '+' || key == '-' || key == 'x' || key == '/') {
      if (this.operator == '') {
        this.operator = key;
        this.resultDisplay += key;
      } else {
        this.number1 = new Decimal(this.resultDisplay.split(this.operator)[0]);
        this.number2 = new Decimal(this.resultDisplay.split(this.operator)[1]);
        this.resultDisplay = `${this.calculate()}`;
        this.operator = key;
        this.resultDisplay += key;
      }
    } else if (key == 'DEL') {
      this.resultDisplay = this.resultDisplay.substr(
        0,
        this.resultDisplay.length - 1
      );
    } else {
      this.resultDisplay += key;
    }
  }

  getResult() {
    this.resultsFlag = true;
    this.number1 = new Decimal(this.resultDisplay.split(this.operator)[0]);
    this.number2 = new Decimal(this.resultDisplay.split(this.operator)[1]);
    this.resultDisplay = `${this.calculate()}`;
  }

  reset() {
    this.resultDisplay = '';
    this.number1 = new Decimal(0);
    this.number2 = new Decimal(0);
    this.operator = '';
  }

  calculate() {
    if (this.operator == '+') {
      return this.number1.add(this.number2);
    }
    if (this.operator == '-') {
      return this.number1.sub(this.number2);
    }
    if (this.operator == 'x') {
      return this.number1.mul(this.number2);
    }
    if (this.operator == '/') {
      return this.number1.div(this.number2);
    }
    return 0;
  }

  changeTheme(event: any) {
    let radio = event.target.value;
    switch (radio) {
      case '1':
        this.selectedTheme = {
          theme1: true,
          theme2: false,
          theme3: false,
        };
        this.themeStyle = Theme1.default;
        break;
      case '2':
        this.selectedTheme = {
          theme1: false,
          theme2: true,
          theme3: false,
        };
        this.themeStyle = Theme2.default;
        break;
      case '3':
        this.selectedTheme = {
          theme1: false,
          theme2: false,
          theme3: true,
        };
        this.themeStyle = Theme3.default;
        break;

      default:
        this.selectedTheme = {
          theme1: true,
          theme2: false,
          theme3: false,
        };
        this.themeStyle = Theme1.default;
    }
  }
}
