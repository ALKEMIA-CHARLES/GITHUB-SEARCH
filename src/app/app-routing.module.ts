import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowReposComponent} from './show-repos/show-repos.component';
// import { ShowReposService } from './show-repos.service';
import {Routes, RouterModule} from '@angular/router';
import { ContactUsComponent} from './contact-us/contact-us.component'
import {MainpartComponent} from './mainpart/mainpart.component'
  import { from } from 'rxjs';

const routes: Routes = [
  {path:'about', component : ShowReposComponent},
  { path: 'contact-us', component: ContactUsComponent},
  {path:'search', component:MainpartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
