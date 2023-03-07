import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdditionComponent} from './addition/addition.component';
import { CoursesComponent } from './courses/courses.component';
import { ProductComponent } from './product/product.component';
import {SubstractionComponent} from './substraction/substraction.component';
import { WordcountComponent } from './wordcount/wordcount.component'; 

const routes: Routes = [
  {path:"add",component:AdditionComponent},
  {path:"sub",component:SubstractionComponent},
  {path:"word",component:WordcountComponent},
  {path:"cse",component:CoursesComponent},
  {path:"pro",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
