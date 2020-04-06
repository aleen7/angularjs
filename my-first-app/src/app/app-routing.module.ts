import { NgModule } from '@angular/core';
import { PnrComponent } from './components/pnr/pnr.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pnr', component: PnrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
