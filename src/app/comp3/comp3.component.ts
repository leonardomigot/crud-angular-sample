import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
  }

  update(variable: string, newVariable: string): void {
    try{
      this.controllerService.replaceItem(variable, newVariable);
    } catch(err) {
      window.alert(err.message);
    }
  }

}
