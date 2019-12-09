// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// third party library imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// my imports
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './shared/components/movies-list/movies-list.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { MyaccountComponent } from './account/myaccount/myaccount.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCrewComponent } from './admin/create-crew/create-crew.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { MyMoviesComponent } from './account/my-movies/my-movies.component';
import { MyFavoritesComponent } from './account/my-favorites/my-favorites.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { TopRevenueMoviesComponent } from './movies/top-revenue-movies/top-revenue-movies.component';
import { MoviesByGenreComponent } from './movies/movies-by-genre/movies-by-genre.component';
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent,
    LoginComponent,
    MoviesListComponent,
    CreateUserComponent,
    MyaccountComponent,
    CreateMovieComponent,
    CreateCrewComponent,
    CreateCastComponent,
    MyMoviesComponent,
    MyFavoritesComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    TopRatedMoviesComponent,
    TopRevenueMoviesComponent,
    MoviesByGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }