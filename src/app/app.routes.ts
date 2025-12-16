import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { Rooms } from './modules/rooms/rooms';
import { Contact } from './modules/contact/contact';
import { About } from './modules/about/about';
import { TermsConditions } from './modules/terms-conditions/terms-conditions';
import { PrivacyPolicy } from './modules/privacy-policy/privacy-policy';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'rooms', component: Rooms },
    { path: 'contact', component: Contact },
    { path: 'first-courtyard-privacy-policy', component: PrivacyPolicy },
    { path: 'terms-conditions', component: TermsConditions },
    { path: '**', redirectTo: '' }  
];
