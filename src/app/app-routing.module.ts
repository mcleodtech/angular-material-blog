import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: BlogPostComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
