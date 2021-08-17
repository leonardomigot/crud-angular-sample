import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
  }

  delete(variable: string): void{
    try {
      this.controllerService.deleteItem(variable);
    } catch (err) {
      window.alert(err.message);      
    }
  }

}
