import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './inicio/home/home.component';
 
const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'service', component: ServiceComponent},
  {path: 'about', component: AboutComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
