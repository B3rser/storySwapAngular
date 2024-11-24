import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'floating-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './floating-btn.component.html',
  styleUrl: './floating-btn.component.css',
})
export class FloatingBtnComponent {
  @Input()
  public position = {};
  @Output()
  public dataEmitter = new EventEmitter();

  btnStyle: { [key: string]: string };
  constructor() {
    this.btnStyle = {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      ...this.position,
    };
  }

  public clickAction() {
    console.log(this.btnStyle);
    console.log(this.position);
    this.dataEmitter.emit();
  }
}
