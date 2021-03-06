import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SingleComponent } from './component/single/single.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: SingleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);