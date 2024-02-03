import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from "./add-new/add-new.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { HomeComponent } from "./home/home.component";
import { EditBookComponent } from './edit-book/edit-book.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'add-new', component: AddNewComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:key', component: EditBookComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
