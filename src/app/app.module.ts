import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
  MatFormFieldModule, MatSlideToggleModule, MatInputModule, 
  MatToolbarModule, MatIconModule, MatMenuTrigger, MatMenuModule, MatCardModule, MatSpinner, MatProgressSpinner, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableDataSource, MatTableModule, MatPaginatorModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminEditMovieComponent } from './admin-edit-movie/admin-edit-movie.component';
import { AdminViewMovieComponent } from './admin-view-movie/admin-view-movie.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieFooterComponent } from './movie-footer/movie-footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { CardsComponent } from './cards/cards.component';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { AdminserviceService } from './adminservice.service';
import { UserserviceService } from './userservice.service';
import { MovieserviceService } from './movieservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminAddMovieComponent,
    AdminEditMovieComponent,
    AdminViewMovieComponent,
    MovieHeaderComponent,
    MovieFooterComponent,
    WelcomeComponent,
    HomeComponent,
    HomeFooterComponent,
    HomeNavbarComponent,
    CardsComponent,
    FavouritesComponent,
    MovieCardComponent,
    LoginComponent,
    SignupComponent,
    SearchHistoryComponent,
  ],
  imports: [
    HttpClientTestingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    FormBuilder
  ],
  providers: [AdminserviceService,UserserviceService,MovieserviceService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
