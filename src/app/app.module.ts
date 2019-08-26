import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/main-header/header.component';
import { FooterComponent } from './component/main-footer/footer.component';
import { MainBodyComponent } from './component/main-body/main-body.component';
import { DetailSidenavComponent } from './component/detail/detail-sidenav/detail-sidenav.component';
import { DetailItemComponent } from './component/detail/detail-item/detail-item.component';
// import { DetailContentComponent } from './component/detail/detail-content/detail-content.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {DetailGroupviewComponent} from './component/detail/detail-groupview/detail-groupview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    DetailSidenavComponent,
    DetailItemComponent,
    // DetailContentComponent,
    DetailGroupviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
