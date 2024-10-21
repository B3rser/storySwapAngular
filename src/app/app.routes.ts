import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { EventsComponent } from './components/pages/events/events.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';

export const routes: Routes = [
    { path: 'home',component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'events',component: EventsComponent},
    { path: 'history',component: HistoryComponent},
    { path: 'library',component: LibraryComponent},
    { path: 'wishlist',component: WishlistComponent},
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
