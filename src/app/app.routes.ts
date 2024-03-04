import { Routes } from '@angular/router';
import {VoyageComponent} from "./components/public/voyage/voyage.component";
import {VoyageDetailComponent} from "./components/public/voyage-detail/voyage-detail.component";
import {LoginComponent} from "./components/public/login/login.component";
import {VoyageAdminComponent} from "./components/admin/voyage-admin/voyage-admin.component";
import {loginGuard} from "./guards/login-guard";
import {VoyageAjoutComponent} from "./components/admin/voyage-ajout/voyage-ajout.component";
import {VoyageModificationComponent} from "./components/admin/voyage-modification/voyage-modification.component";

export const routes: Routes = [
  {path:"" ,component:VoyageComponent},
  {path:"voyage/detail/:id" ,component:VoyageDetailComponent},
  {path:"login" ,component:LoginComponent},
  {path:"admin", component:VoyageAdminComponent,canActivate: [loginGuard]},
  {path:"admin/add", component:VoyageAjoutComponent,canActivate: [loginGuard]},
  {path:"admin/edit/:id", component:VoyageModificationComponent,canActivate: [loginGuard]}
];
