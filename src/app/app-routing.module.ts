import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HayvanKayitAddComponent } from './components/hayvan-kayit-add/hayvan-kayit-add.component';
import { HayvanKayitComponent } from './components/hayvan-kayit/hayvan-kayit.component';
import { HayvanTedaviComponent } from './components/hayvan-tedavi/hayvan-tedavi.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"hayvanKayits/getall",component:HayvanKayitComponent, canActivate:[LoginGuard]},
  //{path:"hayvanKayits/hayvanTedavi/:hayvanId",component:HayvanKayitComponent},
  {path:"hayvanKayits/add", component:HayvanKayitAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
