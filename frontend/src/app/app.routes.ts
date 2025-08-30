import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { AuthComponent } from './authentification/auth.component';
import { CreateQCMComponent } from './pages/questionnary/createQCM.component';
import { CreateGroupComponent } from './pages/createGroup/createGroup.component';
import { doQCM } from './pages/doQCM/doQCM.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'auth', component: AuthComponent, pathMatch: 'full' },
    { path: 'createQCM', component: CreateQCMComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'createGroup', component: CreateGroupComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'doQCM', component: doQCM, pathMatch: 'full', canActivate: [AuthGuard] },
  ];
