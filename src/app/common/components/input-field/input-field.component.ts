import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'InputField',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent   {

  @Input() inputValue:string = ""; 

  @Input() label:string="";

  @Input() isDisabled:boolean=false;

  @Input() isReadOnly:boolean=false;


  @Output() inputValueChange:EventEmitter<string> = new EventEmitter<string>();

  constructor() {  }


}
