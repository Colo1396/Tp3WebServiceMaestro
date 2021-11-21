import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORT 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//ROUTING
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserPerfilCompradorComponent } from './components/user-perfil-comprador/user-perfil-comprador.component';

@NgModule({
  //componentes que representen algo en la vista
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    UserPerfilCompradorComponent
  ],
  //cargar los modulos dentro de la aplicación
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  //servicios
  providers: [
    appRoutingProviders
  ],
  //componente con el cual va iniciar
  bootstrap: [AppComponent]
})
export class AppModule { }
