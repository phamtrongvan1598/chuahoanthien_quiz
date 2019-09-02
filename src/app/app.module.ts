import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/main-header/header.component';
import {FooterComponent} from './component/main-footer/footer.component';
import {MainBodyComponent} from './component/main-body/main-body.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SignupComponent} from './component/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SigninComponent} from './component/signin/signin.component';
import {MainBannerComponent} from './component/main-banner/main-banner.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DetailSidenavComponent} from './component/detail/detail-sidenav/detail-sidenav.component';
import {DetailListComponent} from './component/detail/detail-list/detail-list.component';
import {DetailMainBodyComponent} from './component/detail/detail-main-body/detail-main-body.component';
import {environment} from '../environments/environment';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    DetailSidenavComponent,
    SignupComponent,
    SigninComponent,
    MainBannerComponent,
    DetailSidenavComponent,
    DetailListComponent,
    DetailMainBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
