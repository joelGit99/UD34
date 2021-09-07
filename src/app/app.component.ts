import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadoraWeb';
  numero1 : any = 0;
  numero2 : any = 0;
  operacion : string = '';
  resultado : number = 0;

  siDiferentede0 () : boolean {
    if(this.numero1 != 0) {
      return true;
    } else {
      return false;
    }
  }

  set9() {
    if(this.siDiferentede0()) {
      this.numero2 = 9;
    } else {
      this.numero1 = 9;
    }
  }
  set8() {
    if(this.siDiferentede0()) {
      this.numero2 = 8;
    } else {
      this.numero1 = 8;
    }
  }
  set7() {
    if(this.siDiferentede0()) {
      this.numero2 = 7;
    } else {
      this.numero1 = 7;
    }
  }
  set6() {
    if(this.siDiferentede0()) {
      this.numero2 = 6;
    } else {
      this.numero1 = 6;
    }
  }
  set5() {
    if(this.siDiferentede0()) {
      this.numero2 = 5;
    } else {
      this.numero1 = 5;
    }
  }
  set4() {
    if(this.siDiferentede0()) {
      this.numero2 = 4;
    } else {
      this.numero1 = 4;
    }
  }
  set3() {
    if(this.siDiferentede0()) {
      this.numero2 = 3;
    } else {
      this.numero1 = 3;
    }
  }
  set2() {
    if(this.siDiferentede0()) {
      this.numero2 = 2;
    } else {
      this.numero1 = 2;
    }
  }
  set1() {
    if(this.siDiferentede0()) {
      this.numero2 = 1;
    } else {
      this.numero1 = 1;
    }
  }
  set0() {
    if(this.siDiferentede0()) {
      this.numero2 = 0;
    } else {
      this.numero1 = 0;
    }
  }

  delButton() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.operacion = '';
    this.resultado = 0;
  }
  setX() {
    this.operacion = 'X';
  }
  setDivision() {
    this.operacion = '/';
  }
  setSuma() {
    this.operacion = '+';
  }
  setResta() {
    this.operacion = '-';
  }

  calculo() {
    if(this.operacion = 'X') {
      this.resultado = this.numero1 * this.numero2;
    } else if(this.operacion = '/') {
      this.resultado = this.numero1 / this.numero2;
    } else if(this.operacion = '+') {
      this.resultado = this.numero1 + this.numero2;
    } else if(this.operacion = '-') {
      this.resultado = this.numero1 - this.numero2;
    }
  }
}
