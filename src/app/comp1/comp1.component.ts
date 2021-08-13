import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(
    private controllerService: ControllerService
  ) {}

  ngOnInit(): void {
  }

  add(variable: string): void {
    this.controllerService.addItem({nome: variable});
  }

}
