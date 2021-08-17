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

  deleteItem(variable: string){
    let temp = this.items.find(item => item.nome === variable);
    
    if (temp == undefined)
      throw new Error("Não existe nenhum item com este valor");

    let index = this.items.indexOf(temp);
    this.items.splice(index,1);
  }
}
