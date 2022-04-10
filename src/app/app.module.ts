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
import { HekimComponent } from './components/hekim/hekim.component';
import { VatandasBilgiComponent } from './components/vatandas-bilgi/vatandas-bilgi.component';
import { HayvanSahiplendirmeComponent } from './components/hayvan-sahiplendirme/hayvan-sahiplendirme.component';
import { BelediyeBilgiComponent } from './components/belediye-bilgi/belediye-bilgi.component';
import { BelediyeBilgiAddComponent } from './components/belediye-bilgi-add/belediye-bilgi-add.component';
import { HayvanSahiplendirmeAddComponent } from './components/hayvan-sahiplendirme-add/hayvan-sahiplendirme-add.component';
import { HekimAddComponent } from './components/hekim-add/hekim-add.component';
import { MamaAddComponent } from './components/mama-add/mama-add.component';
import { VatandasBilgiAddComponent } from './components/vatandas-bilgi-add/vatandas-bilgi-add.component';
import { HayvanTedaviAddComponent } from './components/hayvan-tedavi-add/hayvan-tedavi-add.component';
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
    HekimComponent,
    VatandasBilgiComponent,
    HayvanSahiplendirmeComponent,
    BelediyeBilgiComponent,
    BelediyeBilgiAddComponent,
    HayvanSahiplendirmeAddComponent,
    HekimAddComponent,
    MamaAddComponent,
    VatandasBilgiAddComponent,
    HayvanTedaviAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
