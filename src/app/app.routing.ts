﻿import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuard } from './account/_guards/auth.guard';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    {path: 'dashboard', component: MainDashboardComponent},
    {path: 'settings', component: SettingsComponent},
    // {path: 'dashboard', component: MainDashboardComponent, canActivate: [AuthGuard]},
    // {path: 'settings', component: SettingsComponent , canActivate: [AuthGuard]},
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(appRoutes);