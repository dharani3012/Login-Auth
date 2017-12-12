import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Third Party Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StickyModule } from 'ng2-sticky-kit';

import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

// used to create fake backend
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { AuthGuard } from './guards/index';
import { AlertService, AuthService, UserService } from './services/index';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("101598293439-l45g7en277r45rpg2vbu63fp6ibvo3bp.apps.googleusercontent.com")
  },  
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("265788290520106")
  }
]);

export function provideConfig() {
  return config;
}




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    StickyModule,
    FormsModule,
    HttpModule,
    SocialLoginModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([
    	  {pathMatch: 'full', path  : '', component: HomeComponent, canActivate: [AuthGuard]},
      	{pathMatch: 'full', path: 'login', component: LoginComponent },
      	{pathMatch: 'full', path: 'register', component: RegisterComponent},
        { path: '**', redirectTo: ''}
    ])
  ],
  providers: [AuthGuard,
        AlertService,
        AuthService,
        UserService,
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
     {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
