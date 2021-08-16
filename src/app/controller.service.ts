import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  items = [];

  constructor() { }

  addItem(item: object) {
    this.items.push(item);    
  }

  getItem() {
    return this.items;
  }

  replaceItem(variable: string, newVariable: string) {

    // find retorna o primeiro item que condiz 
    let temp = this.items.find(item => item.nome === variable);

    //Tratamento da exceção 
    if (temp == undefined)
      throw new Error("Não existe nenhum item com este valor");

    temp.nome = newVariable;
  }
}
