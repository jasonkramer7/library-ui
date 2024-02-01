import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from "./add-new/add-new.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { HomeComponent } from "./home/home.component";
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  { path: 'add-new', component: AddNewComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit/:key', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
