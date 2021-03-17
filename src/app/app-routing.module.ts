import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { MensajesComponent } from './paginas/mensajes/mensajes.component';
import { UsuarioGuard } from './guardianes/usuario-guard';

const routes: Routes = [
  {path:'', component:LoginComponent },
  {path:'mensajes', component:MensajesComponent, canActivate: [UsuarioGuard] },
  {path:'**', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
