import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HayvanKayitAddComponent } from './components/hayvan-kayit-add/hayvan-kayit-add.component';
import { HayvanKayitComponent } from './components/hayvan-kayit/hayvan-kayit.component';
import { HayvanTedaviComponent } from './components/hayvan-tedavi/hayvan-tedavi.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HayvanKayitComponent},
  {path:"hayvanKayits",component:HayvanKayitComponent},
  {path:"hayvanKayits/hayvanTedavi/:hayvanId",component:HayvanKayitComponent},
  {path:"hayvanKayits/add", component:HayvanKayitAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
