import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './component/signup/signup.component';
import {SigninComponent} from './component/signin/signin.component';
import {MainBodyComponent} from './component/main-body/main-body.component';
import {DetailSidenavComponent} from './component/detail/detail-sidenav/detail-sidenav.component';
import {DetailListComponent} from './component/detail/detail-list/detail-list.component';
import {DetailMainBodyComponent} from './component/detail/detail-main-body/detail-main-body.component';
import {UploadFileComponent} from './component/upload-file/upload-file.component';


const routes: Routes = [
  {path: '', component: MainBodyComponent},
  {path: 'api/auth/signup', component: SignupComponent},
  {path: 'api/auth/signin', component: SigninComponent},
  {path: 'api/owner', component: DetailSidenavComponent,
    children: [
      // {path: 'notes', component: DetailListComponent},
      {path: 'notes/:id', component: DetailMainBodyComponent}
    ]
  },
  // {path: 'api/owner/notes/:id', component: DetailMainBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
