﻿import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { AboutComponent } from './components/account/about/about.component';
import { CreateBotComponent } from './components/create-bot/create-bot.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { TableBotsComponent } from './components/table-bots/table-bots.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent, canActivate: [AuthGuard] },
  { path: 'table', component: TableBotsComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateBotComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  // { path: 'create', component: CreateBotComponent },
  // { path: 'table', component: TableBotsComponent },
  // { path: 'dashboard', component: MainDashboardComponent },
  // { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'dashboard' },
];

export const routing = RouterModule.forRoot(appRoutes);
