import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  parentStringProperty: string;
  stringOutParent: string;

  constructor() {
    this.parentStringProperty = 'String setat pe constructor in parinte !';
  }

  ngOnInit() {
  }

  stringReceivedInParentAsParameter(par: string) {
    this.stringOutParent = par;
  }

}
