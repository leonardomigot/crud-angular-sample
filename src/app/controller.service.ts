import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  items: object[] = [];

  constructor() { }

  addItem(item: object) {
    this.items.push(item);    
  }

  getItem() {
    return this.items;
  }
}
