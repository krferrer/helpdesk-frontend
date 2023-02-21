import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'PasswordInputField',
  templateUrl: './password-input-field.component.html',
  styleUrls: ['./password-input-field.component.css']
})
export class PasswordInputFieldComponent implements OnInit {

  @Input() inputValue:string ="";
  @Input() isDisabled:boolean=false;
  @Input() label:string="";
  type:string="password";
  @Output() inputValueChange:EventEmitter<string>= new EventEmitter();

  toggleShowPassword():void{
    if(this.type==="password"){
      this.type="text"
    }else{
      this.type="password"
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
