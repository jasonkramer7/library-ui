import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FavoritesComponent } from './favorites/favorites.component';
import { AddNewComponent } from './add-new/add-new.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from "@angular/material/divider";
import { BookService} from "./services/book.service";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    AddNewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
