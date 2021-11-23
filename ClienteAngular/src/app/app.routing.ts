//CONFIGURACIÓN DE LAS RUTAS

//Importar los módulos del router
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";
import { UserPerfilCompradorComponent } from "./components/user-perfil-comprador/user-perfil-comprador.component";
import { DomicilioAddComponent } from "./components/domicilio-add/domicilio-add.component";
import { TarjetaAddComponent } from "./components/tarjeta-add/tarjeta-add.component";
import { ProductoShowComponent } from "./components/producto-show/producto-show.component";
import { CarritoShowComponent } from "./components/carrito-show/carrito-show.component";
import { CarritoListComponent } from "./components/carrito-list/carrito-list.component";
import { CompraPagoComponent } from './components/compra-pago/compra-pago.component';
import { CompraConfirmacionComponent } from './components/compra-confirmacion/compra-confirmacion.component';
import { CompraListComponent } from './components/compra-list/compra-list.component';
import { CompraShowComponent } from './components/compra-show/compra-show.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

//Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'editUserComprador', component: UserEditComponent }, 
    { path: 'perfilComprador', component: UserPerfilCompradorComponent },
    { path: 'domicilio/new', component: DomicilioAddComponent },
    { path: 'tarjeta/new', component: TarjetaAddComponent },
    { path: 'productos', component: ProductoListComponent },  
    { path: 'producto/:productoId', component: ProductoShowComponent },
    { path: 'carrito', component: CarritoListComponent },
    { path: 'carrito/:carritoId', component: CarritoShowComponent },
    { path: 'pago/:carritoId', component: CompraPagoComponent },
    { path: 'compra/confirmacion/:compraId', component: CompraConfirmacionComponent },
    { path: 'compras', component: CompraListComponent },
    { path: 'compra/:compraId', component: CompraShowComponent },
    { path: 'productos', component: ProductoListComponent },
    { path: '**', component: LoginComponent}
];

//Exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);