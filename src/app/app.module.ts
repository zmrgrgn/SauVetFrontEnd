import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HayvanKayitComponent } from './components/hayvan-kayit/hayvan-kayit.component';
import { HayvanTedaviComponent } from './components/hayvan-tedavi/hayvan-tedavi.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { HayvanKayitAddComponent } from './components/hayvan-kayit-add/hayvan-kayit-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MamaComponent } from './components/mama/mama.component';
import { VatandasBilgiComponent } from './components/vatandas-bilgi/vatandas-bilgi.component';
import { HayvanSahiplendirmeComponent } from './components/hayvan-sahiplendirme/hayvan-sahiplendirme.component';
import { BelediyeBilgiComponent } from './components/belediye-bilgi/belediye-bilgi.component';
import { BelediyeBilgiAddComponent } from './components/belediye-bilgi-add/belediye-bilgi-add.component';
import { HayvanSahiplendirmeAddComponent } from './components/hayvan-sahiplendirme-add/hayvan-sahiplendirme-add.component';
import { MamaAddComponent } from './components/mama-add/mama-add.component';
import { VatandasBilgiAddComponent } from './components/vatandas-bilgi-add/vatandas-bilgi-add.component';
import { HayvanTedaviAddComponent } from './components/hayvan-tedavi-add/hayvan-tedavi-add.component';
import { HayvanKayitDeleteComponent } from './components/hayvan-kayit-delete/hayvan-kayit-delete.component';
import { HayvanKayitUpdateComponent } from './components/hayvan-kayit-update/hayvan-kayit-update.component';
import { BelediyeBilgiUpdateComponent } from './components/belediye-bilgi-update/belediye-bilgi-update.component';
import { BelediyeBilgiDeleteComponent } from './components/belediye-bilgi-delete/belediye-bilgi-delete.component';
import { HayvanSahiplendirmeDeleteComponent } from './components/hayvan-sahiplendirme-delete/hayvan-sahiplendirme-delete.component';
import { HayvanSahiplendirmeUpdateComponent } from './components/hayvan-sahiplendirme-update/hayvan-sahiplendirme-update.component';
import { HayvanTedaviUpdateComponent } from './components/hayvan-tedavi-update/hayvan-tedavi-update.component';
import { HayvanTedaviDeleteComponent } from './components/hayvan-tedavi-delete/hayvan-tedavi-delete.component';
import { MamaDeleteComponent } from './components/mama-delete/mama-delete.component';
import { MamaUpdateComponent } from './components/mama-update/mama-update.component';
import { VatandasBilgiUpdateComponent } from './components/vatandas-bilgi-update/vatandas-bilgi-update.component';
import { VatandasBilgiDeleteComponent } from './components/vatandas-bilgi-delete/vatandas-bilgi-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HayvanTurComponent } from './components/hayvan-tur/hayvan-tur.component';
import { HayvanTurAddComponent } from './components/hayvan-tur-add/hayvan-tur-add.component';
import { HayvanTurDeleteComponent } from './components/hayvan-tur-delete/hayvan-tur-delete.component';
import { HayvanTurUpdateComponent } from './components/hayvan-tur-update/hayvan-tur-update.component';
import { KafesNoComponent } from './components/kafes-no/kafes-no.component';
import { KafesNoAddComponent } from './components/kafes-no-add/kafes-no-add.component';
import { KafesNoUpdateComponent } from './components/kafes-no-update/kafes-no-update.component';
import { KafesNoDeleteComponent } from './components/kafes-no-delete/kafes-no-delete.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HayvanKayitPipe } from './pipes/hayvan-kayit.pipe';
import { HayvanTedaviAdPipe } from './pipes/hayvan-tedavi-ad.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HayvanKayitComponent,
    HayvanTedaviComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    HayvanKayitAddComponent,
    LoginComponent,
    MamaComponent,
    VatandasBilgiComponent,
    HayvanSahiplendirmeComponent,
    BelediyeBilgiComponent,
    BelediyeBilgiAddComponent,
    HayvanSahiplendirmeAddComponent,
    MamaAddComponent,
    VatandasBilgiAddComponent,
    HayvanTedaviAddComponent,
    HayvanKayitDeleteComponent,
    HayvanKayitUpdateComponent,
    BelediyeBilgiDeleteComponent,
    HayvanSahiplendirmeDeleteComponent,
    HayvanSahiplendirmeUpdateComponent,
    HayvanTedaviUpdateComponent,
    HayvanTedaviDeleteComponent,
    MamaDeleteComponent,
    MamaUpdateComponent,
    VatandasBilgiUpdateComponent,
    VatandasBilgiDeleteComponent,
    BelediyeBilgiUpdateComponent,
    LayoutComponent,
    RegisterComponent,
    HomeComponent,
    HayvanTurComponent,
    HayvanTurAddComponent,
    HayvanTurDeleteComponent,
    HayvanTurUpdateComponent,
    KafesNoComponent,
    KafesNoAddComponent,
    KafesNoUpdateComponent,
    KafesNoDeleteComponent,
    ProfileComponent,
    HayvanKayitPipe,
    HayvanTedaviAdPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,

    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide:JWT_OPTIONS,useValue:JWT_OPTIONS},JwtHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
