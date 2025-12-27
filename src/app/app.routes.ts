import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./modules/home/home').then(c => c.Home)
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./modules/about/about').then(c => c.About)
    },
    {
        path: 'rooms',
        loadComponent: () =>
            import('./modules/rooms/rooms').then(c => c.Rooms)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./modules/contact/contact').then(c => c.Contact)
    },
    {
        path: 'explore-mandawa',
        loadComponent: () =>
            import('./modules/explore/explore').then(c => c.Explore)
    },
    {
        path: 'first-courtyard-privacy-policy',
        loadComponent: () =>
            import('./modules/privacy-policy/privacy-policy').then(c => c.PrivacyPolicy)
    },
    {
        path: 'terms-conditions',
        loadComponent: () =>
            import('./modules/terms-conditions/terms-conditions').then(c => c.TermsConditions)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
