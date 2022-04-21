import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BelediyeBilgiAddComponent } from './components/belediye-bilgi-add/belediye-bilgi-add.component';
import { BelediyeBilgiComponent } from './components/belediye-bilgi/belediye-bilgi.component';
import { HayvanKayitAddComponent } from './components/hayvan-kayit-add/hayvan-kayit-add.component';
import { HayvanKayitComponent } from './components/hayvan-kayit/hayvan-kayit.component';
import { HayvanSahiplendirmeAddComponent } from './components/hayvan-sahiplendirme-add/hayvan-sahiplendirme-add.component';
import { HayvanSahiplendirmeComponent } from './components/hayvan-sahiplendirme/hayvan-sahiplendirme.component';
import { HayvanTedaviAddComponent } from './components/hayvan-tedavi-add/hayvan-tedavi-add.component';
import { HayvanTedaviComponent } from './components/hayvan-tedavi/hayvan-tedavi.component';
import { HekimAddComponent } from './components/hekim-add/hekim-add.component';
import { HekimComponent } from './components/hekim/hekim.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MamaAddComponent } from './components/mama-add/mama-add.component';
import { MamaComponent } from './components/mama/mama.component';
import { RegisterComponent } from './components/register/register.component';
import { VatandasBilgiAddComponent } from './components/vatandas-bilgi-add/vatandas-bilgi-add.component';
import { VatandasBilgiComponent } from './components/vatandas-bilgi/vatandas-bilgi.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'hayvanKayits/getall',
    component: HayvanKayitComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'hayvanKayits/add',
    component: HayvanKayitAddComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'hayvanTedavis/getall',
    component: HayvanTedaviComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'hayvanTedavis/add',
    component: HayvanTedaviAddComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'belediyeBilgis/getall',
    component: BelediyeBilgiComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'belediyeBilgis/add',
    component: BelediyeBilgiAddComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'hekims/getall',
    component: HekimComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'hekims/add',
    component: HekimAddComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'vatandasBilgis/getall',
    component: VatandasBilgiComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'vatandasBilgis/add',
    component: VatandasBilgiAddComponent,
    canActivate: [LoginGuard],
  },

  {
    path: 'hayvanSahiplendirmes/getall',
    component: HayvanSahiplendirmeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'hayvanSahiplendirmes/add',
    component: HayvanSahiplendirmeAddComponent,
    canActivate: [LoginGuard],
  },

  { path: 'mamas/getall', component: MamaComponent, canActivate: [LoginGuard] },
  { path: 'mamas/add', component: MamaAddComponent, canActivate: [LoginGuard] },
  
  { path: 'register', component: RegisterComponent },

  { path: 'login', component: LoginComponent },
  {path:'home',component:HomeComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
