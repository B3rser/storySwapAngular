import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';
import { FloatingBtnComponent } from "../../components/floating-btn/floating-btn.component";

@Component({
  selector: 'library',
  standalone: true,
  imports: [NgIf, NgFor, FloatingBtnComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle("Library");
  }
  public fbtnPosition = {
    bottom:'10px',
    right:'10px'
  };
  public books : Book[] = []

  public showAddDialog() {
    console.log("Hello")
  }
}
