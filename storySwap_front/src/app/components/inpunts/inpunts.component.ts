import { NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inpunts',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './inpunts.component.html',
  styleUrl: './inpunts.component.css'
})
export class InpuntsComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control!: FormControl;

  get hasError(): boolean {
    return this.control.touched && this.control.invalid;
  }
}
