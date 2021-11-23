import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { CreateDenunciaComponent } from './components/create-denuncia/create-denuncia.component';
import { DenunciaListComponent } from './components/denuncia-list/denuncia-list.component';
import { CreateReclamoComponent } from './components/create-reclamo/create-reclamo.component';
import { ReclamoListComponent } from './components/reclamo-list/reclamo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductoItemComponent,
    ProductoListComponent,
    CreateProductoComponent,
    UserProfileComponent,
    TransferirComponent,
    CreateDenunciaComponent,
    DenunciaListComponent,
    CreateReclamoComponent,
    ReclamoListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
