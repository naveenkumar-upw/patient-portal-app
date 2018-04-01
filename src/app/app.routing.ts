import { Routes, RouterModule } from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
     
    // otherwise redirect to home
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: '**', redirectTo: 'login', pathMatch:'full' }
];
 
export const routing = RouterModule.forRoot(appRoutes);