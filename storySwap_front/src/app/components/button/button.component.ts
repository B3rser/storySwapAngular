import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() type: 'buy' | 'swap' | 'whishlist' | 'default' = 'default';

  @Output() action = new EventEmitter<string>();

  get buttonClass() {
    switch (this.type) {
      case 'buy':
        return 'btn-primary';
      case 'swap':
        return 'btn-secondary';
      case 'whishlist':
        return 'btn-whish';
      default:
        return 'btn-default';
    }
  }

  onClick() {
    this.action.emit(this.type);
  }
}

