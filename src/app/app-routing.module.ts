import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './component/signup/signup.component';
import {SigninComponent} from './component/signin/signin.component';
import {MainBodyComponent} from './component/main-body/main-body.component';
import {MainBannerComponent} from './component/main-banner/main-banner.component';


const routes: Routes = [
  {path: '', component: MainBodyComponent},
  {path: 'api/auth/signup', component: SignupComponent},
  {path: 'api/auth/signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
