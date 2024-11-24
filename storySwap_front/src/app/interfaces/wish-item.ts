import { Book } from "./book";

export interface WishItem {
    id: string;
    book: Book;
    date: Date; 
}