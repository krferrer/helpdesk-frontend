import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'SelectComponent',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  constructor() { }

  @Input() label:string="";
  @Input() selectOptions:any;
  @Input() inputValue:any="";
  @Input() isDisabled=false;
  @Output() inputValueChange = new EventEmitter();
  @Output() selectValueChange = new EventEmitter();

  handleSelectChange(value:any){
    this.selectValueChange.emit(value);
  }
  ngOnInit(): void {
  }

}
