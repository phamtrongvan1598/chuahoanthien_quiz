import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './component/signup/signup.component';
import {SigninComponent} from './component/signin/signin.component';
import {MainBodyComponent} from './component/main/main-body/main-body.component';
import {DetailSidenavComponent} from './component/detail/detail-sidenav/detail-sidenav.component';
import {DetailMainBodyComponent} from './component/detail/detail-main-body/detail-main-body.component';
import {ProfileUserComponent} from './component/profile-user/profile-user.component';
import {ListQuestionsComponent} from './component/detail/list-questions/list-questions.component';


const routes: Routes = [
  {path: '', component: MainBodyComponent},
  {path: 'profileUser', component: ProfileUserComponent},
  // {path: 'confirmPassword', component: ResetPasswordComponent},
  {path: 'api/auth/signup', component: SignupComponent},
  {path: 'api/auth/signin', component: SigninComponent},
  {path: 'api/owner/list-question', component: ListQuestionsComponent},
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
