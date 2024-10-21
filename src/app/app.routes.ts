import { Routes } from '@angular/router';
import { ItemsComponent } from './pages/items/items.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
    { path: 'items', component: ItemsComponent },
    { path: 'book-details/:title', component: BookDetailsComponent },
];
