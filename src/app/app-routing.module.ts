import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HayvanKayitComponent } from './components/hayvan-kayit/hayvan-kayit.component';
import { HayvanTedaviComponent } from './components/hayvan-tedavi/hayvan-tedavi.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HayvanKayitComponent},
  {path:"hayvanKayits",component:HayvanKayitComponent},
  {path:"hayvanKayits/hayvanTedavi/:hayvanId",component:HayvanKayitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
