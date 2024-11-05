import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EventsComponent } from './pages/events/events.component';
import { HistoryComponent } from './pages/history/history.component';
import { LibraryComponent } from './pages/library/library.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ItemsComponent } from './pages/items/items.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
    { path: 'home',component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'events',component: EventsComponent},
    { path: 'history',component: HistoryComponent},
    { path: 'library',component: LibraryComponent},
    { path: 'wishlist',component: WishlistComponent},
    { path: 'items', component: ItemsComponent },
    { path: 'book-details/:title', component: BookDetailsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];