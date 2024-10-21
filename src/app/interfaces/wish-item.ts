import { Timestamp } from "rxjs";
import { Book } from "./book";

export interface WishItem {
    book: Book,
    date: Date; 
}