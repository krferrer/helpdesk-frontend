import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() label:string='';
  @Input() color:string="primary"
  @Output() btnClick = new EventEmitter<void>();

  onClick (){
    this.btnClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
