import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-ls',
  standalone: true,
  imports: [],
  templateUrl: './button-ls.component.html',
  styleUrl: './button-ls.component.css'
})
export class ButtonLSComponent {
  @Input() text: string = 'Submit';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
}
