import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiModule } from './pages/pai.module';

const routes: Routes = [
  { path: 'pai', loadChildren:() => PaiModule }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
