import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPagePostsComponent } from './components/front-page-posts/front-page-posts.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: FrontPagePostsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'posts/:id', component: PostPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
