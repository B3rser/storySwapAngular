import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RowBooksComponent } from '../../components/row-books/row-books.component';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NgFor, RowBooksComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  /*constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }
  public books: Book[] = [
    {
      id: '1',
      title: 'Frankenstein',
      image:
        'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      score: 4.5,
      author: 'Mary Shelley',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '2',
      title: '1984',
      image:
        'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      score: 4.5,
      author: 'George Orwell',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '3',
      title: 'Moby Dick',
      image:
        'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      score: 4.0,
      author: 'Herman Melville',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '4',
      title: 'Frankenstein',
      image:
        'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      score: 4.5,
      author: 'Mary Shelley',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '5',
      title: '1984',
      image:
        'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      score: 4.5,
      author: 'George Orwell',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '6',
      title: 'Moby Dick',
      image:
        'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      score: 4.0,
      author: 'Herman Melville',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '7',
      title: 'Frankenstein',
      image:
        'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      score: 4.5,
      author: 'Mary Shelley',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '8',
      title: '1984',
      image:
        'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      score: 4.5,
      author: 'George Orwell',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '9',
      title: 'Moby Dick',
      image:
        'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      score: 4.0,
      author: 'Herman Melville',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '10',
      title: 'Frankenstein',
      image:
        'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      score: 4.5,
      author: 'Mary Shelley',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '11',
      title: '1984',
      image:
        'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      score: 4.5,
      author: 'George Orwell',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '12',
      title: 'Moby Dick',
      image:
        'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      score: 4.0,
      author: 'Herman Melville',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '13',
      title: 'Frankenstein',
      image:
        'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      score: 4.5,
      author: 'Mary Shelley',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '14',
      title: '1984',
      image:
        'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      score: 4.5,
      author: 'George Orwell',
      description: '',
      gender: '',
      release_date: new Date(),
    },
    {
      id: '15',
      title: 'Moby Dick',
      image:
        'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      score: 4.0,
      author: 'Herman Melville',
      description: '',
      gender: '',
      release_date: new Date(),
    },
  ];*/
}
