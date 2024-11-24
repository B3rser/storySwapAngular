import { Book } from "./book";
import { User } from "./user";

export interface HistoryItem {
  id: string;
  added_date: Date;
  id_book1: Book;
  id_book2: Book;
  id_user1: User;
  id_user2: User;
  type: string;
}
