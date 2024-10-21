import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RowBooksComponent } from "../../row-books/row-books.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NgFor,  RowBooksComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  books = [
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
    {
      title: 'Frankenstein',
      img: 'https://www.magicmurals.com/media/amasty/webp/catalog/product/cache/155d73b570b90ded8a140526fcb8f2da/a/d/adg-0000001045_1_jpg.webp',
      rating: 4.5,
      author: 'Mary Shelley',
    },
    {
      title: '1984',
      img: 'https://m.media-amazon.com/images/I/51rXrmHv51L._SY445_SX342_.jpg',
      rating: 4.5,
      author: 'George Orwell',
    },
    {
      title: 'Moby Dick',
      img: 'https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_.jpg',
      rating: 4.0,
      author: 'Herman Melville',
    },
  ];
}
