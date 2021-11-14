import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { RegisterComponent } from './components/register/register.component';
import { TransferirComponent } from './components/transferir/transferir.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoggedGuard } from './helpers/logged.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [LoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: '', redirectTo:'/products', pathMatch: 'full' },
  { path: 'products', component: ProductoListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateProductoComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'transfer', component: TransferirComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
