import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PhotolistComponent} from './photolist/photolist.component'


const routes: Routes = [
  {path:'',component:PhotolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
