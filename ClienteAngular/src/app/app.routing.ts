//CONFIGURACIÓN DE LAS RUTAS

//Importar los módulos del router
import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";

//Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: LoginComponent}
];

//Exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);