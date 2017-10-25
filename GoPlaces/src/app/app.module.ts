import { AuthenticationService } from './authentication.service';

import { SharedFavouriteService } from './shared-favourite.service';
import { HttpModule } from '@angular/http';
import { SearchSuggestionService } from './search-suggestion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { RouterModule }   from '@angular/router';
import { DispaycontainerComponent } from './dispaycontainer/dispaycontainer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { FavouritesComponent } from './favourites/favourites.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatToolbarModule } from '@angular/material';
import { MatGridListModule, MatCardModule} from '@angular/material';
import { MatDialogModule, MatListModule, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatChipsModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SearchComponent,
    DisplayResultsComponent,
    DispaycontainerComponent,
    MoreDetailsComponent,
    FavouritesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule, MatButtonModule,MatGridListModule,MatCardModule,
      MatGridListModule,MatCardModule,
      MatDialogModule,MatListModule,
      MatFormFieldModule,
      MatInputModule,
      FlexLayoutModule,
      MatSnackBarModule,
      MatChipsModule,  
    RouterModule.forRoot([
      {path: '',
      component: DispaycontainerComponent 
  },
      {path: 'results/:id/moredetails',
      component: MoreDetailsComponent },
      {path: 'results/:id/moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'moredetails',
      component: MoreDetailsComponent },
      {path: 'moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'results',
      component: DisplayResultsComponent },
      {path: 'results/:id',
      component: DisplayResultsComponent },
      {path: 'favourites',
      component: FavouritesComponent },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
      

      
    ])
  ],

  providers: [SearchSuggestionService,SharedFavouriteService,AuthenticationService] ,

  bootstrap: [AppComponent]
})
export class AppModule { }
