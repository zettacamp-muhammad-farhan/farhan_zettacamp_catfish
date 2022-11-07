import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './main/form/form.component';
import { ListDataComponent } from './main/list-data/list-data.component';

const routes: Routes = [
  {path:"", component:ListDataComponent},
  {path:"add", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
