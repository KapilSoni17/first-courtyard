import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Rooms } from './modules/rooms/rooms';
import { Contact } from './modules/contact/contact';
import { About } from './modules/about/about';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "rooms", component: Rooms },
    { path: "contact", component: Contact },
    { path: '**', redirectTo: "" }
];
