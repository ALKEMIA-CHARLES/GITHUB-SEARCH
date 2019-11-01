import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowReposComponent} from './show-repos/show-repos.component';
// import { ShowReposService } from './show-repos.service';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'about', component : ShowReposComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
