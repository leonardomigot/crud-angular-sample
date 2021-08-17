import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  items = [];

  constructor( 
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.items = this.controllerService.getItem();
  }

}
