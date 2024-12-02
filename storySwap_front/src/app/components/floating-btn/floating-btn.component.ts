import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'floating-btn',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './floating-btn.component.html',
  styleUrl: './floating-btn.component.css',
})
export class FloatingBtnComponent implements OnInit {
  @Input() position: { [key: string]: string } = {};
  @Output() dataEmitter = new EventEmitter();

  btnStyle: { [key: string]: string } = {};

  constructor() {}

  ngOnInit() {
    this.btnStyle = {
      ...this.position,
    };
  }

  public clickAction() {
    this.dataEmitter.emit();
  }
}
