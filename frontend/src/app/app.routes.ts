import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { AuthComponent } from './authentification/auth.component';
import { CreateQCMComponent } from './pages/questionnary/createQCM.component';
import { CreateGroupComponent } from './pages/createGroup/createGroup.component';





export const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'createQCM', component: CreateQCMComponent, pathMatch: 'full' },
  { path: 'createGroup', component: CreateGroupComponent, pathMatch: 'full' },
];
